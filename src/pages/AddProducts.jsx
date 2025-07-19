import React from 'react'
import {  useFormik } from 'formik'
import * as Yup from 'yup'


function AddProducts() {
  
   let {handleChange,handleSubmit,values,errors,touched,handleReset,handleBlur} = useFormik({
    initialValues:{
        title:"",
        description:"",
        price:"",
        // image:"",
        category:""
    },
    validationSchema:Yup.object({
        title:Yup.string("Title must be a string").required("Title is required").min(5,"Title must be alteast 5 characters"),
        description:Yup.string("Description must be a string").required("Description is required"),
        price:Yup.number().typeError("Price must be a number").required("Price is required").min(10,"Minimum price must be $10"),
        // image:Yup.string("Image must be a string").required("Image is required"),
        category:Yup.string().required("Category is required")
    }),
    onSubmit:(vals,{resetForm})=>{
        console.log(vals);
        resetForm();
    }
   });

    return (
        <div className='w-50 p-5'>
            <form className="row g-3" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="col-12 ">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input name='title' type="text" className="form-control" id="Title" onChange={handleChange} onBlur={handleBlur} value={values.title}/>
                </div>
                <div className="error mt-0" style={{color:"red"}}>{touched.title &&  errors.title?errors.title:""}</div>
                <div className="col-12">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <textarea  name='description' type="text" className="form-control" id="Description" onChange={handleChange} onBlur={handleBlur} value={values.description}/>
                </div>
                <div className="error mt-0" style={{color:"red"}}>{touched.description &&  errors.description?errors.description:""}</div>
                <div className="col-12">
                    <label htmlFor="Price" className="form-label">Price</label>
                    <input  name='price' type="number"  className="form-control" id="Price" placeholder="price" onChange={handleChange} onBlur={handleBlur} value={values.price}/>
                </div>
                <div className="error mt-0" style={{color:"red"}}>{touched.price &&  errors.price?errors.price:""}</div>
                {/* <div className="col-12">
                <label for="Image" className="form-label">Upload Image</label>
                <input onChange={(e)=>{setProduct({...product,image:e.target.value})}} type="file" className="form-control" id="Image" placeholder="image" />
            </div> */}
                <div className=" col-12">
                    <label htmlFor="Category" className="form-label">Category</label>
                    <select  name='category' id="Category" className="form-select" onChange={handleChange} onBlur={handleBlur} value={values.category}>
                        <option value="">Choose...</option>
                        <option>Electronics</option>
                        <option>Men's Clothing</option>
                        <option>Jewelery</option>
                        <option>Furniture</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="error mt-0" style={{color:"red"}}>{touched.category &&  errors.category?errors.category:""}</div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save Product</button>
                </div>
            </form></div>
    )
}

export default AddProducts