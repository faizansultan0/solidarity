import { Link } from "react-router-dom";
import './GlobalButton.css';
import ArrowIcon from '../../assets/images/arrow-narrow-right.svg';

const GlobalButton = (props) => {
    return (
        <Link to={props.to} className="global-button"> { props.text } {props.arrow === 'true' ? <img src={ ArrowIcon } alt="" className="arrow-icon" /> : null} </Link>
    )
}

export default GlobalButton;