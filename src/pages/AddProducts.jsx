import React, { useState } from 'react'
import axios from 'axios';

function AddProducts() {

    let [product, setProduct] = useState({
        title: "",
        description: "",
        price: undefined,
        image: "",
        category: ""
    })  
    
   let handleSubmit=async(e)=>{
   e.preventDefault();
  let response=await axios.post('https://fakestoreapi.com/products',product)//product:product
  console.log(response);
   
   }

    return (
        <div className='w-50 p-5'>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label for="Title" className="form-label">Title</label>
                    <input onChange={(e) => { setProduct({ ...product, title: e.target.value }) }} name='title' type="text" className="form-control" id="Title" />
                </div>
                <div className="col-12">
                    <label for="Description" className="form-label">Description</label>
                    <textarea onChange={(e) => { setProduct({ ...product, description: e.target.value }) }} name='description' type="text" className="form-control" id="Description" />
                </div>
                <div className="col-12">
                    <label for="Price" className="form-label">Price</label>
                    <input onChange={(e) => { setProduct({ ...product, price: e.target.value }) }} name='price' type="number" min="10" className="form-control" id="Price" placeholder="price" />
                </div>
                {/* <div className="col-12">
                <label for="Image" className="form-label">Upload Image</label>
                <input onChange={(e)=>{setProduct({...product,image:e.target.value})}} type="file" className="form-control" id="Image" placeholder="image" />
            </div> */}
                <div className=" col-12">
                    <label for="Category" className="form-label">Category</label>
                    <select onChange={(e) => { setProduct({ ...product, category: e.target.value }) }} name='category' id="Category" className="form-select">
                        <option selected>Choose...</option>
                        <option>Electronics</option>
                        <option>Men's Clothing</option>
                        <option>Jewelery</option>
                        <option>Furniture</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save Product</button>
                </div>
            </form></div>
    )
}

export default AddProducts