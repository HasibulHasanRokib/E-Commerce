import { useEffect, useState } from "react";
import ProductsContext from "./ProductsContext";

const ProductsProvider=({children})=>{
   
    const [products,setProducts]=useState([])

    let url="https://dummyjson.com/products?limit=100"; 

    const getData=async()=>{
        let res=await fetch(url);
        let data=await res.json();
        setProducts(data.products)
    }
    useEffect(()=>{
      getData(); 
      },[])

  const [priceRangeFilter, setPriceRangeFilter] = useState('any');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortingOrder, setSortingOrder] = useState('ascending');  
  const [companyFilter, setCompanyFilter] = useState('all');  
  const [searchFilter, setSearchFilter] = useState(products);  

  let filteredProducts = products;
  //....Search...
  filteredProducts=filteredProducts.filter((product)=>product.title.toLowerCase().includes(searchFilter))
  //...Price Range...
  if (priceRangeFilter !== 'any') {
    const [minPrice, maxPrice] = priceRangeFilter.split('-');
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= parseInt(minPrice) && product.price <= parseInt(maxPrice)
    );
  }
//....Category Section....
  if (categoryFilter !== 'all') {
    filteredProducts = filteredProducts.filter((product) => product.category === categoryFilter);
  }
  //...Company Section....
  if(companyFilter!=='all'){
    filteredProducts=filteredProducts.filter((product)=>product.brand===companyFilter)
  }

  // ....Sort Section ....
  if (sortingOrder === 'ascending') {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  else if (sortingOrder==='descending') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }else{
    filteredProducts;
  }

  const [cartItems,setCartItems]=useState([]);

  const addToCart=(item)=>{
    setCartItems([...cartItems,item])
  }

  const [wishItems,setWishItems]=useState([])

  const addToWish=(item)=>{
    setWishItems([...wishItems,item])
  }

  const[cartShow,setCartShow]=useState(false)
  const[wishShow,setWishShow]=useState(false)
  const[categoryShow,setCategoryShow]=useState(false)

  const [count,setCount]=useState(1);

    return <ProductsContext.Provider value={{filteredProducts,sortingOrder, setPriceRangeFilter,setCategoryFilter,setSortingOrder,setCompanyFilter,setSearchFilter,addToCart,cartItems,setCartItems,wishItems,setWishItems,addToWish,cartShow,setCartShow,setWishShow,wishShow,categoryShow,setCategoryShow,count,setCount}}>
    {children}
    </ProductsContext.Provider>
}
export default ProductsProvider;