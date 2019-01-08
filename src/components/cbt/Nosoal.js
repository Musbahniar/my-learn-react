import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button} from 'reactstrap';
import NoSoalDetail from '../../components/cbt/Nosoaldetail';


const Nosoal = ({ days, onDayClicked }) =>
  <div className="weather-list flex-parent">
    {days.map((day, index) =>
      <NoSoalDetail
        key={day.id}
        day={day}
        index={index}
        onDayClicked={onDayClicked}
      />
    )}
  </div>

export default Nosoal;