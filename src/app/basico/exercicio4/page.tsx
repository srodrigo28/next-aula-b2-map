export default function Exercicio4() {
    const listaDeAprovados = [
        "Rebeca",
        "Guilherme",
        "Giulia",
        "Pamela",
        "Tiago",
    ]

    var item = listaDeAprovados;
    var item2 = []

    const spans = [
        <div className="flex flex-col gap-3 mt-5" key={1}>
            <span key={0}>{item[0]}</span>
            <span key={1}>{item[1]}</span>
            <span key={2}>{item[2]}</span>
            <span key={3}>{item[3]}</span>
            <span key={4}>{item[4]}</span>
        </div>
    ]

    for (let nome of listaDeAprovados) {
        item2.push(<span key={nome} className="flex flex-col mt-3"># {nome} </span>)
    }

    return (
        <div className="flex flex-col justify-center gap-3 bg-black text-white">
            <h1 className="px-3 py-2 bg-green-600 w-726 text-center">Exercicio 4. Arrays</h1>

            <div className="flex gap-3 w-full justify-center">
                
                <h3>{spans}</h3>
               
                <div className="mt-3">
                    {item2}
                </div>

                <div className="flex flex-col gap-3 mt-5">
                    {listaDeAprovados.map( item => (
                        <div key={item}>
                            <p>+ {item}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3 mt-5">
                {listaDeAprovados.map(item => {
                    return (
                        <div key={item}>
                            <p>x {item}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}