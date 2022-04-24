import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

import './index.css';

const Bank = () => {

  const { ifsc } = useParams() || {};
  const { rawData } = useSelector(appState => appState.state);

  const bank = rawData.find(item => item.ifsc === ifsc);

  const clonedBank = { ...bank };
  delete clonedBank.isFavourite;

  return (
    <div className="bank-container">
      <Sidebar />
      <div className="bank-wrapper">
        {!bank ? <div className="not-found">No Bank Found</div> :
          <>
            <div className="heading">Bank Details</div>
            <div className='bank-details'>
              <div className="left">
                {Object.keys(clonedBank).map((key, idx) => <div className="item" key={idx}>{key}</div>)}
              </div>

              <div className="right">
                {Object.keys(clonedBank).map((key, idx) => <div className="value" key={idx}>{bank[key]}</div>)}
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Bank;