import React, { Component } from 'react';
import CheapLuxuryCard from './CheapLuxuryCard';
import { cheapLuxury } from '../utils/data';

class CheapLuxury extends Component {
  render() {
    return (
      <div className="cheap-luxury">
        <p className="cheap-luxury__title">Cheap and Luxury</p>
        <div className="cheap-luxury-list">
          {cheapLuxury.map(home => (
            <CheapLuxuryCard key={home.name} {...home} />
          ))}
        </div>
      </div>
    );
  }
}

export default CheapLuxury;
