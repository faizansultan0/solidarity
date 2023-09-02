import Container from 'react-bootstrap/Container';
import TCard1 from '../../assets/images/tcard-1.png';
import TCard2 from '../../assets/images/tcard-2.png';
import './TwoCards.css';

const TwoCards = () => {

    return (
        <div className='two-cards'>
            <Container>
                <div className="content">
                    <div className="tcard primary-card">
                        <div className="icon-div">
                            <img src={TCard1} alt="Card 1" className="icon" />
                        </div>
                        <h3 className="heading">Motor & Car Claims</h3>
                        <p className="para">Easier process, faster claim. Submit a claim on your motor or car online.</p>
                    </div>
                    <div className="tcard primary-card">
                        <div className="icon-div">
                            <img src={TCard2} alt="Card 2" className="icon" />
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