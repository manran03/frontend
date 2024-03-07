import React from 'react';
import "./Plans.css"


const PlanCard = ({ plan }) => {
  return (
    <div className="flip-card" >
      <div className="flip-card-inner">
        <div className="flip-card-front" >
          <h2>{plan.plan_name}</h2>
          <p>Type: {plan.type_cat}</p>
          <p>Risk: {plan.risk_cat}</p>
          <p>Rating: {plan.rating}</p>
          <p>Total Orders: {plan.total_orders}</p>
        </div>
        <div className="flip-card-back" >
          <h2>Dummy Text</h2>
          <p>This is the back side of the card.</p>
          <p>Add your dummy text here.</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
