export default function Exercicio5() {
    const listaDeAprovados = [
        "Rebeca",
        "Guilherme",
        "Giulia",
        "Pamela",
        "Tiago",
    ]

    return (
        <div className="flex flex-col bg-black text-white justify-center">
            <h1 className="px-3 py-2 bg-green-600 w-726 text-center">Exercicio 5. Arrays</h1>

            <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center p-10 gap-3 mt-5 bg-zinc-900 w-64">
                    {listaDeAprovados.map( item => (
                        <div key={item} className="bg-black p-2 w-56 flex justify-between items-center">
                            <p>+ {item}</p>
                            <div className="flex gap-2">
                                <button className=" bg-green-500 py-1 px-3 rounded-sm opacity-80 hover:rotate-180 hover:rounded-xl font-semibold hover:opacity-100 duration-300">+</button>
                                <button className="py-1 px-3 bg-red-500 rounded-md">+</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}