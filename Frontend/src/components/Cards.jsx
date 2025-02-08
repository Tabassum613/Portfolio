//import React from 'react'
import PropTypes from "prop-types";
function Cards({item}) {
  return (
    <>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="item.image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    
    <div className="card-actions justify-end">
        <p>{item.date}</p>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
  
}
Cards.propTypes = {
    item: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
    }).isRequired,
  };
export default Cards
