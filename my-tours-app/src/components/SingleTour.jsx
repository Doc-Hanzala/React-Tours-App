import React from 'react'

const SingleTour = ({id,name,info,image,price}) => {
  return (
    <section className="single-tour">
        <img src={image} alt={name} />
        <span className='price' >${price}</span>
        <div className="tour-info">
            <h4>{name}</h4>
            <p>{info}</p>
        <button className="btn">not interested</button>
        </div>
    </section>
  )
}

export default SingleTour