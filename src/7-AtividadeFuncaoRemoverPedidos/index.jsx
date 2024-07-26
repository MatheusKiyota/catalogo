// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

import { useState } from "react";

export default function Home() {

  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: "MONTBLANC - EXPLORER", preco: 'R$ 499,00' },
    { id: 2, nome: "MONTBLANC - LEGEND EDT", preco: 'R$ 359,90' },
    { id: 3, nome: "ARMAF - CLUB DE NUIT INTENSE MAN", preco: 'R$ 279,00' }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos, objeto]);
  };


  return (
    <div>
      <h1>Kiyota' Fragance</h1>

      {listaProdutos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
        </div>
      ))}

      {listaPedidos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
        </div>
      ))}
    </div>
  );
}
