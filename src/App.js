import React                            from 'react';
import Nav                              from './components/shared/Nav';
import Welcome                          from './components/Welcome';
import                                       './App.css';
import                                       'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard                        from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;