import React from 'react';
import Arraay from './Arraay';
import PlanCardList from './PlanCardList';
import plansData from './plans.json';

function PlansCl() {
  return (
    <>
      <Arraay plans={plansData} />
      <br/>
      <hr/>
      <br/>
      <h2 style={{marginBottom:"1rem"}}>Explore Plans</h2>
      <PlanCardList plans={plansData} />
    </>
  );
};

export default PlansCl;