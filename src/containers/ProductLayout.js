import { useState, useEffect } from "react";
import axios from "axios";

function ProductLayout() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: responseData } = await axios.get(
          "http://localhost:4000/api/products"
        );
        setData(responseData);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="products">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && isError && <h1>Sorry Some Error Occured...</h1>}
      {!isLoading &&
        !isError &&
        data &&
        data.map((productData) => {
          return (
            <div className="product-card">
              <a href={"/products/" + productData._id}>
                <div className="product-image">
                  <img src={productData.image} />
                </div>
                <div className="product-info">
                  <h5>{productData.title}</h5>
                  <h6>${productData.price}</h6>
                </div>
              </a>
            </div>
          );
        })}
    </section>
  );
}

export default ProductLayout;
