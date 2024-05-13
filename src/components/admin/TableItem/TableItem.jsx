import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'

const TableItem = ({item}) => {
    const {data,setData}=useContext(MainContext)
    const deleteItem =(id)=>{
        axios.delete(`http://localhost:3000/products/${id}`).then(res=>{
            setData([...data.filter(x=>x.id!=res.data.id)])
        })
    }
  return (
    <tr>
    <th scope="row">{item.id}</th>
    <td><img src={item.image} alt="" width="60px" height="60px" /></td>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td><button className='btn btn-danger' onClick={()=>{
        deleteItem(item.id)
    }}>Delete</button></td>
  </tr>
  )
}

export default TableItem