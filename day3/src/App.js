
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);
    
  useEffect(() => {
    axios.get(`http://localhost:3000/watches
    
    `)
      .then(response => setPosts(response.data));
  }, []);



  return (
    <div className="App">

<h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <div key={post.id}  style={{}}>
            <h2>{post.brand}</h2>
            <p>{post.price}</p>
            <img src={post.image_url} alt='jajjaa'/>
          </div>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
