import { Link } from "react-router-dom";
import ArrowIcon from '../../assets/images/arrow-narrow-right.svg';
import './globalButton.css';

const GlobalButton = (props) => {
    return (
        <Link to={props.to} className={`global-button ${props.additionalClass != null? props.additionalClass : null}`}> { props.text } {props.arrow === 'true' ? <img src={ ArrowIcon } alt="" className="arrow-icon" /> : null} </Link>
    )
}

export default GlobalButton;