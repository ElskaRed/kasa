import './collapse.scss';
import { useState } from "react";
import arrow from '../../assets/images/arrow-up.svg';

const Collapse = ({ title, text }) => {
    const [toggle, setToggle] = useState(false);
    const toggleState = () => {
		setToggle(!toggle);
	};

    return(
        <div className="collapse">
            <div className="collapse__top">
                <h2 className="collapse__top__title">{title}</h2>
                <img
                    className={`collapse__top__arrow ${toggle ? 'arrow-down' : ''}`}
                    src={arrow}
                    alt="flèche"
                    onClick={toggleState}
                />
            </div>
            <p className={`collapse__text ${toggle ? 'text-down' : ''}`}>{text}</p>
        </div>
    );
    
};

export default Collapse;