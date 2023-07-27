import { useContext } from "react"
import ProductsContext from "../Context/ProductsContext"
import './Products.css'


import All from '/src/assets/online-shopping.png'
import Apple from '/src/assets/Apple.png'
import Samsung from '/src/assets/Samsung.png'
import Oppo from '/src/assets/Oppo.png'
import Hp from '/src/assets/hp.png'
import Infinix from '/src/assets/infinix.jpg'
import Microsoft from '/src/assets/microsoft.avif'


const Company = () => {

const{setCompanyFilter}=useContext(ProductsContext);

const companyData=[
    {name:'all',image:All},
    {name:"Apple",image:Apple},
    {name:"Samsung",image:Samsung},
    {name:"OPPO",image:Oppo},
    {name:"HP Pavilion",image:Hp},
    {name:"Infinix",image:Infinix},
    {name:"Microsoft Surface",image:Microsoft},
]

  return (
    <div id="company">
    <div className="company-section">
      {companyData.map((item,index)=>{
        return <div className="company-body" key={index}>
            <button onClick={(e)=>{setCompanyFilter(e.target.value)}} value={item.name} className="font-sans text-sm font-bold capitalize">{item.name}</button>
        </div>
      })}
      </div>
    </div>
  )
}

export default Company
