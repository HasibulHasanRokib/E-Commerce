import './MobileNav.css'
import { useContext} from "react";
import ProductsContext from "../Context/ProductsContext";

const MobileNav = () => {

  const{cartShow,setCartShow,cartItems,wishShow,setWishShow,wishItems }=useContext(ProductsContext)


  return (
    <div>
     <div className="mobile-nav">
      <ul className='mobile-nav-items'>
        <li>
          <button><i className="fa-solid fa-house text-2xl"></i></button>
          </li>
          <li>
          <button onClick={()=>setCartShow(!cartShow)}  className='flex items-center'><i className="fa-solid fa-cart-shopping text-2xl"></i><span>({cartItems.length})</span></button>
          </li>
          <li>
          <button onClick={()=>setWishShow(!wishShow)}  className='flex items-center'><i className="fa-solid fa-heart text-2xl"></i><span>({wishItems.length})</span></button>
          </li>
          <li>
          <button><i className="fa-solid fa-bars text-2xl"></i></button>
        </li>
      </ul>
     </div>
    </div>
  )
}

export default MobileNav