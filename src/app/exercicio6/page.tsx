import { Aprovado } from "@/components/Aprovado"

export default function Exercicio6() {
    const listaDeAprovados = [
        "Rebeca",
        "Guilherme",
        "Giulia",
        "Pamela",
        "Tiago",
    ]

    return (
        <div className="flex flex-col h-screen bg-black text-white justify-center">
            <h1 className="px-3 py-2 bg-green-600 w-72 text-center">Exercicio 6. Arrays</h1>

            <div className="flex gap-3 overflow-auto">
                <div className="flex w-72 flex-col items-center justify-center p-10 gap-3 
                    mt-5 bg-zinc-900">
                    {listaDeAprovados.map( nome => {
                       return <Aprovado key={nome} nome={nome} />
                    })}
                </div>
            </div>
        </div>
    )
}