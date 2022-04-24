import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import axiosInstance from '../../http/axios';

import SelectBox from '../../components/SelectBox';
import Sidebar from '../../components/Sidebar';

import { API_URL, CATEGORIES, CITIES, COLUMNS } from './constants';

import './index.css';
import Table from '../../components/Table';
import { indexizeData } from '../../utils';
import { setCategory, setCity, setData, setRawData } from '../../store/actions';
import useDebounce from '../../hooks/useDebounce';

const BankList = () => {

  const dispatch = useDispatch();

  const { rawData, data, city, category } = useSelector(appState => appState.state);


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const loadData = useCallback(async function fetchData(selection) {
    if (!selection) return;
    try {
      setIsLoading(true);
      setError('');

      const response = await axiosInstance.get(`${API_URL}?city=${selection}`);
      console.log(response)
      const indexedData = indexizeData(response.data);

      dispatch(setRawData(indexedData));
      dispatch(setData(indexedData));

      setIsLoading(false);
    } catch (error) {
      setError('Error while Loading data');
      setIsLoading(false);
      console.log('Error while fetching data', error);
    }
  }, [dispatch]);

  const onSearch = (value) => {

    if (!category) return;

    const filteredData = rawData.filter(item => item[category].toLowerCase().includes(value.toLowerCase()));
    dispatch(setData(filteredData));

  };

  const handleSearch = useDebounce(onSearch, 500);


  return (
    <div className='bankList'>
      <Sidebar />
      <div className="bank-list-container">
        <div className="options">
          <div className="title">All Banks</div>
          <SelectBox
            options={CITIES}
            value={city}
            onChange={(value) => {
              dispatch(setCity(value));
              loadData(value);
            }}
            placeholder="Select City"
          />
          <SelectBox
            options={CATEGORIES}
            value={category}
            onChange={(value) => {
              dispatch(setCategory(value));
              dispatch(setData(rawData));
            }}
            placeholder="Select Category"
          />
          <input
            type="text"
            className="form-control"
            placeholder='search...'
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="table-container">
          {
            isLoading && <div className="spinner">
              <RotatingLines width="100" />
            </div>
          }
          {error && <div className="error">{error}</div>}
          {!isLoading && !error && <Table
            data={data}
            columns={COLUMNS}
          />}
        </div>
      </div>
    </div>
  )
};

export default BankList;