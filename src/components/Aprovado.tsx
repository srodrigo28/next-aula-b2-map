export function Aprovado(props: any){
    return(
        <div
            className="flex gap-2 justify-between items-center p-2 bg-black w-64"
        >
            <span className="text-white ">
                {props.nome}
            </span>
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