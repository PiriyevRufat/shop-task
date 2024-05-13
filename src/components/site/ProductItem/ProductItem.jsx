import React, { useContext } from 'react'
import MainContext from '../../../context/context';
const ProductItem = ({item}) => {
    const {basketItems} = useContext(MainContext);
    const addToBasket=(item)=>{
        const target= basketItems.find((basketItems)=>basketItems.id==item.id)
        if(target){
          target.count += 1
          target.totalPrice+=target.price
        }else{
          const newBasketItem={
            item:item,
            count:1,
            totalPrice:item.price,
          }
          setBasketItems([...basketItems,newBasketItem])
        }
        localStorage.setItem("basketItems",JSON.stringify(basketItems))
      }
  return (
    <div class="card" style={{width: "18rem"}}>
        <img src={item.image} class="card-img-top" alt="..."/>
        <div class="card-body">
        <p class="card-text">{item.title}</p>
        <h5 class="card-title">${item.price}</h5>
        <button className='btn btn-primary' onClick={()=>{
            addToBasket()
        }} >Add to basket</button>
        </div>
    </div>
  )
}

export default ProductItem;
