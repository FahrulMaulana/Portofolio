import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

type ImageScrollSequence2Props = {
  className?: string
  imageClassName?: string
  totalFrames?: number
  fps?: number
  scrub?: number
  frameBasePath?: string
  framePrefix?: string
  frameExtension?: string
  frameStartNumber?: number
}

function ImageScrollSequence2({
  className,
  imageClassName,
  totalFrames = 122,
  fps = 30,
  scrub = 1,
  frameBasePath = "/animasi/cakil",
  framePrefix = "ezgif-frame-",
  frameExtension = "jpg",
  frameStartNumber = 1,
}: ImageScrollSequence2Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imageCacheRef = useRef<Map<number, HTMLImageElement>>(new Map())
  const requestedFrameRef = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const sequenceImages = useMemo(() => {
    return Array.from({ length: totalFrames }, (_, i) => {
      const frame = String(i + frameStartNumber).padStart(3, "0")

      return `${frameBasePath}/${framePrefix}${frame}.${frameExtension}`
    })
  }, [frameBasePath, frameExtension, framePrefix, frameStartNumber, totalFrames])

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current

      if (!canvas) return

      const render = (img: HTMLImageElement) => {
        const ctx = canvas.getContext("2d", { willReadFrequently: true })

        if (!ctx) return

        const cssWidth = Math.max(1, Math.round(canvas.clientWidth || img.naturalWidth || 1))
        const cssHeight = Math.max(1, Math.round(canvas.clientHeight || img.naturalHeight || 1))
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        const targetWidth = Math.max(1, Math.round(cssWidth * dpr))
        const targetHeight = Math.max(1, Math.round(cssHeight * dpr))

        if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
          canvas.width = targetWidth
          canvas.height = targetHeight
        }

        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = "high"
        ctx.clearRect(0, 0, targetWidth, targetHeight)

        const imageAspect = img.naturalWidth / Math.max(1, img.naturalHeight)
        const canvasAspect = targetWidth / targetHeight
        let drawWidth = targetWidth
        let drawHeight = targetHeight
        let drawX = 0
        let drawY = 0

        if (imageAspect > canvasAspect) {
          drawHeight = targetWidth / imageAspect
          drawY = (targetHeight - drawHeight) / 2
        } else {
          drawWidth = targetHeight * imageAspect
          drawX = (targetWidth - drawWidth) / 2
        }

        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight)

        const frame = ctx.getImageData(0, 0, targetWidth, targetHeight)
        const pixels = frame.data

        // Remove greenscreen background while preserving edge details.
        for (let i = 0; i < pixels.length; i += 4) {
          const r = pixels[i]
          const g = pixels[i + 1]
          const b = pixels[i + 2]
          const greenDominance = g - Math.max(r, b)

          if (g > 90 && greenDominance > 30) {
            const alphaCut = Math.min(255, greenDominance * 3)
            pixels[i + 3] = Math.max(0, pixels[i + 3] - alphaCut)

            if (g > 135 && r < 120 && b < 120) {
              pixels[i + 3] = 0
            }
          }
        }

        // Keep the keying focused on dominant green only.

        ctx.putImageData(frame, 0, 0)
      }

      const cached = imageCacheRef.current.get(index)

      if (cached?.complete) {
        render(cached)

        return
      }

      const nextImage = new Image()
      nextImage.src = sequenceImages[index]
      nextImage.decoding = "async"
      imageCacheRef.current.set(index, nextImage)

      nextImage.onload = () => {
        if (requestedFrameRef.current !== index) return

        render(nextImage)
      }
    },
    [sequenceImages]
  )

  useLayoutEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const frameState = { value: 0 }
    const totalFrameIndex = sequenceImages.length - 1
    let lastTickTs = performance.now()
    let renderedFrame = 0
    let targetFrame = 0
    const smoothFactor = Math.max(0.08, Math.min(0.4, fps / 120))

    for (const src of sequenceImages.slice(0, Math.min(40, sequenceImages.length))) {
      const preloadImg = new Image()
      preloadImg.src = src

      const extractedFrame = Number(src.match(/(\d+)\.[^.]+$/)?.[1] ?? "0")
      const frameNumber = extractedFrame - frameStartNumber

      if (frameNumber >= 0) {
        imageCacheRef.current.set(frameNumber, preloadImg)
      }
    }

    const ctx = gsap.context(() => {
      gsap.to(frameState, {
        value: totalFrameIndex,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom top",
          scrub,
        },
        onUpdate: () => {
          targetFrame = frameState.value
        },
      })

      const tickFrame = () => {
        const now = performance.now()
        const deltaMs = Math.min(64, now - lastTickTs)
        lastTickTs = now
        const deltaFrames = Math.max(0.25, deltaMs / 16.667)
        const blend = 1 - Math.pow(1 - smoothFactor, deltaFrames)

        renderedFrame += (targetFrame - renderedFrame) * blend

        if (Math.abs(targetFrame - renderedFrame) < 0.001) {
          renderedFrame = targetFrame
        }

        const nextIndex = Math.max(0, Math.min(totalFrameIndex, Math.round(renderedFrame)))
        setCurrentIndex((prev) => (prev === nextIndex ? prev : nextIndex))
      }

      gsap.ticker.add(tickFrame)

      gsap.fromTo(
        canvasRef.current,
        { y: 36, scale: 0.96 },
        {
          y: -36,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom top",
            scrub,
          },
        }
      )

      return () => {
        gsap.ticker.remove(tickFrame)
      }
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [fps, frameStartNumber, scrub, sequenceImages])

  useEffect(() => {
    requestedFrameRef.current = currentIndex
    drawFrame(currentIndex)
  }, [currentIndex, drawFrame])

  return (
    <div
      ref={containerRef}
      className={cn("w-full py-2 flex items-center justify-center pt-10", className)}
    >
      <div className="w-[82vw] max-w-[460px] overflow-visible">
        <canvas
          ref={canvasRef}
          aria-label={`Cakil sequence frame ${currentIndex + frameStartNumber}`}
          className={cn("block h-[460px] w-full", imageClassName)}
        />
      </div>
    </div>
  )
}

export default ImageScrollSequence2
