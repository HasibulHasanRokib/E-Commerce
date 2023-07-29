import './MobileNav.css'
import { useContext} from "react";
import ProductsContext from "../Context/ProductsContext";
import { useNavigate } from 'react-router-dom';

const MobileNav = () => {

  const{categoryShow,setCategoryShow,cartShow,setCartShow,cartItems,wishShow,setWishShow,wishItems }=useContext(ProductsContext)

  const navigate=useNavigate()

  return (
    <div>
     <div className="mobile-nav">
      <ul className='mobile-nav-items'>
      <li className='flex justify-center items-center flex-col'>
          <button onClick={()=>setCategoryShow(!categoryShow)}><i className="fa-solid fa-bars text-2xl"></i></button>
          <p className='text-xs'>Category</p>
        </li>
          <li>
          <button onClick={()=>setCartShow(!cartShow)}  className='flex items-center'><i className="fa-solid fa-cart-shopping text-2xl"></i><span>({cartItems.length})</span></button>
          <p className='text-xs'>Cart</p>

          </li>
          <li>
          <button onClick={()=>navigate('/')}><i className="fa-solid fa-house text-2xl home-btn"></i></button>
          </li>
          <li>
          <button onClick={()=>setWishShow(!wishShow)}  className='flex items-center'><i className="fa-solid fa-heart text-2xl"></i><span>({wishItems.length})</span></button>
          <p className='text-xs'>Wishlist</p>

          </li>
     
        <li>
          <button onClick={()=>navigate('signUp')}><i className="fa-solid fa-user text-2xl"></i></button>
          <p className='text-xs'>User</p>

          </li>
      </ul>
     </div>
    </div>
  )
}

export default MobileNav
