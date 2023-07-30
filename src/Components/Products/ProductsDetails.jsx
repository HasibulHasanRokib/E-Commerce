import { useLocation, useParams} from "react-router-dom";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../Context/ProductsContext";
import Message from "./Message";

const ProductsDetails = () => {
  const { addToCart, addToWish,count,setCount } = useContext(ProductsContext);
  
  const{title}=useParams()
  
  const location = useLocation();
  const { thumbnail, price, id,discountPercentage } = location.state;

  const [imagesMore, setImagesMore] = useState(location.state.images);

  const [productsImages, setProductsImages] = useState(
    location.state.thumbnail
  );


  const [message,setMessage]=useState(false)
  
  
  useEffect(()=>{
    setTimeout(() => {
      setMessage(false)
    }, 2000);
  })


  return (
    <div id="productsDetails">

      {message && <Message message={message}/>}

      <div className="productDetails-section flex justify-between items-start">
        <section>
          <div className="product-img">
            <img src={productsImages} alt={location.state.title} />
          </div>

          <div className="img-btn flex gap-3">
            {imagesMore.map((item, index) => {
              return (
                <img
                  onClick={() => setProductsImages(item)}
                  key={index}
                  src={item}
                  alt={index}
                />
              );
            })}
          </div>
        </section>

        <div className="productDetail-body">
          <span className="text-5xl font-bold capitalize">{title}</span>
          <span className="font-bold text-gray-400 italic">
            {location.state.brand}
          </span>
          <span className="font-bold text-lg flex items-center my-5">
            <AiFillStar className="text-orange-500 inline-block mr-2 text-xl" />
            {location.state.rating}
          </span>

          <span className="font-semibold text-lg my-2">
            New Price: ${" "}
            {Math.floor(location.state.price - (location.state.price * location.state.discountPercentage) / 100)}
          </span>
       


          <span className="font-bold text-gray-500 my-3">
            Available: {location.state.stock}
          </span>

         <div className="my-3">
         <button disabled={count>=10?true:false}  onClick={()=>setCount(count+1)} className="p-1 border-2  w-10 hover:bg-gray-700 hover:text-white font-bold mr-2">+</button>
         <samp>{count}</samp>
             
          <button disabled={count<=1?true:false}  onClick={()=>setCount(count-1)} className="p-1 border-2  w-10 hover:bg-gray-700 hover:text-white font-bold m-2">-</button>
         </div>
         

          <div className="flex">
            <button
              onClick={() =>{ addToCart({ id, title, thumbnail, price,discountPercentage,count })
              setMessage(true)}
              }
             
              className="add-cart flex items-center"
            >
              <BsFillCartCheckFill className="inline-block mr-2" />
              Add Cart
            </button>
            <button
              onClick={() => addToWish({ id, title, thumbnail, price,discountPercentage })}
              className="add-wish flex items-center"
            >
              <AiFillHeart className="inline-block mr-2" />
              Wishlist
            </button>
          </div>

          <div className="my-5">
            <h5 className="text-xl font-bold my-2">Small Description</h5>
            <p>
              {location.state.description}. Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              ty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
