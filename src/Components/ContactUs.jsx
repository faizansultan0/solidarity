import CoveredSection from "./SmallComponents/CoveredSection";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactUs.css';

const ContactUs = () => {
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

                            <button type="submit" class='global-button' >Send Message</button>
                        </form>
                    </div>
                </Container>
            </section>
            <CoveredSection />
        </>
    )
}

export default ContactUs;