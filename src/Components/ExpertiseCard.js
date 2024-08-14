import React from "react";

const ExpertiseCard = ({ title, description, customClass }) => {
  return (
    <div
      id="expertise-card"
      className="col-lg-3 col-md-3 col-sm-6 col-xs-12 d-flex justify-content-center mb-3 p2"
    >
      <div className={`${customClass} rounded-4 shadow`}>
        <div className="p-3 card-content rounded-4">
          <h5 className="card-title mb-3">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
