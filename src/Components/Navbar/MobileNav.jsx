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
          <button style={{color:"var(--blue)"}} onClick={()=>setCategoryShow(!categoryShow)}><i className="fa-solid fa-bars text-2xl"></i></button>
          <p style={{color:"var(--blue)"}} className='text-xs font-bold'>Category</p>
        </li>
          <li>
          <button style={{color:"var(--blue)"}} onClick={()=>setCartShow(!cartShow)}><i className="fa-solid fa-cart-shopping text-2xl"></i><span>({cartItems.length})</span></button>
          <p style={{color:"var(--blue)"}} className='text-xs font-bold'>Cart</p>

          </li>
          <li>
          <button style={{color:"var(--blue)"}} onClick={()=>navigate('/')}><i className="fa-solid fa-house text-2xl home-btn"></i></button>
          </li>
          <li>
          <button style={{color:"var(--blue)"}} onClick={()=>setWishShow(!wishShow)} ><i className="fa-solid fa-heart text-2xl"></i><span>({wishItems.length})</span></button>
          <p style={{color:"var(--blue)"}} className='text-xs font-bold'>Wishlist</p>

          </li>
     
        <li>
          <button style={{color:"var(--blue)"}} onClick={()=>navigate('signUp')}><i className="fa-solid fa-user text-2xl "></i></button>
          <p style={{color:"var(--blue)"}} className='text-xs font-bold'>User</p>

          </li>
      </ul>
     </div>
    </div>
  )
}

export default MobileNav
