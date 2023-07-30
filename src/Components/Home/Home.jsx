import './Home.css'

import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';




const Home = () => {
    const navigate=useNavigate()

      const categoryItem=[
        {name:"handbag",
         image:'https://skybuybd.com/_next/static/media/handbag.2ef168de.svg',
        },
        {name:"watch",
         image:'https://skybuybd.com/_next/static/media/watch.dbfbe8af.svg',
        },
        {name:"mobile",
         image:'https://skybuybd.com/_next/static/media/mobile.258e8d8e.svg',
        },
        {name:"sunglass",
         image:'https://skybuybd.com/_next/static/media/sunglass.838db5be.svg',
        },
        {name:"shoes",
         image:'https://skybuybd.com/_next/static/media/shoes.089eac13.svg',
        },
        {name:"mens_clothing",
         image:'https://skybuybd.com/_next/static/media/mens_clothing.9b301c9b.svg',
        },
        {name:"clothing",
         image:'https://skybuybd.com/_next/static/media/clothing.e8eb6793.svg',
        },
        {name:"necklace",
         image:'https://skybuybd.com/_next/static/media/necklace.3cf98284.svg',
        },
        {name:"beauty product",
         image:'https://skybuybd.com/_next/static/media/beauty_product.d03025de.svg',
        },
        {name:"child-shoe",
         image:'https://skybuybd.com/_next/static/media/child-shoe.1bba89ca.svg',
        },
        {name:"grocery",
         image:'https://skybuybd.com/_next/static/media/grocery.df2ce098.svg',
        },
        {name:"electronics",
         image:'https://skybuybd.com/_next/static/media/electronics.64e56e72.svg',
        },
      ]
  

      const [trending,setTrending]=useState([])
      let url="https://dummyjson.com/products?limit=10&skip=40"

      const trendingData=async()=>{
        try {
           let res=await fetch(url)
           let data=await res.json()
           setTrending(data.products)

        } catch (error) {
          console.log(error)  
        }
      }
   
      useEffect(()=>{
      trendingData();
      },[])

  return (

    <div className='home'>

    <div className="home-section ">
    <div className="slider-section">
    <ImageSlider/>
    </div>
    
    <Link to={'products'} className="category-section">

     {categoryItem.map((item,index)=>{
        return <div className='category-body' key={index}>
            <img className='category-img' src={item.image} alt="" />
            <p>{item.name}</p>
        </div>
     })}
    </Link>

    <div className="trending-section">
    <div className="trending-header flex justify-between">
      <h2 className='font-bold text-xl'>Trending Section</h2>
      <div>
        <button onClick={()=>{navigate('products')}} className='view-btn'>View More</button>
      </div>  
    </div>
    <div className="treading-card">
    
     {trending.map((item)=>{
        const {
            id,
            title,
            price,
            brand,
            thumbnail,
            description,
            rating,
            stock,
            images,
            discountPercentage
          } = item;
        return <Link  to={title}
              state={{
                id,
                title,
                price,
                brand,
                thumbnail,
                description,
                rating,
                stock,
                images,
                discountPercentage
              }} key={item.id} className="card">
              <div
             className="card-img">
                <img src={item.thumbnail} alt={item.brand} />
              </div>
              <div className="card-body">
                <div className="flex flex-col justify-end gap-0">
                  <samp className="font-sans font-bold capitalize">
                    {item.title.slice(0, 20)}
                  </samp>
                  <samp>
                    <AiFillStar className="inline-block  text-orange-400" />
                    {item.rating}
                  </samp>
                  <samp className="text-sm font-bold text-gray-400 font-sans">
                    {item.brand.slice(0, 10)}
                  </samp>
                </div>
                <div className="flex flex-col items-end justify-start">
                  <samp className="text-green-500">
                    $
                    {Math.floor(
                      item.price - (item.price * item.discountPercentage) / 100
                    )}
                  </samp>
                  <samp>
                    <del>{item.price}</del>
                  </samp>
                </div>
              </div>
            </Link>
     })}
     </div>
    </div>
      
    </div>
    </div>
  )
}

export default Home
