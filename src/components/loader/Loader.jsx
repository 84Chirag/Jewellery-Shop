import React from 'react';
import Spinner from '../../assets/Spinner-1s-800px.gif' 

const Loader = () => {
  return (
    <div style={{display:'grid', placeItems:'center'}}>
      <img src={Spinner} alt="loading" className='loader' />
    </div>
  )
}

export default Loader