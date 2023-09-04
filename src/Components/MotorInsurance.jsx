import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Feature1 from '../assets/images/feature-1.png';
import Feature2 from '../assets/images/feature-2.png';
import Feature3 from '../assets/images/feature-3.png';
import Feature4 from '../assets/images/feature-4.png';
import Feature5 from '../assets/images/feature-5.png';
import MotorRide from '../assets/images/motor-ride.png';
import GlobalButton from './SmallComponents/GlobalButton';
import TwoCards from './SmallComponents/TwoCards';
import './MotorInsurance.css';

const MotorInsurance = () => {
    return (
        <>
            <section className="contact-hero contact" id="motor-hero">
                <Container>
                    <div className="content">
                        <h1 className="global-heading">Motor Insurance</h1>
                        <p className="global-para">Car insurance as easy as a sunrise morning drive. We offer dynamic packages that protects your car, ensures that you’re never stranded on the side of the road and just makes your life so much easier!</p>
                    </div>
                </Container>
            </section>

            <section className="contact-form-section" id='motor-form'>
                <Container>
                    <div className="content">
                        <form className="contact-form">
                            <h2 className="global-heading">Get a quote</h2>

                            <Row>
                                <Col md={6}>
                                    <div className="input-div">
                                        <label htmlFor="name" className="label">Name</label>
                                        <input type="text" name='quote-name' className="input" placeholder="e.g. John Doe" id="name" />
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="input-div number-input-div">
                                        <label htmlFor="country-code" className="label">Mobile Number</label>
                                        <div className="inputs">
                                            <select name="country-code" id="country-code" className="input" >
                                                <option value="+92">+92</option>
                                                <option value="+972">+973</option>
                                                <option value="+92">+92</option>
                                            </select>
                                            <input type="text" className="input" placeholder="e.g 33110022" />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="input-div">
                                        <label htmlFor="modelYear" className="label">Select Model Year</label>
                                        <select name="modelYear" id="modelYear" className="input" required>
                                                <option value="" disabled selected>Select</option>
                                                <option value="2010">2010</option>
                                                <option value="2011">2011</option>
                                                <option value="2012">2012</option>
                                            </select>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="input-div">
                                        <label htmlFor="modelMake" className="label">Select Model Make</label>
                                            <select name="modelMake" id="modelMake" className="input" required>
                                                <option value="" disabled selected>Select</option>
                                                <option value="2010">Audi</option>
                                                <option value="2011">Toyota</option>
                                                <option value="2012">Honda</option>
                                            </select>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="input-div">
                                        <label htmlFor="carModel" className="label">Car Model</label>
                                            <select name="carModel" id="carModel" className="input" required>
                                                <option value="" disabled selected>Select</option>
                                                <option value="2010">City</option>
                                                <option value="2011">XLI</option>
                                                <option value="2012">Fortuner</option>
                                            </select>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="input-div">
                                        <label htmlFor="motorSum" className="label">Sum Insured (BHD)</label>
                                        <input type="text" className="input" placeholder="e.g. 5,000" id="motorSum" />
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <div className="input-div checkbox-div">
                                        <input type="checkbox" name="motorTerms" className='checkbox' id="motorTerms" value='Terms' />
                                        <label htmlFor="motorTerms" className='label checkbox-label' >I agree to the <Link to='/terms'>Terms of Use</Link> and <Link to='/privacy'>Privacy Policy</Link></label>
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <button type="submit" className='global-button'>View Plans & Prices</button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Container>
            </section>

            <section className="motor-cards">
                <Container>
                    <div className="content">
                        <div className="top-part">
                            <h3 className="global-heading">Key Features</h3>
                            <p className="global-para">We treat our customers as VIPs, here are the main features for our motor and car insurance policy.</p>
                        </div>

                        <div className="primary-cards">
                            <Row>
                                <Col lg={4}>
                                    <div className="primary-card">
                                        <div className="icon-div">
                                            <img src={Feature1} alt="Approved Sign Insurance" className='icon' />
                                        </div>
                                        <h2 className="heading">Super Simple Claim</h2>
                                        <p className="para">No hidden clauses, no long-words, just simple documents and forms.</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="primary-card">
                                        <div className="icon-div">
                                            <img src={Feature2} alt="Call Center" className='icon' />
                                        </div>
                                        <h2 className="heading">Fast Services</h2>
                                        <p className="para">Self-initiated web and mobile services gets you a new policy within minutes!</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="primary-card">
                                        <div className="icon-div">
                                            <img src={Feature3} alt="Family Insurance" className='icon' />
                                        </div>
                                        <h2 className="heading">Trusted by Customers</h2>
                                        <p className="para">We are trusted by over 200,000 customers and 500 businesses.</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="primary-card">
                                        <div className="icon-div">
                                            <img src={Feature4} alt="Family Insurance" className='icon' />
                                        </div>
                                        <h2 className="heading">Trusted by Customers</h2>
                                        <p className="para">We are trusted by over 200,000 customers and 500 businesses.</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="primary-card">
                                        <div className="icon-div">
                                            <img src={Feature5} alt="Family Insurance" className='icon' />
                                        </div>
                                        <h2 className="heading">Trusted by Customers</h2>
                                        <p className="para">We are trusted by over 200,000 customers and 500 businesses.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>
                </Container>
            </section>

            <section className="two-cards-section" id='motor-two-cards-section'>
                <div className="top-part">
                    <Container>
                        <div className="top-content">
                            <h1 className="global-heading">File a Claim</h1>
                            <p className="global-para">File and track your claims from our online claim form in quick and easy steps. You can also reach out to our claims team for help.</p>
                            <GlobalButton to='/' text='File a Claim' />
                        </div>
                    </Container>
                </div>
                <TwoCards />
            </section>

            <section className="ready-section" id='motor-ride-section'>
                <Container>
                    <div className="content">
                        <Row>
                            <Col lg={7}>
                                <div className="left-part">
                                    <h3 className="global-heading">It’s an easy ride.</h3>
                                    <p className="global-para">The great prices, fast claims, and quick renewals are just the beginning. Get the full benefits by signing up with Solidarity.</p>
                                    <div className="buttons">
                                        <GlobalButton to='#sign-up' text='Get a Quote' arrow='true' />
                                        <GlobalButton additionalClass='hero-white-btn' to='/' text='Renew a Policy' />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="image-part">
                                    <img src={MotorRide} alt="Motor Ride" className="img" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default MotorInsurance;