import React from "react"
import { Link } from "react-router-dom"

const ProductCard=(props)=>{

     
    return(

        
        <div style={{border:"1px solid red",margin:"20px",padding:"10px"}}>
       <img src={props.image_url} alt="name" style={{height:"200px"}}/>
       <p>Brand:{props.brand}</p>
       <p>Price:{props.price}</p>
       <Link to={`/products/${props.id}`}>
       <button>More Details</button>
       
       </Link>



        </div>
        
    )



}
export default ProductCard