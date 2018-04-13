import React from "react";
import CheapLuxuryCard from "./CheapLuxuryCard";
import { cheapLuxury } from "../../utils/data";

const CheapLuxury = () => (
  <div className="card cheap-luxury">
    <p className="card__title cheap-luxury__title">Cheap and Luxury</p>
    <div className="card-list cheap-luxury-list">
      {cheapLuxury.map(home => <CheapLuxuryCard key={home.name} {...home} />)}
    </div>
  </div>
);

export default CheapLuxury;
