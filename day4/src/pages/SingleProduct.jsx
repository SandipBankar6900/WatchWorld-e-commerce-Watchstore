import React, { useEffect, useState } from 'react';
import {useParams ,Link} from 'react-router-dom';
import axios from 'axios';


const SingleProduct=()=>{
  const {id}=useParams()
//   console.log(id)

const [data, setData] = useState({});

const fetchData=(id)=>{
    axios.get(`http://localhost:3000/watches/${id}`)
    .then(response => setData(response.data));
    
}
// console.log(data)
    
useEffect(() => {
  fetchData(id)
}, [id]);


    return <div>
        <h1>SingleProduct Page</h1>
        
          <img src={data.image_url} alt="name" style={{height:"200px"}}/>
          <p>Brand:{data.brand}</p>
          <p>Price:{data.price}</p>
          <p>quantity:{data.quantity}</p>
          <Link to={`/singleproduct/${id}`}>
          <button>Add To Cart</button>
          </Link>
    
    </div>



}
export default SingleProduct