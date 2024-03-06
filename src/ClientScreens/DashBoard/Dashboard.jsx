import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TotalInvestmentReturnsCard, InvestmentDistributionCard, TotalReturnsBarChart, ReturnsTimeSeriesGraph, PlanDetails } from './DashboardComponents';
import '../Profilepage/style.css';

const DashboardClient = () => {
  const [folioData, setFolioData] = useState(null);

  useEffect(() => {
    axios.get('https://805e-103-226-169-60.ngrok-free.app/folio')
      .then(response => {
        setFolioData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className='dashboard'>
      {folioData && (
        <>
          <TotalInvestmentReturnsCard folioData={folioData} />
          <InvestmentDistributionCard folioData={folioData} />
          <TotalReturnsBarChart folioData={folioData} />
          <ReturnsTimeSeriesGraph folioData={folioData} />
          <PlanDetails folioData={folioData} />
        </>
      )}
    </div>
  );
};

export default DashboardClient;

