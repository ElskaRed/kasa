import './rate.scss';
import grey from '../../assets/images/grey-star.svg';
import full from '../../assets/images/full-star.svg';

const Rate = (props) => {
    const rating = props.rating;
    const notation = [1, 2, 3, 4, 5];

    return(
        <div className="rate">
             {notation.map((rate) =>
          rating >= rate ? (
            <img
              key={rate.toString()}
              className="rate__star"
              src={full}
              alt="étoile remplie"
            />
          ) : (
            <img
              key={rate.toString()}
              className="rate__star"
              src={grey}
              alt="étoile vide"
            />
          )
        )}
        </div>
    )
}

export default Rate;