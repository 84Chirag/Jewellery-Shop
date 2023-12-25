import React, { useState, useEffect } from 'react'
import ProductDisplay from './ProductDisplay';
import Loader from '../loader/Loader';

const HomeProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const homeProduct = async () => {
        try {
            setLoading(true)
            const url = 'https://fakestoreapi.com/products/category/jewelery';
            const response = await fetch(url);
            if (response.ok) {
                const json = await response.json();
                // console.log(json);
                setProducts(json);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        homeProduct();
    }, []);
    return (
        <div className='container'>
            <h2 className="text-center"><b>Our Products</b></h2>
            <span className='underline'></span>
            {loading ? (<Loader />) : (<div className="prod-holder">
                {products.map((product) =>
                    (<ProductDisplay key={product.id} product={product} />)
                )}
            </div>)
            }
        </div>
    )
}

export default HomeProduct