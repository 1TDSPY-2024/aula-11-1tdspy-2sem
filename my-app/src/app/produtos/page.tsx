import Link from "next/link"

export default function Produtos() {


    const produtos = [
        {
          "id": 1,
          "nome": "Smartphone X Pro",
          "marca": "TechBrand",
          "preco": 2999.99,
          "estoque": 50,
          "tela": "6.5 polegadas",
          "memoria": "128GB"
        },
        {
          "id": 2,
          "nome": "Notebook Ultra",
          "marca": "CompTech",
          "preco": 4999.90,
          "estoque": 30,
          "processador": "Intel Core i7",
          "memoriaRAM": "16GB"
        },
        {
          "id": 3,
          "nome": "Câmera DSLR Pro",
          "marca": "PhotoMaster",
          "preco": 3499.99,
          "estoque": 20,
          "resolucao": "24.1 MP",
          "zoom": "15x"
        },
        {
          "id": 4,
          "nome": "Fone de Ouvido Wireless",
          "marca": "SoundPlus",
          "preco": 499.99,
          "estoque": 100,
          "autonomiaBateria": "20 horas",
          "cor": "Preto"
        }
      ]
      


  return (
    <div>
        <h2>Produtos</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Preco</th>
                    <th>Estoque</th>
                    <th>Detalhes</th>
                </tr>
            </thead>
            <tbody>
                {
                produtos.map(produto => (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.marca}</td>
                    <td>{produto.preco}</td>
                    <td><Link href={`/produto/${produto.id}`}>Editar</Link></td>
                    </tr>
                )
            )
            }
            </tbody>
        </table>
        
    </div>
  )
}
