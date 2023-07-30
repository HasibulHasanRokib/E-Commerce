import Navbar from '/src/Components/Navbar/Navbar'
import Products from '/src/Components/Products/Products'
import ProductsDetails from '/src/Components/Products/ProductsDetails'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Wish from './Components/WishList/Wish'
import MobileNav from './Components/Navbar/MobileNav'
import SignUp from './Components/SignUp/SignUp'
import Home from './Components/Home/Home'
import Sidebar from '/src/Components/Sidebar/Sidebar'
import Footer from '/src/Components/Footer/Footer';



const App = () => {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
     <Cart/>
     <Wish/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:title' element={<ProductsDetails/>}/>

        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:title' element={<ProductsDetails/>}/>
        <Route path='signUp' element={<SignUp/>}/>
      </Routes>
     <Footer/>
      <MobileNav/>
    </BrowserRouter> 
    </>
  )
}

export default App
