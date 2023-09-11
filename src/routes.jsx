import Home from './Components/home/home';
import MotorInsurance from './Components/motorInsurance/motorInsurance';
import AboutUs from './Components/aboutUs/aboutUs';
import ContactUs from './Components/contactUs/contactUs';
import News from './Components/news/news';
import Terms from './Components/terms/terms';
import PrivacySecurity from './Components/privacySecurity/privacySecurity';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
const PrimaryRoutes = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/motor-insurance' element={<MotorInsurance />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/terms' element={<Terms />} />
                    <Route path='/privacy' element={<PrivacySecurity />} />
                </Routes>
            </Layout>
            {/* <Routes>
                <Route path='/login' element={} />
            </Routes> */}
        </>
    )
}

export default PrimaryRoutes;