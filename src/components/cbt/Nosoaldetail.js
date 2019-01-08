import React, { Component } from 'react';

const onClick = (index, callback) => () => callback(index);

// const Nosoaldetail = () => {
const Nosoaldetail = ({ dataNoSoal, index, onNoSoalClicked }) => {

  return (
    <div className="weather-list-item" onClick={onClick(index, onNoSoalClicked)}>
      <h2>{dataNoSoal.cNoSoal}-{dataNoSoal.cKunci}</h2>
    </div>
  );
};

export default Nosoaldetail;
