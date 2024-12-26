import Exercicio7 from "./exercicio7/page";

export default function Home() {

  return (
    <div className="flex flex-col gap-2 w-screen h-screen items-center 
       bg-black text-white pt-5">
        <h1 className="text-3xl">Exercício 7</h1>
        <Exercicio7 />
    </div>
  );
}