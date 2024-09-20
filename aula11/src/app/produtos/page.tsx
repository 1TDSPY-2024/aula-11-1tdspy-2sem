import Link from "next/link"
import { produtos } from "./produtos"

export default function Produtos() {
  
  

  return (
    <div>
      <h2>Produtos</h2>
      <table>

        <thead>

          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Qtd</th>
          </tr>

        </thead>

        <tbody>
          
          {produtos.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.nome}</td>
            <td>{p.preco}</td>
            <td>{p.qtd}</td>
            <td><Link href={`/produto/${p.id}`}>Editar</Link></td>
          </tr>
          ))}

        </tbody>

        <tfoot>

          <tr>

          </tr>

        </tfoot>
      </table>

    </div>
  )
}
