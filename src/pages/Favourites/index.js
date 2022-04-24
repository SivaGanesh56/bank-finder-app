import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';
import { COLUMNS } from '../BankList/constants';

import './index.css';

const Favourites = () => {

  const { rawData } = useSelector(appState => appState.state);
  const favoriteList = useMemo(() => rawData.filter(item => Boolean(item.isFavourite)), [rawData]);

  return (
    <div className='favorites'>
      <Sidebar />
      <div className='favorites-container'>
        Favorites
        <Table data={favoriteList} columns={COLUMNS} />
      </div>
    </div>
  )
}

export default Favourites