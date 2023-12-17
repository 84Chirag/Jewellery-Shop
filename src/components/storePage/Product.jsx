import React from 'react'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
      };
    return (
        <div className="card card2" style={{width: '18rem'}}>
            <img src={props.product.image} className="card-img-top card-img-top1" alt="product's img"  />
            <div className="card-body">
                <h4 className="card-title"><b>{props.product.title}</b></h4>
                <p className="card-text">{truncateText(props.product.description,89)}</p>
                <p><b>${props.product.price}</b></p>
                <p><b>Category: {props.product.category}</b></p>
                <div className="btn3">
                <a href="#" className="addcart"><b>Add Cart</b></a>
                {/* as we have set id in path in app.jsx for fetch particular product we use that path here and putting id according to product, dynamically */}
                <Link to={`/store/product/${props.product.id}`} className="viewproduct"><b>View</b></Link>
                </div>
            </div>
        </div>
    )
}

export default Product