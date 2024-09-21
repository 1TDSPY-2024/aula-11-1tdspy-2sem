interface propsParams{
    id: number
}
 
export default function Produto({ params }:{ params: propsParams }) {
  return (
    <div>
        <h2>Produto</h2>
        <div>
            <p>ID: {params.id} </p>
        </div>
    </div>
  )
}