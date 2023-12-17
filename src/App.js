import React                            from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav                              from './components/shared/Nav';
import Welcome                          from './components/Welcome';
import Dashboard                        from './components/dashboard/Dashboard';
import CreateWallet                     from './components/dashboard/operations/CreateWallet';
import NotFound                         from './components/shared/404';
import                                       './App.css';
import                                       'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;