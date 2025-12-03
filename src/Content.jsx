 function Content(){
var products=[{id:1, name:"farida"},{id:2, name:"Noori"}]

return(
        <>
        <ol>
          {
            products.map((product)=>{
                return <li key={product.id}> {product.name}</li>
            })

        
          }
        </ol>
        </>
    )
}
export default Content;