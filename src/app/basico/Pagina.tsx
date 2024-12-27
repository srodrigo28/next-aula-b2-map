import { Icon360View, IconHome, IconUser } from "@tabler/icons-react"
import AreaLateral from "../../components/templates/AreaLateral"
import Cabecalho from "../../components/templates/Cabecalho"
import Menu from "../../components/templates/Menu"
import MenuItem from "../../components/templates/MenuItem"
import Rodape from "../../components/templates/Rodape"

interface PaginaProps{
    children: React.ReactNode
}

export default function Pagina(props: PaginaProps){
    return(
        <div className="flex flex-col h-screen w-screen bg-black text-white">
            <Cabecalho />
            <div className="flex flex-1">
            <AreaLateral>
                <Menu>
                    <span className="uppercase text-zinc-500 text-sm">Components n1</span>
                    <MenuItem link="/basico/exercicio3" texto="Exercício 3" icone={<IconHome />}/>
                    <MenuItem link="/basico/exercicio4" texto="Exercício 4" icone={<Icon360View />} />
                    <MenuItem link="/basico/exercicio5" texto="Exercício 5" icone={<IconUser /> }/>
                    <MenuItem link="/basico/exercicio6" texto="Exercício 6" icone={<IconUser /> }/>
                    <MenuItem link="/basico/exercicio7" texto="Exercício 7" icone={<IconUser /> }/>
                </Menu>                
            </AreaLateral>
            <main className="p-6 flex-1">{props.children}</main>
            </div>
            <Rodape />
        </div>
    )
}