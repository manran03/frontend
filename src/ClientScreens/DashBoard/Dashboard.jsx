import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TotalInvestmentReturnsCard, InvestmentDistributionCard, TotalReturnsBarChart, ReturnsTimeSeriesGraph } from './DashboardComponents';
import '../Profilepage/style.css';

const DashboardClient = () => {
  const [folioData, setFolioData] = useState(null);

  useEffect(() => {
    axios.get('https://9d47-103-226-169-60.ngrok-free.app/folio')
      .then(response => {
        setFolioData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className='dashboardcl'>
      {folioData && (
        <>
          <TotalInvestmentReturnsCard folioData={folioData} />
          <InvestmentDistributionCard folioData={folioData} />
          <TotalReturnsBarChart folioData={folioData} />
          <ReturnsTimeSeriesGraph folioData={folioData} />
        </>
      )}
    </div>
  );


  // return(
  //   <div><h1>This is dashboard</h1></div>
  // );
};

export default DashboardClient;

