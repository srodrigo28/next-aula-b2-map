import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandReact, IconBrandTypescript, IconHeart } from "@tabler/icons-react";

export default function Rodape(){
    return(
        <footer className="flex gap-1.5 items-center justify-center text-zinc-400 border-t-8 border-zinc-800 w-[1200]">
            <span>Feito com</span>
            <IconHeart size={30} className="text-red-600" stroke={1} />
            <span>Treinamentos diários.</span>
            
            <IconBrandHtml5 size={30} className="text-orange-500" stroke={1} />
            <IconBrandCss3 size={30} className="text-sky-600" stroke={1} />
            <IconBrandJavascript size={30} className="text-yellow-500" stroke={1} />
            <IconBrandTypescript size={30} className="text-blue-600" stroke={1} />
            <IconBrandReact size={30} className="text-blue-600" stroke={1} />
        </footer>
    )
}