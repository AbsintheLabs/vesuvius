import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import DataProviderPage from './components/DataProviderPage';
import LabelerPage from './components/LabelerPage';
import NotFoundPage from './components/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/providers" element={<DataProviderPage/>} />
          <Route path="/labelers" element={<LabelerPage/>} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="/labelers" element={<Poo/>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App
