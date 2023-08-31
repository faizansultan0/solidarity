import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import MotorInsurance from './Components/MotorInsurance'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/motor-insurance' element={<MotorInsurance />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
