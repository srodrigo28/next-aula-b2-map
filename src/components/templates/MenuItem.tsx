import Link from "next/link"

export interface MenuItemProps{
    link: string
    texto: string
    icone?: any
}
export default function MenuItem(props: MenuItemProps){
    return(
        <Link 
            href={props.link} 
            className="bg-zinc-900 flex gap-2 
                items-center hover:bg-violet-500 duration-300 p-2 px-5 rounded-md w-44
            ">
            {props.icone}
            <span className="pl-2 p-2">{props.texto}</span>
        </Link >
    )
}