import React from "react";
import SingleTour from "./SingleTour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h3>our tours</h3>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour)=>{
            return <SingleTour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  );
};

export default Tours;
