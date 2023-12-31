import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";
import Sort from "../Sidebar/Sort";
import Company from "./Company";

import { Link } from "react-router-dom";

const Products = () => {
  const { filteredProducts } = useContext(ProductsContext);

  return (
    <>
    <div id="products">
      <div className="products-header">
        <Company />
        <div>
          <Sort />
        </div>
      </div>
      <div className="products-card-section">
        {filteredProducts.map((item) => {
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
          return (
            <>
            <Link
              to={title}
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
              }}
              key={id}
              className="card"
            >
              <span className="dis-btn">-{item.discountPercentage}%</span>
              <div className="card-img">
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
          </>

          );
        })}
      </div>
    </div>
    </>
  );
};

export default Products;
