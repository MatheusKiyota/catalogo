// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`


import { useState } from "react";

export default function Home() {

  const [listaProdutos, setProdutos] = useState ([
    { id: 1, nome: "MONTBLANC - EXPLORER", preco: 'R$ 499,00'},
    { id: 2, nome: "MONTBLANC - LEGEND EDT", preco: 'R$ 359,90'},
    { id: 3, nome: "ARMAF - CLUB DE NUIT INTENSE MAN", preco: 'R$ 279,00'}
  ]);

    const [listaPedidos, setListaPedidos] = useState([]);

    const adicionarItemPedidos = (objeto) => {
      setListaPedidos([...listaPedidos,objeto])
    }

  return (
    <div>
        <h1> Kiyota's Fragance</h1>

        {
          listaProdutos.map((produto) =>
          <div key={produto.id}> 
          <p> {produto.nome}</p>
          <p> {produto.preco}</p>
        
          </div>
          )
        }
    </div>
   
  );
}