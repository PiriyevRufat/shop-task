import React from 'react'
import { useContext } from "react";
import MainContext from '../../../context/context'; 
import ProductItem from '../ProductItem/ProductItem';

const Product = () => {
  const {data}=useContext(MainContext)
  return (
    <div style={{display:"flex",width:"100%" ,padding:"100px 0px",flexWrap:"wrap"}}>
    {
        data.map((item,index)=>(
                <ProductItem key={index} item={item}/>
        ))
    }
    </div>
  )
}

export default Product