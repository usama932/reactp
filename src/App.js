import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';

import {Routes, Route,Link} from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
function App() {
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand"  to={'/'}>Test</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to={'/list'}>List </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/create'}>Create</Link>
            </li>
           
        
            </ul>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/create" element={<Create />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
