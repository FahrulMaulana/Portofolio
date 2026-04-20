import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

type ImageScrollSequenceProps = {
  className?: string
  imageClassName?: string
  totalFrames?: number
  fps?: number
  scrub?: number
  frameBasePath?: string
  framePrefix?: string
  frameExtension?: string
}

function ImageScrollSequence({
  className,
  imageClassName,
  totalFrames = 120,
  fps = 30,
  scrub = 1,
  frameBasePath = "/animasi/cukal",
  framePrefix = "Character_Dad_Green_A_young_Asian_man_with_dark_hair_and_glasses_uzZnxQsh_",
  frameExtension = "png",
}: ImageScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imageCacheRef = useRef<Map<number, HTMLImageElement>>(new Map())
  const requestedFrameRef = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const sequenceImages = useMemo(() => {
    return Array.from({ length: totalFrames }, (_, i) => {
      const frame = String(i + 1).padStart(3, "0")

      return `${frameBasePath}/${framePrefix}${frame}.${frameExtension}`
    })
  }, [frameBasePath, frameExtension, framePrefix, totalFrames])

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current

      if (!canvas) return

      const render = (img: HTMLImageElement) => {
        const ctx = canvas.getContext("2d", { willReadFrequently: true })

        if (!ctx) return

        const targetWidth = Math.max(1, Math.round(canvas.clientWidth || img.naturalWidth || 1))
        const targetHeight = Math.max(1, Math.round(canvas.clientHeight || img.naturalHeight || 1))

        if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
          canvas.width = targetWidth
          canvas.height = targetHeight
        }

        ctx.clearRect(0, 0, targetWidth, targetHeight)
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight)

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

        // Apply a stronger key on the upper area to remove thin green line artifacts.
        const upperCleanupBand = Math.floor(targetHeight * 0.28)

        for (let y = 0; y < upperCleanupBand; y += 1) {
          for (let x = 0; x < targetWidth; x += 1) {
            const offset = (y * targetWidth + x) * 4
            const r = pixels[offset]
            const g = pixels[offset + 1]
            const b = pixels[offset + 2]
            const a = pixels[offset + 3]

            if (a > 0 && g > 60 && g >= r + 8 && g >= b + 8) {
              pixels[offset + 3] = 0
            }
          }
        }

        const isMostlyBlackRow = (row: number) => {
          let darkPixels = 0

          for (let x = 0; x < targetWidth; x += 1) {
            const offset = (row * targetWidth + x) * 4
            const r = pixels[offset]
            const g = pixels[offset + 1]
            const b = pixels[offset + 2]
            const a = pixels[offset + 3]

            if (a > 20 && r < 28 && g < 28 && b < 28) {
              darkPixels += 1
            }
          }

          return darkPixels / targetWidth > 0.92
        }

        const maxTrimRows = Math.floor(targetHeight * 0.3)
        let topTrim = 0
        let bottomTrim = 0

        while (topTrim < maxTrimRows && isMostlyBlackRow(topTrim)) {
          topTrim += 1
        }

        while (bottomTrim < maxTrimRows && isMostlyBlackRow(targetHeight - 1 - bottomTrim)) {
          bottomTrim += 1
        }

        for (let y = 0; y < topTrim; y += 1) {
          for (let x = 0; x < targetWidth; x += 1) {
            const offset = (y * targetWidth + x) * 4
            pixels[offset + 3] = 0
          }
        }

        for (let y = targetHeight - bottomTrim; y < targetHeight; y += 1) {
          for (let x = 0; x < targetWidth; x += 1) {
            const offset = (y * targetWidth + x) * 4
            pixels[offset + 3] = 0
          }
        }

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
    const frameIntervalMs = 1000 / Math.max(fps, 1)
    let lastUpdateTs = 0
    let renderedFrame = 0
    let targetFrame = 0

    for (const src of sequenceImages.slice(0, Math.min(24, sequenceImages.length))) {
      const preloadImg = new Image()
      preloadImg.src = src

      const frameNumber = Number(src.match(/_(\d+)\.[^.]+$/)?.[1] ?? "0") - 1

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

        if (now - lastUpdateTs < frameIntervalMs) return

        lastUpdateTs = now
        renderedFrame += (targetFrame - renderedFrame) * 0.35

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
  }, [fps, scrub, sequenceImages])

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
          aria-label={`Fahrul sequence frame ${currentIndex + 1}`}
          className={cn("block h-[460px] w-full", imageClassName)}
        />
      </div>
    </div>
  )
}

export default ImageScrollSequence