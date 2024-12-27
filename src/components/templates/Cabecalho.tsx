import Logo from "./Logo"
export interface CabecalhoProps{

}
export default function Cabecalho(props: CabecalhoProps){
    return(
        <header className="flex items-center h-20 border-b-8 border-zinc-800
            w-[1200] mb-5
        ">
            <Logo />
        </header>
    )
}