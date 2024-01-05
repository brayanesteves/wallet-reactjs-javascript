import React                                         from 'react';
import              { BrowserRouter, Route, Routes } from 'react-router-dom';
import              { Provider }                     from 'react-redux';
import Nav                                           from './components/shared/Nav';
import Welcome                                       from './components/Welcome';
import Dashboard                                     from './components/dashboard/Dashboard';
import CreateWallet                                  from './components/dashboard/operations/CreateWallet';
import UpdateWallet                                  from './components/dashboard/operations/UpdateWallet';
import Transaction                                   from './components/transactions/Transaction';
import AddTransaction                                from './components/transactions/operations/AddTransaction';
import NotFound                                      from './components/shared/404';
import                                                    './App.css';
import                                                    'bootstrap/dist/css/bootstrap.min.css';
import store                                         from './utils/Store';
import                                                    'react-app-polyfill/stable';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-wallet" element={<CreateWallet />} />
          <Route path="/update-wallet/:reference" element={<UpdateWallet />} />
          <Route path="/transactions/:reference" element={<Transaction />} />
          <Route path="/transactions/add/:reference" element={<AddTransaction />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;