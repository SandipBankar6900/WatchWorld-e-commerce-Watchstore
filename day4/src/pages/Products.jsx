import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "../Components/ProductCard"

const Products=()=>{
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      axios.get(`http://localhost:3000/watches`)
        .then(response => setPosts(response.data));
    }, []);
  



    return(
        
   <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px"}}>
    
      
        {posts.map(post => (
          <ProductCard key={post.id} {...post}/>
        ))}
      

       </div>

    )



}
export default Products