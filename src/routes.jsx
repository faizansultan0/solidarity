import Home from './components/home/home';
import MotorInsurance from './components/motorInsurance/motorInsurance';
import AboutUs from './components/aboutUs/aboutUs';
import ContactUs from './components/contactUs/contactUs';
import News from './components/news/news';
import Terms from './components/terms/terms';
import PrivacySecurity from './components/privacySecurity/privacySecurity';
import Login from './components/login/login';
import { Routes, Route } from 'react-router-dom';

const PrimaryRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/motor-insurance' element={<MotorInsurance />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/news' element={<News />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/privacy' element={<PrivacySecurity />} />
                <Route path='/login' element={ <Login /> } />
            </Routes>
        </>
    )
}

export default PrimaryRoutes;