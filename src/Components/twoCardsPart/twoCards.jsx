import { Container } from 'react-bootstrap';
import images from '../../assets/images';
import './twoCards.css';

const TwoCards = () => {

    return (
        <div className='two-cards'>
            <Container>
                <div className="content">
                    <div className="tcard primary-card">
                        <div className="icon-div">
                            <img src={ images.TCard1 } alt="Card 1" className="icon" />
                        </div>
                        <h3 className="heading">Motor & Car Claims</h3>
                        <p className="para">Easier process, faster claim. Submit a claim on your motor or car online.</p>
                    </div>
                    <div className="tcard primary-card">
                        <div className="icon-div">
                            <img src={ images.TCard2 } alt="Card 2" className="icon" />
                        </div>
                        <h3 className="heading">Motor & Car Claims</h3>
                        <p className="para">Easier process, faster claim. Submit a claim on your motor or car online.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TwoCards;