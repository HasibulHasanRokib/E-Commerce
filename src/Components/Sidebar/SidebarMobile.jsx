import { useContext } from 'react'
import Category from './Category'
import Price from './Price'
import './Sidebar.css'
import ProductsContext from '../Context/ProductsContext'

const SidebarMobile = () => {
    const {categoryShow,setCategoryShow}=useContext(ProductsContext)

  return (
    <div className={`sidebarMobile ${categoryShow && 'sidebarMobile--open'}`}>
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

export default SidebarMobile