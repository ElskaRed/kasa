import './rate.scss';
import grey from '../../assets/images/grey-star.svg';
import full from '../../assets/images/full-star.svg';

//Composant rate appelé dans FicheLogement

const Rate = (props) => {
    const rating = props.rating;
    const notation = [1, 2, 3, 4, 5]; //Tableau utilisé pour itérer et placer une étoile à chaque fois

    //On map le tableau, et si le score récupéré dans les props est supérieur au chiffre du tableau, on met une étoile remplie,
    //sinon on met une étoile grise, et ce jusqu'à 5.
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