import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <div className='breadbody'>
            <nav aria-label="breadcrumb" className='d-flex flex-rows breadhead'>
                <h5 className='crumbtitle fw-bolder'>{props.title}</h5>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" className='fw-bold'><FontAwesomeIcon icon={faHouseChimney} /> Home</Link></li>
                    <li className="breadcrumb-item active fw-bold" aria-current="page">{props.title}</li>
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumb