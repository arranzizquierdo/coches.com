
import './index.css';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import React from 'react';

export const Modal = ({carData, closeModal}) => {

  return <div className="containerModal">
    <div className="modal">
        <div className="close"><FontAwesomeIcon icon={faTimes} onClick={closeModal}/></div>
        <p className="nameModal">{carData.name}</p>
        <p className="infoModal">{carData.info}</p>
        <img src={require(`../../assets/image/${carData.img}`)} className="imgModal" alt={carData.info}/>
    </div>
  </div>
}

Modal.propTypes = {
  carData: PropTypes.object,
  closeModal: PropTypes.func,
};

export default Modal;