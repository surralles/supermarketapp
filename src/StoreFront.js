import React from "react";
import {useEffect, useState} from "react";
import Product from "./Product";
import Loader from "./Loader.js"

export default function StoreFront() {
    const [products,setProducts]=useState();
     const [isLoading, setIsLoading]=useState(true);
    useEffect(()=>{
      (async()=>{
          try{
          const response = await fetch("https://react-tutorial-demo.firebaseio.com/products.json")  
          const data = await response.json()
         setProducts(data);
          } catch (error) {
              console.log(error)
          } finally {
            setIsLoading(false);
        
          }
      }) ();
    },[])

if (!products) {
    return null;
  };

    
    return <div className="store-front">

      {isLoading && <Loader />}
      {products.map(product => <Product key={product.id} details={product}/>)}

    </div>;
}