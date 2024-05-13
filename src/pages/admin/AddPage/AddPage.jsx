import React, { useContext } from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../../context/context';
import Table from '../../../components/admin/Table/Table';
const AddPage = () => {
const {data}=useContext(MainContext)
  return (
    <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ image: '',title: '', price: '' }}
      validate={values => {
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:3000/products",{
           id:uuidv4(),
           title:values.title,
           price:values.price,
           image:values.image 
        }).then(res=>{
           setData([...data,res.data])
        })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
          placeholder='title...'
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.title && touched.title && errors.title}
          <input
            placeholder='image...'
            type="text"
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
          />
          {errors.image && touched.image && errors.image}
          <input
          placeholder='price...'
            type="text"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          {errors.price && touched.price && errors.price}
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
    <Table items={data}/>
  </div>
  )
}

export default AddPage
