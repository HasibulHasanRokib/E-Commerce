import './Cart.css'
import { useContext} from "react";
import ProductsContext from "../Context/ProductsContext";
import {FaXmark} from 'react-icons/fa6'
import Empty from '/src/assets/empty-cart.png'



const Cart = () => {

  const{cartShow,setCartShow,cartItems, setCartItems }=useContext(ProductsContext)


  const handleRemove = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };




  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total +(Math.floor(item.price - (item.price * item.discountPercentage) / 100))*item.count, 0);
  };

  return (
    <>
    <div id="cart">
      <div className={`cart-section ${cartShow && 'cart-section--open'}`}>
        <div className="cart-header">
          <h2 className='font-bold text-xl'>Your Shopping Cart ({cartItems.length})</h2>
           <FaXmark onClick={()=>setCartShow(!cartShow)} className='x-btn'/>
        </div>

        <div className="cart-main">
        {cartItems.length===0 && (
         <div className='flex flex-col h-full gap-1 justify-center items-center'>
          <img className='empty-img' src={Empty} alt="" />
           <h2 className='font-bold'>Your cart is empty</h2>
           <button className='p-2 border-2 bg-gray-300 ' onClick={()=>setCartShow(!cartShow)}>Keep Browsing</button>
         </div>
        )}
        {cartItems.map((item)=>{
          const newPrice=Math.floor(item.price - (item.price * item.discountPercentage) / 100)
          return <section key={item.id} className='cart-body'>
        
         <div>
          <img className='cart-img ' src={item.thumbnail} alt="" />
         </div>
         <div className='cart-text'>
          <h4 className='text-lg font-bold mb-1'>{item.title.slice(0,10)}</h4>
          <h5 className='font-bold mb-1'>${newPrice}</h5>
          <p>X{item.count}</p>
         
         </div>
         <FaXmark className='remove-btn' onClick={() => handleRemove(item.id)}/>
        </section>
        
        })}
        </div>
       <div className="total-section">
        <span>
        <h2 className='font-bold text-xl'>Subtotal</h2>
        <h2 className='font-bold'>${getTotalCost()}</h2>
        </span>
        <button className='checkout-btn'>Checkout</button>
       </div>
      </div>
    </div>
    </>

  );
};

export default Cart;
