import React from 'react';
import { Link } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductDisplay = (props) => {
    return (
        <>
            {/* <div className="product-container card card1">
                <img src={props.product.image} alt="" className="card-img-top card-img-top2" />
                <div className="card-body">
                    <p className='card-title'>{props.product.title}</p> */}
            {/* <p className="">{props.product.description}</p> */}
            {/* </div>
            </div> */}
            <div className='Homepageproduct'>
                <Link to='' className='addcart1'><FontAwesomeIcon icon={faCartShopping} style={{ color: "black", }} className='shopbtn' /></Link>
                <Link to={`/store/product/${props.product.id}`} className="viewproduct1">
                    <img src={props.product.image} alt="product" className='cardimage' />
                    <div className="text-center mt-3">
                        <h4 className='home-prod-title'>{props.product.title}</h4>
                        <h5 className="pricedollar">${props.product.price}</h5>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductDisplay