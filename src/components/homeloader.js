
export const getData=async()=>{
 
    const response=await fetch('https://fakestoreapi.com/products');
    return response.json();
 
}
export const getDataById=async({params})=>{
    const {id}=params;
    const response=await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
 
}

export const getDataByCategory=async({params})=>{
    const {category}=params;
    const response=await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return response.json();
 
}