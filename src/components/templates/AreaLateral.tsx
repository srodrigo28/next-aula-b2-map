export interface AreaLateralProps{
    children: React.ReactNode
}

export default function AreaLateral(props: AreaLateralProps){
    return(
        <aside className="p-6 w-56 border-zinc-800 border-r">
            {props.children}
        </aside>
    )
}