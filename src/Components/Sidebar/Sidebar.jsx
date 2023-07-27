import Category from './Category'
import Price from './Price'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div id='sidebar'>
      <Price/>
      <Category/>
    </div>
  )
}

export default Sidebar
