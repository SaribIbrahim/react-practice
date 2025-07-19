import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./TestProducts.css"


function TestProducts() {
  
  let {handleBlur,handleChange,handleReset,handleSubmit,values,errors,touched}=useFormik({
    initialValues:{
      title:"",
      description:"",
      price:"",
      category:""
    },
    validationSchema:Yup.object({
      title:Yup.string().required("Title is required").min(3,"Atleast 3 characters required"),
      description:Yup.string().required("Description is required"),
      price:Yup.number().typeError("Price must be a number").min(10,"Minimum Price must be $10").required(),
      category:Yup.string().required()
    }),
    onSubmit:(vals,{resetForm})=>{
      console.log(vals);
      resetForm();
    }
  });
  
  
  return (
    <div className='p-5 w-50 ms-5 form'>
      <form className="row g-3" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="col-12">
          <label htmlFor="Title" className="form-label">Title</label>
          <input onChange={handleChange} onBlur={handleBlur} type="text" name='title' className="form-control" id="Title" value={values.title}/>
        </div>
        <div className="error" style={{color:"red"}}>{touched.title && errors.title?errors.title:""}</div>
        <div className="col-12">
          <label htmlFor="Description" className="form-label">Description</label>
          <textarea onChange={handleChange} onBlur={handleBlur} type="text" name='description' className="form-control" id="Description" value={values.description}/>
        </div>
        <div className="error" style={{color:"red"}}>{touched.description && errors.description?errors.description:""}</div>
        <div className="col-12">
          <label htmlFor="Price" className="form-label">Price</label>
          <input onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="Price" placeholder="Price" value={values.price} name='price'/>
        </div>
        <div className="error" style={{color:"red"}}>{touched.price && errors.price?errors.price:""}</div>
        <div className="col-12">
          <label htmlFor="Category" className="form-label">Category</label>
          <select onChange={handleChange} onBlur={handleBlur} id="Category" className="form-select" value={values.category} name='category'>
            <option value="" >Choose Category</option>
            <option>Electronics</option>
            <option>Men's Wear</option>
            <option>Sports</option>
          </select>
        </div>
        <div className="error" style={{color:"red"}}>{touched.category && errors.category?errors.category:""}</div>
        <div className="col-12 button">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>

    </div>
  )
}

export default TestProducts