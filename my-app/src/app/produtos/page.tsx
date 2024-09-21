import Link from "next/link"
 
export default function Produtos() {
    const produtos = [
        {id: 1, nome: "Mouse", preco: 100.0, qtd: 2},
        {id: 2, nome: "Teclado", preco: 200.0, qtd: 1},
        {id: 3, nome: "Monitor", preco: 300.0, qtd: 3},
        {id: 4, nome: "Processador", preco: 2200, qtd: 5},
        {id: 5, nome: "Placa de Vídeo", preco: 2500, qtd: 2},
    ]
 
  return (
    <div>
        <h2>Produtos</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                {
                    produtos.map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.qtd}</td>
                            <td> <Link href={`/produto/${produto.id}`}>Editar</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
 