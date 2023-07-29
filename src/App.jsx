import Navbar from '/src/Components/Navbar/Navbar'
import Sidebar from '/src/Components/Sidebar/Sidebar'
import Products from '/src/Components/Products/Products'
import ProductsDetails from '/src/Components/Products/ProductsDetails'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Wish from './Components/WishList/Wish'
import MobileNav from './Components/Navbar/MobileNav'
import SignUp from './Components/SignUp/SignUp'



const App = () => {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Sidebar/>
     <Cart/>
     <Wish/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='signUp' element={<SignUp/>}/>
        <Route path='/:title' element={<ProductsDetails/>}/>
      </Routes>
      <MobileNav/>
    </BrowserRouter> 
    </>
  )
}

export default App
