import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GlobalButton from '../Components/SmallComponents/GlobalButton';
import PrimaryCardIcon1 from '../assets/images/primary-card-icon-1.png';
import PrimaryCardIcon2 from '../assets/images/primary-card-icon-2.png';
import PrimaryCardIcon3 from '../assets/images/primary-card-icon-3.png';

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
        </>
    )
}

export default Home;