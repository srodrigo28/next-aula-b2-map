interface AprovadosProps{
    nome: string
    idade: number
}
export function Aprovado2(props: AprovadosProps){
    const nome = "Amanda Flávia"
    return(
        <div className="flex gap-2 justify-between items-center p-2 bg-black w-64">
            <p className="text-white flex justify-between flex-1">
                <span>{props.nome}</span>
                <span className="mr-2">{props.idade}</span>
            </p>
            <div className="flex gap-2 items-center">
                <button className="bg-blue-600 py-1 px-3 rounded-lg text-md">
                    +
                </button>
                <button className="bg-red-600 py-1 px-3 rounded-lg text-md">
                    -
                </button>
            </div>
        </div>
    )
}