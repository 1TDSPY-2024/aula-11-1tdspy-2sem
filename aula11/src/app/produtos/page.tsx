export default function Produtos(){
    const produtos = [
        {id:1,nome:"mouse",preco:54.20,qtd:3},
        {id:2,nome:"teclado",preco:154.20,qtd:7},
        {id:3,nome:"tv",preco:1254.20,qtd:6},
        {id:4,nome:"computador",preco:4354.20,qtd:2},
        {id:5,nome:"mousepad",preco:24.20,qtd:12},
        {id:5,nome:"placa de video",preco:1524.20,qtd:12},

    ]
    return(
        <div>
            <h2>Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map((p)=> (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.qtd}</td>
                        </tr>
                    ))}
                
                    
                
                </tbody>

                <tfoot>
                    <tr>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}