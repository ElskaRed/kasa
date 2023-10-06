import './carrousel.scss';
import { useState } from "react";
import next from "../../assets/images/arrow-left.svg";
import previous from "../../assets/images/arrow-right.svg";


const Carrousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const previousSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const nextSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

    return(
        <section className="carrousel">
            <img
                src={previous}
                alt="flèche gauche"
                onClick={previousSlide}
                className="carrousel__left-arrow"
            />
            <img
                src={next}
                alt="flèche droite"
                onClick={nextSlide}
                className="carrousel__right-arrow"
            />

            {slides.map((slide, index) => {
                return (
                    <div
                        key={index}
                        className={index === current ? "slider displayed" : "slider"}
                    >
                        {index === current && (
                        <img src={slide} alt="logement à louer" className="slider__photo" />
                        )}

                        {index === current && length > 1 && (
                        <span className="slider__tracker">
                            {current + 1}/{length}
                        </span>
                        )}
                </div>
                );
            })}
        </section>
    )
}

export default Carrousel;