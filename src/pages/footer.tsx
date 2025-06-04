import FooterFix from "@/views/footer";

function FooterSection() {
    return (
        <div className="w-full py-8 -mt-5 bg-black"> {/* Tambahkan bg-black untuk konsistensi warna */}
            <div className="w-screen max-w-full px-0 flex items-center justify-center"> {/* w-screen untuk memastikan lebar penuh */}
                <FooterFix />
            </div>
        </div>
    )
}

export default FooterSection;