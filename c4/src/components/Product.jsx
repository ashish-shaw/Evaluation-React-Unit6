import React, { useEffect, useState } from "react"
import Card from "./card"
import Loading from "./Loading"

const empty = []
const Product =  () => {
    const [select, setSelect] = useState(empty)
    const fetchData = async () => {
        try{
            const res = await fetch("https://movie-fake-server.herokuapp.com/products")
            //console.log(res);
            const data = await res.json()
            console.log(data);
            setSelect(data)
           // console.log(data);
        }
        catch(e){
            console.log("Error is " + e);
        }
    }

    useEffect(()=>{
        fetchData()
    },[]);

    if(select.length===0){
        return (
            <Loading/>
        )
    }

    return (
        <>
          <h1>Products</h1>
          {
              select.map((val)=>{
                  //console.log(val);
                  return(
                   
                    <Card
                    key = {val.id}
                    image={val.image}
                    title={val.title}
                    brand={val.brand}
                    category={val.category}
                    price = {val.price}
                   
                    />
                  )
              })
          }
          
        
        
              
        </>
      );
}

export default Product