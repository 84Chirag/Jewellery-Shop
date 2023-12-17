import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import productContext from '../../context/products/productContext';
import Loader from '../loader/Loader';

const StoreContainer = () => {
    const {products, loading} = useContext(productContext)

    return (
        <div className='container my-5 products'>
            {loading ? (
                // Conditional rendering: Display a loading message when "loading" is true.
                <div style={{marginLeft:'20%'}}> <Loader /> </div>
            ) : (
                // Map through the "products" array and render each product using the "Product" component.
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            )}
        </div>
    );
}

export default StoreContainer;
