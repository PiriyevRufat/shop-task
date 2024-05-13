import { useState,useEffect } from 'react'
import ROUTES from './Routes/Routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContext from './context/context'
import axios from 'axios'

function App() {
  const router=createBrowserRouter(ROUTES)
  const[data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState("")
  const [basketItems,setBasketItems]=useState(localStorage.getItem("basketItems")?JSON.parse(localStorage.getItem("basketItems")):[])
  const contextData={
    data,setData,loading,setLoading,error,setError,basketItems,setBasketItems
  }
  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
      setData([...res.data])
      setLoading(false)
    }).catch(error=>{
      setError(error)
      setLoading(false)
    })
  },[])
  return (
    <MainContext.Provider value={contextData}>
    <RouterProvider router={router}/>
    </MainContext.Provider>
  )
}

export default App
