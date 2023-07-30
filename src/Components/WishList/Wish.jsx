import { useContext } from "react"
import ProductsContext from "../Context/ProductsContext"
import {FaXmark} from 'react-icons/fa6'
import Empty from '/src/assets/empty-cart.png'


import '/src/Components/Cart/Cart.css'

const Wish = () => {
const{wishItems,setWishItems,wishShow,setWishShow,addToCart,count}=useContext(ProductsContext)

const handleWishRemove=(id)=>{
    const newWish=wishItems.filter((item)=>item.id !== id);
    setWishItems(newWish)
}

  return (
    <div id="cart">
      <div className={`cart-section ${wishShow && 'cart-section--open'}`}>
        <div className="cart-header">
          <h2 className='font-bold text-xl'>Your Shopping Wishlist ({wishItems.length})</h2>
           <FaXmark onClick={()=>setWishShow(!wishShow)} className='x-btn'/>
        </div>
        <div className="cart-main">
        {wishItems.length===0 && (
         <div className='flex flex-col h-full gap-1 justify-center items-center'>
          <img className='empty-img' src={Empty} alt="" />
           <h2 className='font-bold'>Your Wishlist is empty</h2>
           <button className='p-2 border-2 bg-gray-300 ' onClick={()=>setWishShow(!wishShow)}>Keep Browsing</button>
         </div>
        )}
        {wishItems.map((item)=>{
          const{id,title,thumbnail,price,discountPercentage}=item;
          return <section key={item.id} className='cart-body'>
        
         <div>
          <img className='cart-img' src={item.thumbnail} alt="" />
         </div>
         <div className='cart-text'>
          <h4 className='text-lg font-bold mb-1'>{item.title.slice(0,10)}</h4>
          <h5 className='font-bold mb-1'>${item.price}</h5>
         <button onClick={()=>addToCart({id,title,price,thumbnail,discountPercentage,count})} className="font-bold border-2 px-2 py-1 bg-red-800 text-white">Add to Cart</button>
         </div>
         <FaXmark className='remove-btn' onClick={() => handleWishRemove(item.id)}/>
        </section>
        
        })}
        </div>
     
      </div>
    </div>
  )
}

export default Wish
