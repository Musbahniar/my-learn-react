import { Button, Table } from 'reactstrap';
import React, { Component } from 'react';
import NoSoalDetail from './Nosoaldetail';

const Nosoal = ({days}) =>
    <div className="weather-list flex-parent">
        {days.map((day, index) =>
        <NoSoalDetail
        />
        )}
    </div>

export default Nosoal;