import Category from './Category'
import Price from './Price'
import { useContext } from 'react'

import ProductsContext from '../Context/ProductsContext'
import './Sidebar.css'

const Sidebar = () => {

  const {categoryShow,setCategoryShow}=useContext(ProductsContext)


  return (
    <div className={`sidebar ${categoryShow && 'sidebar--open'}`}>
        <div>
        <div className='x-mark'>
        <i onClick={()=>setCategoryShow(!categoryShow)} className="fa-solid fa-xmark text-2xl"></i>
        </div>
    </div>
      <Price/>
      <Category/>
    </div>
  )
}

export default Sidebar
