import React from 'react'
import TableItem from '../TableItem/TableItem'

const Table = ({items}) => {
  return (
    <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">image</th>
      <th scope="col"><title></title></th>
      <th scope="col">price</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    {
        items.map((item,index)=>{
            return(<TableItem key={index}  item={item}/>)
        })
    }
  </tbody>
</table>
  )
}

export default Table