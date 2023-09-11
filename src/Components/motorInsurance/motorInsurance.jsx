import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Feature1 from '../../assets/images/feature-1.png';
import Feature2 from '../../assets/images/feature-2.png';
import Feature3 from '../../assets/images/feature-3.png';
import Feature4 from '../../assets/images/feature-4.png';
import Feature5 from '../../assets/images/feature-5.png';
import MotorRide from '../../assets/images/motor-ride.png';
import PDFPlaceHolder from '../../assets/images/pdf-file-placeholder.png';
import GlobalButton from '../globalButton/globalButton';
import TwoCards from '../twoCardsPart/twoCards';
import './motorInsurance.css';

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button type="button" className='arrow-btn' id='left-arrow-btn' onClick={onClick}>
            <FontAwesomeIcon icon={faArrowLeftLong} className='arrow' />
        </button>
    );
}

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button type="button" className='arrow-btn' id='right-arrow-btn' onClick={onClick} >
            <FontAwesomeIcon icon={faArrowRightLong} className='arrow' />
        </button>
    );
}

const MotorInsurance = () => {
    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    
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
                        <div className="top-part top-part-w-50">
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

            <section className="pros-cons">
                <Container>
                    <div className="content">
                        <div className="top-part top-part-w-50">
                            <h3 className="global-heading">Benefits & Exclusions</h3>
                            <p className="global-para">Motor insurance offers great value and a piece of mind a for you. We have devised a number of options for you to choose from as summarized in the benefits and exclusion below.</p>
                        </div>

                        <div className="bottom-part">
                            <Row>
                                <Col md={6}>
                                    <h4 className="global-heading includes-heading">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><g clip-path="url(#clip0_2052_35994)"><path d="M19.9997 3.33325C10.7997 3.33325 3.33301 10.7999 3.33301 19.9999C3.33301 29.1999 10.7997 36.6666 19.9997 36.6666C29.1997 36.6666 36.6663 29.1999 36.6663 19.9999C36.6663 10.7999 29.1997 3.33325 19.9997 3.33325ZM16.6663 28.3333L8.33301 19.9999L10.683 17.6499L16.6663 23.6166L29.3163 10.9666L31.6663 13.3333L16.6663 28.3333Z" fill="#47D16C"/></g><defs><clipPath id="clip0_2052_35994"><rect width="40" height="40" fill="white"/></clipPath></defs></svg>
                                        <span>It includes</span>
                                    </h4>

                                    <ul className="global-ul main-ul">
                                        <li className="global-li">Lifetime Agency/Dealer repair</li>
                                        <li className="global-li">Geographical extension to GCC countries</li>
                                        <li className="global-li">Natural perils</li>
                                        <li className="global-li">Vehicle replacement from 8 to 30 days with various vehicle options</li>
                                        <li className="global-li">24-hour roadside assistance in GCC</li>
                                        <li className="global-li">0 depreciation on total loss claim up to 6 months</li>
                                        <li className="global-li mb-0">VIP Service:</li>
                                        <ul className="global-ul">
                                            <li className="global-li">Pickup & Delivery for Routine Maintenance or Taxi Service</li>
                                            <li className="global-li">Traffic Inspection and Registration</li>
                                            <li className="global-li">Airport drop off service</li>
                                        </ul>
                                        <li className="global-li">Strike, Riot, Civil Commotion Cover (SRCC)</li>
                                        <li className="global-li">Personal Cyber</li>
                                        <li className="global-li">Windscreen cover (NCD protection & Waiver of deductible)</li>
                                        <li className="global-li">Life insurance to the policy holder</li>
                                        <li className="global-li">Personal accident (driver only) BD 5,000</li>
                                        <li className="global-li">Emergency medical expenses up to BD 500</li>
                                        <li className="global-li">Standard Motor Comprehensive Policy</li>
                                        <li className="global-li">Liability to third Parties</li>
                                    </ul>
                                </Col>

                                <Col md={6}>
                                    <h4 className="global-heading includes-heading">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"> <g clip-path="url(#clip0_2052_35995)"><path d="M20.0007 3.33325C10.784 3.33325 3.33398 10.7833 3.33398 19.9999C3.33398 29.2166 10.784 36.6666 20.0007 36.6666C29.2173 36.6666 36.6673 29.2166 36.6673 19.9999C36.6673 10.7833 29.2173 3.33325 20.0007 3.33325ZM28.334 25.9833L25.984 28.3333L20.0007 22.3499L14.0173 28.3333L11.6673 25.9833L17.6507 19.9999L11.6673 14.0166L14.0173 11.6666L20.0007 17.6499L25.984 11.6666L28.334 14.0166L22.3507 19.9999L28.334 25.9833Z" fill="#F76659" /></g><defs><clipPath id="clip0_2052_35995"><rect width="40" height="40" fill="white" /></clipPath></defs>
                                        </svg>
                                        <span>It does not include</span>
                                    </h4>

                                    <ul className="global-ul main-ul">
                                        <li className="global-li">Lifetime Agency/Dealer repair</li>
                                        <li className="global-li">Geographical extension to GCC countries</li>
                                        <li className="global-li">Natural perils</li>
                                        <li className="global-li">Vehicle replacement from 8 to 30 days with various vehicle options</li>
                                        <li className="global-li">24-hour roadside assistance in GCC</li>
                                    </ul>
                                </Col>

                                <Col md={6}>
                                    <h4 className="global-heading includes-heading">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><g clip-path="url(#clip0_2052_35996)"><path d="M6.66634 10.0002H3.33301V33.3335C3.33301 35.1668 4.83301 36.6668 6.66634 36.6668H29.9997V33.3335H6.66634V10.0002ZM33.333 3.3335H13.333C11.4997 3.3335 9.99967 4.8335 9.99967 6.66683V26.6668C9.99967 28.5002 11.4997 30.0002 13.333 30.0002H33.333C35.1663 30.0002 36.6663 28.5002 36.6663 26.6668V6.66683C36.6663 4.8335 35.1663 3.3335 33.333 3.3335ZM33.333 26.6668H13.333V6.66683H33.333V26.6668ZM16.6663 15.0002H29.9997V18.3335H16.6663V15.0002ZM16.6663 20.0002H23.333V23.3335H16.6663V20.0002ZM16.6663 10.0002H29.9997V13.3335H16.6663V10.0002Z" fill="#84919A"/></g><defs><clipPath id="clip0_2052_35996"><rect width="40" height="40" fill="white"/></clipPath></defs></svg>
                                    <span>Policy Specifications</span>
                                    </h4>

                                    <div className="pdf-cards">
                                        <div className="pdf-card">
                                            <div className="left-part">
                                                <div className="icon-part">
                                                    <img src={PDFPlaceHolder} alt="PDF" className='pdf-icon' />
                                                </div>
                                                <div className="text-part">
                                                    <h5 className="label">Policy Specifications</h5>
                                                    <span className="file-size">165.7 KB</span>
                                                </div>
                                            </div>
                                            <div className="download-button-part">
                                                <button type="button" className='button' >
                                                    <FontAwesomeIcon icon={faDownload} className='download-icon' />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="pdf-card">
                                            <div className="left-part">
                                                <div className="icon-part">
                                                    <img src={PDFPlaceHolder} alt="PDF" className='pdf-icon' />
                                                </div>
                                                <div className="text-part">
                                                    <h5 className="label">Product Brochure</h5>
                                                    <span className="file-size">165.7 KB</span>
                                                </div>
                                            </div>
                                            <div className="download-button-part">
                                                <button type="button" className='button' >
                                                    <FontAwesomeIcon icon={faDownload} className='download-icon' />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="pdf-card">
                                            <div className="left-part">
                                                <div className="icon-part">
                                                    <img src={PDFPlaceHolder} alt="PDF" className='pdf-icon' />
                                                </div>
                                                <div className="text-part">
                                                    <h5 className="label">Claim Procedure</h5>
                                                    <span className="file-size">165.7 KB</span>
                                                </div>
                                            </div>
                                            <div className="download-button-part">
                                                <button type="button" className='button' >
                                                    <FontAwesomeIcon icon={faDownload} className='download-icon' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="motor-carousel-content">
                                        <div className="carousel-parent">
                                            <Slider {...sliderSettings}>
                                                <div className="carousel">
                                                    <div className="content">
                                                        <h1 className="global-heading">Ready for summer travels?</h1>
                                                        <p className="para">Don’t forget to insure for your peace of mind</p>
                                                        <Link to='/' className='link'>
                                                            <span>Get Insured</span>
                                                            <FontAwesomeIcon icon={faArrowRightLong} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="carousel">
                                                    <div className="content">
                                                        <h1 className="global-heading">Ready for another travels?</h1>
                                                        <p className="para">Don’t forget to insure for your peace of mind</p>
                                                        <Link to='/' className='link'>
                                                            <span>Get Insured</span>
                                                            <FontAwesomeIcon icon={faArrowRightLong} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="carousel">
                                                    <div className="content">
                                                        <h1 className="global-heading">Ready for another travels?</h1>
                                                        <p className="para">Don’t forget to insure for your peace of mind</p>
                                                        <Link to='/' className='link'>
                                                            <span>Get Insured</span>
                                                            <FontAwesomeIcon icon={faArrowRightLong} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="carousel">
                                                    <div className="content">
                                                        <h1 className="global-heading">Ready for another travels?</h1>
                                                        <p className="para">Don’t forget to insure for your peace of mind</p>
                                                        <Link to='/' className='link'>
                                                            <span>Get Insured</span>
                                                            <FontAwesomeIcon icon={faArrowRightLong} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <div className="note-content">
                                        <h6 className="global-para">Note:</h6>
                                        <p className="global-para">Solidarity Bahrain B.S.C., hereinafter referred to as “Solidarity”, is as diligent as possible in compiling and updating the information on its website. However, Solidarity does not guarantee the completeness of the information provided on its website. Equally, Solidarity does not guarantee that this information is up to date. For questions concerning our insurance policies, their specifications and their utilization, please read the policy specification document carefully. The policy specifications documents can change without notice, from time to time at Solidarity’s sole discretion. Solidarity will post regular amendments when deemed necessary to the website, benefits, exclusions and policy specification sections.</p>
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