import React, { Component } from 'react';
import NoSoalDetail from '../../components/cbt/Nosoaldetail';


const Nosoal = ({ dataSoal, onNoSoalClicked }) =>
  <div className="grid">
    {dataSoal.map((data, index) =>
      <NoSoalDetail
        key={data.cNoSoal}
        dataNoSoal={data}
        index={index}
        onNoSoalClicked={onNoSoalClicked}
      />
    )}
  </div>

export default Nosoal;