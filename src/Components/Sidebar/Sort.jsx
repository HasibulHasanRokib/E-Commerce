import { useContext } from "react"
import ProductsContext from "../Context/ProductsContext"

const Sort = () => {

const {sortingOrder,setSortingOrder}=useContext(ProductsContext);

  const handleSortToggle=()=>{
setSortingOrder(sortingOrder === 'ascending' ? 'descending' : 'ascending');
  
  }


  return (
    <div>
          <select name="sorting" onChange={handleSortToggle}>
          <option value={sortingOrder==='descending'}>Low-High</option>
          <option value={sortingOrder==='ascending'}>High-Low</option>
        </select>
    </div>
  )
}

export default Sort
