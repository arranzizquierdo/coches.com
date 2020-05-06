import React from 'react';
import './App.css';
import data from './data';
import CardDetail from './components/cardDetail';
import Modal from './components/modal';
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      showModalDetail: false,
      selectedCar: null,
    }
  };

  _filterData() {
    const { search } = this.state;
    return data.filter((car) => car.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

  render() {
    const { showModalDetail, selectedCar, search } = this.state;

    return <div>
      <div id="hero" className="cc_background_home_km0">
        <div className="titleWeb">
	  			<h1>Coches seminuevos y km 0</h1>
	  			<p>Las mejores ofertas en coches seminuevos y km 0 de concesionarios oficiales.</p>
        </div>
        <div className="search">
          <input type="text" name="search4" id="search4" spellCheck="false" autoComplete="off" placeholder="Ej: Seat Ibiza" 
            value={search} onChange={(e) => this.setState({search: e.target.value})}/>
          <button className="buttonSearch">
            <FontAwesomeIcon icon={faSearch} />  
          </button>                    
        </div>
      </div>
      <div className="containerMain">
        <div className="cc_section_title">
          <h2 className="title"><strong>15.531 ofertas</strong> de coches <strong>seminuevos</strong> y de <strong>km 0</strong></h2>
          <p>Seleccionamos las mejores ofertas de coches seminuevos según segmento y precio de mercado del vehículo</p>
        </div>
        <div className="containerCards">
          {this._filterData().length > 0 ? 
            this._filterData().map((car, i) => <CardDetail carData={car} key={i} onClick={() => this.setState({showModalDetail: true, selectedCar: car})}/>) :
            <p>No hay resultados</p>
          }
        </div>
        <button className="buttonSales" onClick={() => this._filterData()}>
          Ver ofertas
          <FontAwesomeIcon className="chevron" icon={faChevronRight} />
        </button>
      </div>
      {
        showModalDetail ?
        <Modal carData={selectedCar} closeModal={() => this.setState({showModalDetail: false, selectedCar: null})}/> :
        null
    }
    </div>;
  }
}

export default App;
