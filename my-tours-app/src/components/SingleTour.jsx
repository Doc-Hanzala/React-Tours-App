import React, { useContext, useState } from "react";
import { DelToursContext } from "../App";

const SingleTour = ({ id, name, info, image, price }) => {
  const { delTours } = useContext(DelToursContext);
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="single-tour">
      <img src={image} alt={name} />
      <span className="price">${price}</span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "read less" : "read more"}
          </button>
        </p>
        <button onClick={() => delTours(id)} className="btn">
          not interested
        </button>
      </div>
    </section>
  );
};

export default SingleTour;
