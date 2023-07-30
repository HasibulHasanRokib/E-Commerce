import { useContext } from "react"
import ProductsContext from "../Context/ProductsContext"
import { useNavigate } from "react-router-dom";

const Price = () => {
const navigate=useNavigate()
const {setPriceRangeFilter}=useContext(ProductsContext);

const priceRangeOptions=[
    { label: 'Any Price', value: 'any' },
    { label: '$0 - $50', value: '0-50' },
    { label: '$100 - $300', value: '100-300' },
    { label: '$301 - $500', value: '301-500' },
    { label: '$501 - $800', value: '501-800' },
    { label: '$801 - $1000', value: '801-1000' },
    { label: 'Over-$1000', value: '1001-2000' },
  ]



  return (
    <div id="price">
      <h2 className="text-xl font-bold mt-3"># Price Range :</h2>

     <div className="price-section flex flex-col">
     {priceRangeOptions.map((item,index)=>{
        return <span key={index}>
         <input type="radio" className="cursor-pointer" name="price" onClick={(e)=>{setPriceRangeFilter(e.target.value)
         navigate("products")
         }} value={item.value} />
         <label className="text-sm ml-2">{item.label}</label>
        </span>
      })}
     </div>
    </div>
  )
}

export default Price
