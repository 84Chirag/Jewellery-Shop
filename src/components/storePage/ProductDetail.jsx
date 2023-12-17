import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';

const ProductDetail = () => {
  const [detailproducts, setDetailProducts] = useState();
  const [loading, setLoading] = useState(false); // Initialize loading as false
  // using useParams from react-router-dom we are taking the id value from params which we are getting according user's clicked product as we set it in product component 
  const { id } = useParams();

  const detailProducts = async () => {
    try {
      // Set "loading" to "true" before making the API call to indicate that data is being fetched.
      setLoading(true);
      // and using that id we fetching that particular product from database or api
      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);

      if (response.ok) {
        const json = await response.json();
        // Set the "detailproducts" state with the fetched data.
        setDetailProducts(json);
      }
    } catch (error) {
      console.log("Error fetching product details:", error);
    } finally {
      // Set "loading" to "false" in the "finally" block to ensure it's updated regardless of success or failure.
      setLoading(false);
    }
  }

  // Call the detailProducts function when the component mounts
  useEffect(() => {
    detailProducts();
  }, []);

  return (
    <div>
      <h2 className='text-center my-5'>Product Details</h2>
      {loading ? (
        <Loader />
      ) : detailproducts ? (
        <>
          <div className='d-flex detailbody'>
            <img src={detailproducts.image} alt="product image" className='prod-img' />
            <div className='de-prod'>
            <h3>{detailproducts.title}</h3>
            <p>{detailproducts.description}</p>
            <p>Price: ${detailproducts.price}</p>
            <p>Category: {detailproducts.category}</p>
            {/* Other product details */}
            </div>
          </div>
        </>
      ) : (
        <p>Product details not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
