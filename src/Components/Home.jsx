import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GlobalButton from '../Components/SmallComponents/GlobalButton';
import PrimaryCardIcon1 from '../assets/images/primary-card-icon-1.png';
import PrimaryCardIcon2 from '../assets/images/primary-card-icon-2.png';
import PrimaryCardIcon3 from '../assets/images/primary-card-icon-3.png';
import Option1 from '../assets/images/insure-t-1.png';
import Option2 from '../assets/images/insure-t-2.png';
import Option3 from '../assets/images/insure-t-3.png';
import Option4 from '../assets/images/insure-t-4.png';
import Option5 from '../assets/images/insure-t-5.png';
import Option6 from '../assets/images/insure-t-6.png';
import ReadyImage from '../assets/images/ready-img.png';
import TwoCards from './SmallComponents/TwoCards';
import CoveredSection from './SmallComponents/CoveredSection';

const Home = () => {
    return (
        <>
            <section className='homeHero'>
                <div className="hero1">
                    <Container>
                        <div className="hero-content">
                            <h1 className="hero-heading">Insurance made <span className='blueColor'>easy</span></h1>
                            <p className="hero-para">...one policy at a time. Insurance with reassurance. With Solidarity, you get fast service, super-simple claims and how you can insure what’s important to you. </p>
                            <div className="hero-buttons">
                                <GlobalButton additionalClass='hero-blue-btn' to='/' text='Get a Quote' />
                                <GlobalButton additionalClass='hero-white-btn' to='/' text='Renew a Policy' />
                            </div>
                        </div>
                    </Container>
                </div>
                {/* <div className="hero2"></div>
                <div className="hero3"></div> */}
            </section>

            <section className="primary-cards">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="primary-card">
                                <div className="icon-div">
                                    <img src={PrimaryCardIcon1} alt="Approved Sign Insurance" className='icon' />
                                </div>
                                <h2 className="heading">Super Simple Claim</h2>
                                <p className="para">No hidden clauses, no long-words, just simple documents and forms.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="primary-card">
                                <div className="icon-div">
                                    <img src={PrimaryCardIcon2} alt="Call Center" className='icon' />
                                </div>
                                <h2 className="heading">Fast Services</h2>
                                <p className="para">Self-initiated web and mobile services gets you a new policy within minutes!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="primary-card">
                                <div className="icon-div">
                                    <img src={PrimaryCardIcon3} alt="Family Insurance" className='icon' />
                                </div>
                                <h2 className="heading">Trusted by Customers</h2>
                                <p className="para">We are trusted by over 200,000 customers and 500 businesses.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="like-today">
                <Container>
                    <div className="content">
                        <h3 className="heading">What would you like to insure today?</h3>
                        <p className="para">Insurance designed to fit your needs; from car to home and much more.</p>
                        <Row>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={Option1} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Motor & Car</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={Option2} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Home</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={Option3} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Travel</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={Option4} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Domestic Helper</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={Option5} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Accident</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={Option6} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Expat Medical Visa</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="two-cards-section">
                <div className="top-part">
                    <Container>
                        <div className="top-content">
                            <h1 className="global-heading">Fast. Convenient. Affordable.</h1>
                            <p className="global-para">File and track your claims from our online claim form in quick and easy steps. You can also reach out to our claims team for help.</p>
                            <GlobalButton to='/' text='File a Claim' />
                        </div>
                    </Container>
                </div>
                <TwoCards />
            </section>

            <CoveredSection />

            <section className="ready-section">
                <Container>
                    <div className="content">
                        <Row>
                            <Col lg={7}>
                                <div className="left-part">
                                    <h3 className="global-heading">Ready to get insured?</h3>
                                    <p className="global-para">The great prices, fast claims, and quick renewals are just the beginning. Get the full benefits by signing up with Solidarity.</p>
                                    <GlobalButton to='#sign-up' text='Get a Quote' arrow='true' />
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="image-part">
                                    <img src={ReadyImage} alt="Ready to get Insured" className="img" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Home;