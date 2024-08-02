// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

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

  const removerPedido = (id) => {
    let remover = false;
    let listaAux = listaPedidos.filter((produto) => {
      if (remover === false) {
        if (produto.id !== id) {
          return produto;
        } else {
          remover = true;
          return null;
        }
      } else {
        return produto;
      }
    });
    setListaPedidos(listaAux);
  };

  return (

  

    <div>

      <div>
    <Header title={"Kiyota' Fragance"}/>
  </div>

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
          <button onClick={() => removerPedido(produto.id)}>Remover</button>
        </div>
      ))}

    <div>
    <Footer desenvolvedor={"Matheus Kiyota"}/>
  </div>

    </div>
  );
}
