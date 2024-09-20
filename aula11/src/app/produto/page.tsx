export default function Produto({param}:{param:{id:number}}){
    return(
        <div> 
            <h2>Produto</h2>
            <div>
                <p>Id: {param.id}</p>
            </div>
        </div>
       
    );
}