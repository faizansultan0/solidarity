import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container, Row, Col } from 'react-bootstrap';
import GlobalButton from '../globalButton/globalButton';
import PrimaryCardIcon1 from '../../assets/images/primary-card-icon-1.png';
import PrimaryCardIcon2 from '../../assets/images/primary-card-icon-2.png';
import PrimaryCardIcon3 from '../../assets/images/primary-card-icon-3.png';
import Option1 from '../../assets/images/insure-t-1.png';
import Option2 from '../../assets/images/insure-t-2.png';
import Option3 from '../../assets/images/insure-t-3.png';
import Option4 from '../../assets/images/insure-t-4.png';
import Option5 from '../../assets/images/insure-t-5.png';
import Option6 from '../../assets/images/insure-t-6.png';
import ReadyImage from '../../assets/images/ready-img.png';
import StepsImage from '../../assets/images/steps-img.png';
import TwoCards from '../twoCardsPart/twoCards';
import CoveredSection from '../coveredSection/coveredSection';
import Slider from 'react-slick';
import './home.css';

const Home = () => {
    let sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
        pauseOnHover: false
    }

    return (
        <>
            <Slider {...sliderSettings} className='homeHero'>
                <div className="hero" id='hero1'>
                    <Container>
                        <div className="hero-content-parent">
                            <div className="hero-content">
                                <h1 className="hero-heading">Insurance made <span className='blueColor'>easy</span></h1>
                                <p className="hero-para">...one policy at a time. Insurance with reassurance. With Solidarity, you get fast service, super-simple claims and how you can insure what’s important to you. </p>
                                <div className="hero-buttons">
                                    <GlobalButton additionalClass='hero-blue-btn' to='/' text='Get a Quote' />
                                    <GlobalButton additionalClass='hero-white-btn' to='/' text='Renew a Policy' />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="hero" id='hero2'>
                    <Container>
                        <div className="hero-content-parent">
                            <div className="hero-content">
                                <h1 className="hero-heading">More than insurance</h1>
                                <p className="hero-para">Insurance with reassurance. With Solidarity, you get the best advice on how to protect what’s important to you.</p>
                                <div className="hero-buttons">
                                    <GlobalButton additionalClass='hero-blue-btn' to='/' text='Get a Quote' />
                                    <GlobalButton additionalClass='hero-white-btn' to='/' text='Renew a Policy' />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="hero" id='hero3'>
                    <Container>
                        <div className="hero-content-parent">
                            <div className="hero-content">
                                <h1 className="hero-heading">More than insurance</h1>
                                <p className="hero-para">With Solidarity, you get the best advice on how to protect what’s important to you. </p>
                                <div className="hero-buttons">
                                    <GlobalButton additionalClass='hero-blue-btn' to='/' text='Get a Quote' />
                                    <GlobalButton additionalClass='hero-white-btn' to='/' text='Renew a Policy' />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="hero" id='hero4'>
                    <Container>
                        <div className="hero-content-parent">
                            <div className="hero-content">
                                <h1 className="hero-heading">Exciting summer offers</h1>
                                <p className="hero-para">With Solidarity, you get the best advice on how to protect what’s important to you. </p>
                                <div className="hero-buttons">
                                    <GlobalButton additionalClass='hero-blue-btn' to='/' text='Get a Quote' />
                                    <GlobalButton additionalClass='hero-white-btn' to='/' text='Renew a Policy' />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </Slider>

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

            <section className="steps-section">
                <Container>
                    <div className="top-part">
                        <h1 className="global-heading">Insure in simple steps</h1>
                        <p className="global-para">If you would rather buy insurance without our help, try our easy-to-use platform to make your choices and customize your plan</p>
                    </div>
                    <div className="bottom-part">
                        <Row>
                            <Col md={4}>
                                <h4 className="global-heading">Solidarity Portal</h4>

                                <h5 className="sm-heading">Tell us about yourself</h5>
                                <p className="global-para">We just need your CPR number, email, and mobile number to get started</p>
                            
                                <h5 className="sm-heading">Make your choice</h5>
                                <p className="global-para">Select which insurance policy you would like to sign up for</p>

                                <h5 className="sm-heading">Customize your plan</h5>
                                <p className="global-para">Include any add-ons that best suit your requirments and finalize your insurance policy</p>
                                <GlobalButton text='Sign up' arrow='true' />
                            </Col>
                            <Col md={8}>
                                <div className="right-part">
                                    <img src={StepsImage} alt="Step 1" className='img' />
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