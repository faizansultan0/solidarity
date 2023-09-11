import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import GlobalButton from '../../globalButton/globalButton';
import './mainBanner.css';

const MainBanner = () => {
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
        <section className="mainbanner">
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
        </section>
    )
}

export default MainBanner;