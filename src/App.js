import React   from 'react';
import              './App.css';
import Nav     from './components/shared/Nav';
import              'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="">
      <Nav />
      <Welcome />
    </div>
  );
}

export default App;