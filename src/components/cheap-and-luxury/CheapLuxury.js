import React from "react";

import CheapLuxuryCard from "./CheapLuxuryCard";
import { cheapLuxury } from "../../utils/data";

const CheapLuxury = () => (
  <div className="card cheap-luxury">
    <div className="title-and-arrow">
      <p className="card__title cheap-luxury__title">Cheap and Luxury</p>
      <div className="arrow-group">
        <img
          className="circle-arrow__icon arrow-left"
          src="/icons/arrow-right.svg"
        />
        <img
          className="circle-arrow__icon arrow-right"
          src="/icons/arrow-right.svg"
        />
      </div>
    </div>
    <div className="card-list cheap-luxury-list">
      {cheapLuxury.map(
        (home, index) =>
          index < cheapLuxury.length / 2 && (
            <CheapLuxuryCard key={home.name} {...home} />
          )
      )}
    </div>
    <div className="card-list cheap-luxury-list">
      {cheapLuxury.map(
        (home, index) =>
          index >= cheapLuxury.length / 2 && (
            <CheapLuxuryCard key={home.name} {...home} />
          )
      )}
    </div>
  </div>
);

export default CheapLuxury;
