import React                            from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider }                     from 'react-redux';
import Nav                              from './components/shared/Nav';
import Welcome                          from './components/Welcome';
import Dashboard                        from './components/dashboard/Dashboard';
import CreateWallet                     from './components/dashboard/operations/CreateWallet';
import NotFound                         from './components/shared/404';
import                                       './App.css';
import                                       'bootstrap/dist/css/bootstrap.min.css';
import store                            from './utils/Store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-wallet" element={<CreateWallet />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;