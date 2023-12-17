import React, { useState, useEffect } from 'react'
import ProductContext from './productContext';


const ProductState = (props) => {

    // Changed the state variable name to "products" to better reflect that it represents an array of products.
    const [products, setProducts] = useState([]);
    const [id, setId] = useState()
    // Initialized the "loading" state as "false" to start with the assumption that data is not loading.
    const [loading, setLoading] = useState(false);

    // Renamed the function from "product" to "fetchProducts" to better reflect its purpose.
    const fetchProducts = async () => {
        try {
            // Set "loading" to "true" before making the API call to indicate that data is being fetched.
            setLoading(true);

            const url = 'https://fakestoreapi.com/products/';
            const response = await fetch(url,{
                mode: 'no-cors'
            });

            if (response.ok) {
                const json = await response.json(id);
                // Set the "products" state with the fetched data.
                setProducts(json);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            // Set "loading" to "false" in the "finally" block to ensure it's updated regardless of success or failure.
            setLoading(false);
        }
    }
    

    // Use the "useEffect" hook to call "fetchProducts" when the component mounts.
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <ProductContext.Provider value={{products, loading}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState