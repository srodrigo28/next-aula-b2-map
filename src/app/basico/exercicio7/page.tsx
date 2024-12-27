import { Aprovado2 } from "@/components/Aprovado2"

export default function Exercicio7() {
    const listaDeAprovados = [
        {"id": 1, "nome": "Rebeca", "idade": 18},
        {"id": 2, "nome": "Guilherme", "idade": 18},
        {"id": 3, "nome": "Pamela", "idade": 18},
        {"id": 4, "nome": "Claudia", "idade": 18},
    ]

    return (
        <div className="flex flex-col justify-center gap-3 bg-black text-white">
            <h1 className="px-x py-2 bg-green-600 w-72 mx-auto text-center">Exercicio 7. Arrays</h1>

            <div className="flex gap-3 justify-center">
                <div className="flex w-72 flex-col items-center justify-center p-10 gap-3 
                    mt-5 bg-zinc-900">
                    {listaDeAprovados.map( item => {
                       return <Aprovado2 key={item.id} nome={item.nome} idade={item.idade} />
                    })}
                </div>
            </div>
        </div>
    )
}