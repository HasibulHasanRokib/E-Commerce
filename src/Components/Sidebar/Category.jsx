import { useContext, useEffect, useState } from "react"
import ProductsContext from "../Context/ProductsContext"

import './Sidebar.css'
import { useNavigate } from "react-router-dom"

const Category = () => {
  const navigate=useNavigate()

const{setCategoryFilter}=useContext(ProductsContext)

const [category,setCategory]=useState([])
let url="https://dummyjson.com/products/categories"

const getCategoryItem=async()=>{
    try {
        let res=await fetch(url)
        let data=await res.json();
        setCategory(data)
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
getCategoryItem();
},[])

  return (
    <div className="flex flex-col capitalize" id="category">
     <h2 className="text-lg font-bold"># Category :</h2>
     <samp>
        <input type="radio" className="cursor-pointer" name="category" onClick={(e)=>{setCategoryFilter(e.target.value)
        navigate("products")
        }} value="all" />
        <label className="text-sm ml-2 ">All</label>
     </samp>
       {category.map((item,index)=>{
        return<span key={index}>
        <input  type="radio" className="cursor-pointer" name="category" onClick={(e)=>{setCategoryFilter(e.target.value)
        navigate("products")
        }} value={item}/>
        <label className="text-sm ml-2 ">{item}</label>
    </span>
        
       
      })} 
    </div>
  )
}

export default Category
