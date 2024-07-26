// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {

  const [listaProdutos, setProdutos] = useState ([
    
    { id: 1, nome: "MONTBLANC - EXPLORER", preço: 'R$ 499,00'},
    { id: 2, nome: "MONTBLANC - LEGEND EDT", preço: 'R$ 359,90'},
    { id: 3, nome: "ARMAF - CLUB DE NUIT INTENSE MAN", preço: 'R$ 279,00'}

  ]);


  return (
    <div>
        <h1> Kiyota's Fragance</h1>
    </div>
   
  );
}

