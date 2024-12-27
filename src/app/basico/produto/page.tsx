'use client'

import { useEffect, useState } from "react";

interface IProduto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  img: string;
}

export default function Produto() {
  
  const [data,setData] = useState<IProduto[]>([]);

  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("");
  const [preco, setPreco] = useState("");
  const [img, setImg] = useState("");

  const url = "http://localhost:3000/produtos"

  useEffect(function(){
    const res = fetch(url)
  })

  function Cadastrar (){
    alert("Nome: " + nome + " Descrição: " + desc + " Preço: " + preco + " Img: " + img )
  }

  return (
    <div className="flex flex-col justify-center gap-3 bg-black text-white">
      <form className="flex gap-2 p-5 text-white flex-col bg-zinc-700 w-full md:w-[400] h-[330]">
        <h2 className="font-bold mb-2 text-2xl">Cadastro de Produtos</h2>
        
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 rounded-md outline-none border-none"
        />

        <input
          type="text"
          placeholder="Descrição"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 rounded-md outline-none border-none"
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="w-full p-2 rounded-md outline-none border-none"
        />

        <input
          type="text"
          placeholder="Imagem"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="w-full p-2 rounded-md outline-none border-none"
        />
        
        <div className="flex mt-2">
          <button className="bg-green-600 p-2 rounded-lg" onClick={() => Cadastrar()}>Cadastrar</button>
        </div>
      </form>

      <div className="flex flex-col bg-zinc-700 text-white p-5 font-bold w-full md:w-[400] h-[300]">
        <h2 className="text-2xl">Listagem de produtos</h2>
        <ul>
          {data.map((produto) => (
            <li className="flex gap-5" key={produto.id}>
              <span>{produto.nome}</span>
              <span>{produto.preco}</span>
              <span><img src={produto.img} alt={produto.nome} /></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}