import { useContext } from "react"
import "./Navbar.css"
import {AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import{BiUserCircle} from 'react-icons/bi'
import ProductsContext from "../Context/ProductsContext"
import { NavLink } from "react-router-dom"


const Navbar = () => {

  const{setSearchFilter,setCartShow,cartShow,setWishShow,wishShow,cartItems,wishItems}=useContext(ProductsContext)

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
        <img className="w-24" src="/src/assets/daraz.png" alt="" />
          {/* <span className="text-xl font-bold text-gray-950">Rokib's Shop</span> */}
        </div>
        <div className="search-bar">
          <input
            onChange={(e) => setSearchFilter(e.target.value)}
            className="placeholder:text-slate-600 block bg-white w-80 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none sm:text-sm cursor-pointer text-gray-700"
            placeholder="Search for anything..."
            type="search"
            name="search"
          />
        </div>
        <div className="display-hide">
          <ul className="flex gap-10">
            <li>
              <button onClick={()=>setWishShow(!wishShow)}  className="text-2xl">
                <AiOutlineHeart className="inline-block text-red-500" />
                <span className="size">{wishItems.length}</span>
              </button>
            </li>
            <li>
              <button onClick={()=>setCartShow(!cartShow)} className="text-2xl">
                <AiOutlineShoppingCart className="inline-block text-red-500"/>
                <span className="size">{cartItems.length}</span>
              </button>
            </li>
            <li>
              <NavLink  className="text-2xl">
                <BiUserCircle className="inline-block"/>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar