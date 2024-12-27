export interface MenuProps{
    children: React.ReactNode
}

export default function Menu(props: MenuProps){
    return(
        <nav className="flex flex-col gap-2">
            { props.children }
        </nav>
    )
}