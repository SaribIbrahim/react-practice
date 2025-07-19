import axios
 from "axios";
export const getData=async()=>{
 
    const response=await axios.get('https://fakestoreapi.com/products');
    return response.data;
 
}
export const getDataById=async({params})=>{
    const {id}=params;
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
 
}

export const getDataByCategory=async({params})=>{
    const {category}=params;
    const response=await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
 
}