import Image from "next/image"
export default function LogoAlt() {
    const logo = "https://imagescdn.dealercarsearch.com/Media/22179/20421549/638301429368507680.jpg"
    return (
        <div className="flex items-center gap-2">
            <Image className="rounded-full" src={logo} width={50} height={50} alt="Logo" />
            <span>BMW</span>
        </div>
    )
}