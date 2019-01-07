import React, { Component } from 'react';

const onClick = (index, callback) => () => callback(index);

// const Nosoaldetail = () => {
const Nosoaldetail = ({ day, index, onDayClicked }) => {
    //   const date = new Date(day.dt * 1000);

  return (
    <div className="weather-list-item" onClick={onClick(index, onDayClicked)}>
      <h2>{day.harga}</h2>
    </div>
  );
};

export default Nosoaldetail;
