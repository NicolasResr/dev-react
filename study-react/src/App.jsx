import { useEffect, useState } from 'react';
import './App.css';
import ApiPokemon from './class/apiPokemon';
import { Card } from './class/card';


function App() {
  const [product, setProduct] = useState(null)
  useEffect(()=>{
    console.log('entrei no useEfect')
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data =>{
      setProduct(data)
    })
  },[])
  console.log('sai no useEfect')
  console.log(product)
  
  
  return <div className="">
  {
    product && product.map((prd,id)=>{
        return <Card image={prd.image} title={prd.title} description={prd.description}/>
      })
    }
    
    </div>
}

export default App;
