import React, { Component } from 'react';
import CheapLuxuryCard from './CheapLuxuryCard';
import { cheapLuxury } from '../utils/data';

const CheapLuxury = () => (
  <div className="cheap-luxury">
    <p className="cheap-luxury__title">Cheap and Luxury</p>
    <div className="cheap-luxury-list">
      {cheapLuxury.map(home => <CheapLuxuryCard key={home.name} {...home} />)}
    </div>
  </div>
);

export default CheapLuxury;