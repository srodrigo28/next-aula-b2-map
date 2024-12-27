export default function Exercicio3(){
    const numero = 10
    const numPar = numero % 2 === 0
    
   // 1 const resultado = numero % 2 == 0 ? 'Par' : 'Ímpar' 
   
   // 2 ternario com jsx
    const resultado = numero % 2 == 0 ? (
      <span className="text-green-500 text-3xl font-semibold">Par :)</span>
    ) : <span className="text-red-500 text-3xl font-semibold">Ímpar :(</span>
  
    // 3 função 
    function renderizarParOuImpar(numero: number = 10) {
        if( numero % 2 === 0 ) {
          return <span className="text-green-500 text-3xl font-semibold">Par :</span>
        }else{
          return <span className="text-red-500 text-3xl font-semibold">Ímpar :</span>
        }
    }
    return(
        <div className="flex flex-col justify-center gap-3 bg-black text-white">
          <h1 className="p-2 bg-green-600 text-white text-3xl">JSX 3. Condições e funções</h1>
          <h3 className="text-center text-xl"> Usando condicionais simples do dia a dia</h3>  
          
          <hr className="mt-5 mb-5" />

          <span>{resultado}</span>

            { numPar && (
                <span className="text-green-400">O resto da divisão por 2 é 0</span>
            )}

            <h3>Exemplo 3</h3>
            { renderizarParOuImpar(numero) }
        </div>
    )
}