import './dropdown.scss';
import { useState } from "react";
import arrow from '../../assets/images/arrow-up.svg';

const Dropdown = () => {
    const [toggle, setToggle] = useState(false);
    const toggleState = () => {
		setToggle(!toggle);
	};

    return(
        <div className="dropdown">
            <div className="dropdown__up">
                <h2 className="dropdown__up__title">blblblblbl</h2>
                <img src={arrow} alt="flèche" />
            </div>
            <p className="dropdown__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores labore inventore minima ab cum, perferendis expedita enim dolor voluptatem ipsam modi consequuntur veniam fuga vero numquam fugit ducimus accusamus iure quia explicabo. Sapiente a quas ratione consectetur inventore voluptate, totam libero repellendus temporibus consequatur atque corrupti aliquam ipsam, fugit quasi sequi tempore quibusdam est doloribus cupiditate suscipit amet fugiat. Qui atque nulla adipisci, vero quibusdam magnam, cum voluptatem facilis eum doloremque ipsa numquam alias illum ex dolore! Voluptatum minus reiciendis accusamus, eveniet id tempora! Labore commodi, aperiam sequi vero exercitationem perferendis, eligendi cum magni at illum eos in, quaerat ab.</p>
        </div>
    );
    
};

export default Dropdown;