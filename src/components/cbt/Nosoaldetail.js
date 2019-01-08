import React, { Component } from 'react';

const onClick = (index, callback) => () => callback(index);

// const Nosoaldetail = () => {
const Nosoaldetail = ({ dataNoSoal, index, onNoSoalClicked }) => {

  return (
    <ul className="module" onClick={onClick(index, onNoSoalClicked)}>
      {dataNoSoal.cNoSoal}-{dataNoSoal.cKunci}
    </ul>
  );
};

export default Nosoaldetail;
