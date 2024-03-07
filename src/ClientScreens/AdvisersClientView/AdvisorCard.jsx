import React from 'react';
import "../Plans/Plans.css";

const AdvisorCard = ({ advisor }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2 style={{ marginTop: "0.5rem" }}>{advisor.name}</h2>
          <center><hr style={{ width: '50%' }} /></center>
          <div className='cout'>
            <div className='cin'>
              <p style={{ textAlign: 'center' }}><strong>Ratings</strong><br />{advisor.ratings}</p>
            </div>
            <div className='cin'>
              <p style={{ textAlign: 'center' }}><strong>Certificate No.</strong><br />{advisor.certificateNo}</p>
            </div>

            <br/>

        <div>
          <img className="moneyimg" src="https://picsum.photos/600/300/" alt="money" style={{ borderRadius: '1.5rem', width: '10rem', height: '5rem', margin: '0.6rem' }} />
          </div>
        
          </div>
          <footer className='ffo'>
            <div className='finr'>
              <p style={{ textAlign: 'center' }}>📧<br />{advisor.email}</p>
            </div>
            <div className='finl'>
              <p style={{ textAlign: 'center' }}>👥<br />{advisor.clientIds.length}</p>
            </div>
          </footer>
        </div>
        <div className="flip-card-back">
          <h2 style={{ marginTop: "0.5rem" }}>Advisor Details</h2>
          <center><hr style={{ width: '50%' }} /></center>
          <br />
          <p><strong>User ID:</strong> {advisor.userIdCredentials}</p>
          <p><strong>Created At:</strong> {new Date(advisor.createdAt).toLocaleDateString()}</p>
          <p><strong>Updated At:</strong> {new Date(advisor.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvisorCard;
