import { IconBrandReact } from "@tabler/icons-react"

export default function Logo(){
    return(
        <div className="flex items-center gap-1 duration-300 cursor-pointer text-zinc-400 hover:text-zinc-50">
            <IconBrandReact size={60} stroke={1} />
            <span className="text-2xl font-mono"> React & Next </span>
        </div>
    )
}