import { Container, Row, Col } from 'react-bootstrap';
import GlobalButton from '../globalButton/globalButton';
import MainBanner from './mainBanner/mainBanner';
import TwoCards from '../twoCardsPart/twoCards';
import CoveredSection from '../coveredSection/coveredSection';
import Layout from '../../layout';
import images from '../../assets/images';
import './home.css';

const Home = () => {
    return (
        <Layout>
            <MainBanner />
            <section className="primary-cards">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="primary-card">
                                <div className="icon-div">
                                    <img src={images.PrimaryCardIcon1} alt="Approved Sign Insurance" className='icon' />
                                </div>
                                <h2 className="heading">Super Simple Claim</h2>
                                <p className="para">No hidden clauses, no long-words, just simple documents and forms.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="primary-card">
                                <div className="icon-div">
                                    <img src={images.PrimaryCardIcon2} alt="Call Center" className='icon' />
                                </div>
                                <h2 className="heading">Fast Services</h2>
                                <p className="para">Self-initiated web and mobile services gets you a new policy within minutes!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="primary-card">
                                <div className="icon-div">
                                    <img src={images.PrimaryCardIcon3} alt="Family Insurance" className='icon' />
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
                                        <img src={images.Option1} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Motor & Car</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Option2} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Home</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Option3} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Travel</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Option4} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Domestic Helper</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Option5} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Accident</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Option6} alt="Insurance Option" className='img' />
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
                                    <img src={images.StepsImage} alt="Step 1" className='img' />
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
                                    <img src={images.ReadyImage} alt="Ready to get Insured" className="img" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default Home;