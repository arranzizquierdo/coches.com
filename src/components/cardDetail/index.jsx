import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { faHeart, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const CardDetail = ({carData, onClick}) => {
  const [favoriteCar, setFavoriteCar] = React.useState(false);

return <div className="carCard" onClick={onClick}>
    <img src={require(`../../assets/image/${carData.img}`)} className="img-responsive" alt={carData.info}/>
    <div className="containerAmount">
      <FontAwesomeIcon className={favoriteCar ? 'favorite' : 'heart'} icon={faHeart} onClick={() => setFavoriteCar(!favoriteCar)}/>
      <p className="amount">{carData.amount} €</p>
    </div>
    <div className="info">{carData.name}</div>
    <div className="containerData">
      <p>{carData.km} km</p>
      <div className="containerYear">
        <FontAwesomeIcon className="calendar" icon={faCalendarAlt} />
        <p>{carData.year}</p>
      </div>
    </div>
    
  </div>;
};

CardDetail.propTypes = {
  phoneData: PropTypes.object,
};

export default CardDetail;
