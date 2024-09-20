import Link from "next/link"

export default function Produtos(){

    const produtos = [
        {id: 1, nome: "Mouse", preco: 100.0, qtd: 3},
        {id: 2, nome: "Mouse 2", preco: 101.0, qtd: 4},
    ]

  return (
    <div>
        <h1>Produtos</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((p) => (
                    <tr key={p.id}>
                        <td>
                            {p.id}
                        </td>
                        <td>
                            {p.nome}
                        </td>
                        <td>
                            {p.preco}
                        </td>
                        <td>
                            {p.qtd}
                        </td>
                        <td><Link  href={`/produto/${p.id}`}> Editar </Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
