import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import BasketItem from '../BasketItem/BasketItem'
const Basket = ({items}) => {
    const {data,basketItems}=useContext(MainContext)
  return (
    <div>
    <table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">image</th>
        <th scope="col">title</th>
        <th scope="col">price</th>
        <th scope="col">delete</th>
      </tr>
    </thead>
    <tbody>
      {
          basketItems.map((item,index)=>{
              return(<BasketItem key={index}  item={item}/>)
          })
      }
    </tbody>
  </table>
    </div>
  )
}

export default Basket
