import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import MotorInsurance from './Components/MotorInsurance';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import News from './Components/News';
import Terms from './Components/Terms';
import PrivacySecurity from './Components/PrivacySecurity';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/motor-insurance' element={<MotorInsurance />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/news' element={<News />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<PrivacySecurity />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
