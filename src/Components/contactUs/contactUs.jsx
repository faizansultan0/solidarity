import CoveredSection from "../coveredSection/coveredSection";
import { Container, Row, Col } from 'react-bootstrap';
import ImagePlaceHolder from '../../assets/images/image-placeholder.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './contactUs.css';
import SolidatoryLocations from '../../data/SolidatoryLocations.json';
import { useState } from "react";

const ContactUs = () => {
    const [location, setLocation] = useState({
        location: "All Locations"
    });

    return (
        <>
            <section className="contact-hero contact">
                <Container>
                    <div className="content">
                        <h1 className="global-heading">Get in touch with us</h1>
                        <p className="global-para">Whether you've got a question, need to change your details, want to share your feedback or complaint, we are here to help.</p>
                    </div>
                </Container>
            </section>

            <section className="contact-form-section">
                <Container>
                    <div className="content">
                        <form className="contact-form">
                            <h2 className="global-heading">We’d love to hear from you</h2>

                            <div className="input-div">
                                <label htmlFor="name" className="label">Name</label>
                                <input type="text" className="input" placeholder="e.g. John Doe" id="name" />
                            </div>

                            <Row>
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
                                        <label htmlFor="email" className="label">Email Address</label>
                                        <input type="text" className="input" id="email" placeholder="e.g name@example.com" />
                                    </div>
                                </Col>
                            </Row>

                            <div className="input-div">
                                <label htmlFor="title" className="label">Subject</label>
                                <input type="text" className="input" placeholder="Title of what your message is about" id="title" />
                            </div>

                            <div className="input-div">
                                <label htmlFor="message" className="label">Message</label>
                                <textarea type="text" className="input" placeholder="Type your message here" rows={3} id="message" >
                                </textarea>
                            </div>

                            <button type="submit" className='global-button' >Send Message</button>
                        </form>
                    </div>
                </Container>
            </section>

            <section className="map-section contact">
                <Container>
                    <div className="top-part">
                        <h2 className="global-heading">Solidarity closer to you</h2>
                        <p className="global-para">Want to visit a Solidarity branch? Use the map below to find the nearest one to you.</p>
                    </div>

                    <div className="bottom-part">
                        <Row>
                            <Col xl={7} lg={6}>
                                <div className="map-div">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9350.782931913027!2d74.25293111404714!3d31.472644330750256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903ef916acde5%3A0x126f31f2c2a99ec4!2sAl%20Fatah%20-%20Johar%20Town!5e0!3m2!1sen!2s!4v1693725325861!5m2!1sen!2s" className="map" title="Solidatory Map" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </Col>

                            <Col xl={5} lg={6}>
                                <div className="right-part">
                                    <form className="map-form">
                                        <label htmlFor="location" className="label"> Select a Location</label>
                                        <select name="location" id="location" className="input" value={location.location}
                                            onChange={(e) => { setLocation({ ...location, location: e.target.value }) }}>
                                            <option value="All Locations">All Locations</option>
                                            {
                                                SolidatoryLocations.map((location, index) => {
                                                    return (
                                                        <option value={location.addressLine} key={index}>{ location.addressLine }</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </form>

                                    <div className="location-cards">
                                            {
                                                SolidatoryLocations.filter((locationItem) => {
                                                    if (location.location === "All Locations") {
                                                        return locationItem;
                                                    } else if(location.location === locationItem.addressLine) {
                                                        return locationItem;
                                                    } else {
                                                        return null;
                                                    }
                                                }).map((locationItem, index) => {
                                                    return (
                                                        <div className="location-card" key={index}>
                                                            <div className="content">
                                                                <div className="img-div">
                                                                    <img src={ImagePlaceHolder} alt="PlaceHolder" className="location-card-img" />
                                                                </div>
                                                                <div className="text-div">
                                                                    <Link to='/' className="name label" >{locationItem.name}</Link>
                                                                    <span className="sm-label mb-13">{locationItem.addressLine}</span>
                                                                    <div className="bottom-icons">
                                                                        <a href="https://goo.gl/maps/2QLtFCGQZAAPM9it7" target="_blank" rel="noreferrer" className="bottom-link">
                                                                            <FontAwesomeIcon icon={faMap} />
                                                                            <span className="sm-label">Show on Map</span>
                                                                        </a>
                                                                        <a href="tel:+9231234567" target="_blank" rel="noreferrer" className="bottom-link">
                                                                            <FontAwesomeIcon icon={faPhone} />
                                                                            <span className="sm-label">Call</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <CoveredSection />
        </>
    )
}

export default ContactUs;