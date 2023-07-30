import { useContext } from "react"
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

import ProductsContext from "../Context/ProductsContext"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  
  const navigate=useNavigate()


  const{setSearchFilter,setCartShow,cartShow,setWishShow,wishShow,cartItems,wishItems}=useContext(ProductsContext)

  return (
    <div>
      <nav className="navbar">
        <div onClick={()=>navigate('/')} className="logo cursor-pointer">
        <img className="w-24" src="https://skybuybd.com/_next/static/media/logo.2d8160b9.svg" alt="" />
        </div>
        <div className="">
          <input
            onChange={(e) => setSearchFilter(e.target.value)}
            onClick={()=>navigate('/products')}
            className="search-bar"
            placeholder="Search for anything..."
            type="search"
            name="search"
          />
          <button className="search-bar--btn"><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <div className="display-hide">
          <ul className="flex justify-center items-center gap-5">

            <li>
              <button onClick={()=>setCartShow(!cartShow)}>
              
                <svg style={{color:"white",marginTop:"0.4rem"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path> </svg>
              </button>
              <span className="size">{cartItems.length}</span>
            </li>
            <li>
              <button onClick={()=>setWishShow(!wishShow)}>
              
                <svg style={{marginTop:"0.4rem",width:"1.7rem"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>
              </button>
              <span className="size">{wishItems.length}</span>
            </li>
            <li>
              <NavLink to={'signUp'}  className="text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar