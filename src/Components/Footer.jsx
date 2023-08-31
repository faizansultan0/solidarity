import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.png';
import AppStoreImg from '../assets/images/download-app-store.png';
import PlayStoreImg from '../assets/images/download-play-store.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top-section">
                <Container>
                    <Row>
                        <Col lg={3} md={4} sm={6} >
                            <div className="column">
                                <strong className="logo">
                                    <Link to='/' className="link">
                                        <img src={ Logo } alt="Solidarity Logo" className="img" />
                                    </Link>
                                </strong>

                                <div className="download-buttons">
                                    <Link to='/' className="download-link">
                                            <img src={ AppStoreImg } alt="DownloadFromAppStore" className="img" />
                                    </Link>

                                    <Link to='/' className="download-link">
                                            <img src={ PlayStoreImg } alt="DownloadFromPlayStore" className="img" />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={6} >
                            <h4 className="links-head">Insurance</h4>
                            <ul className="links smNoMargin">
                                <li className="link-item">
                                    <Link to='/motor' className="link" >Motor & Car Insurance</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/motor' className="link" >Home Insurance</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/motor' className="link" >Travel Insurance</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/motor' className="link" >Domestic Helper</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/motor' className="link" >Personal Accident</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4} sm={6} >
                            <ul className="links extraMargin">
                                <li className="link-item">
                                    <Link to='/motor' className="link" >Medical Insurance</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/motor' className="link" >For Businesses</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/motor' className="link" >Claims</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={3} md={4} sm={6} >
                            <h4 className="links-head">Support</h4>
                            <ul className="links">
                                <li className="link-item">
                                    <Link to='/' className="link" >Video Call Insurance</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/' className="link" >Whatsapp</Link>
                                </li>
                                <li className="link-item">
                                    <a href='tel:+92112345678' className="link" >Call us on +973 17130000</a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4} sm={6} >
                            <h4 className="links-head">Company</h4>
                            <ul className="links">
                                <li className="link-item">
                                    <Link to='/about-us' className="link" >About Us</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/news' className="link" >News</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/' className="link" >Careers</Link>
                                </li>
                                <li className="link-item">
                                    <Link to='/contact-us' className="link" >Contact Us</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="botton-section"></div>
        </footer>
    )
}

export default Footer;