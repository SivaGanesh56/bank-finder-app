import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Bank from './pages/Bank';
import BankList from './pages/BankList';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import store from './store';

const App = () => {
  return (
    <div className='app-container'>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='all-banks' element={<BankList />} />
              <Route path='favorites' exact element={<Favourites />} />
              <Route path='bank-details' >
                <Route path=':ifsc' element={<Bank />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;