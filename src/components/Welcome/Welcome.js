import React, {Component} from 'react';
import pic1 from '../../assets/1.png';
import Header from '../../components/Header/Header';

class Welcome extends Component {
  render() {
    return (
      <div>
      <Header />
      <header id="home">
        <div className="container">
            <div className="row">
              <div className="col-6 col-md-4">
                <h3 className="intro text-left"><br />We help You make <font color="red"><strong>Your dreams come true</strong></font></h3>
                <p className="sub-heading text-left">
				          <font color="red"><strong>GOLearn </strong></font> 
				          <font color="black">
				            merupakan perangkat lunak yang dikembangkan oleh Ganesha Operation untuk para siswa/i nya dan Orangtua untuk memperoleh informasi hasil <strong>Tes Modalitas, Tryout, Presensi, DLL </strong> dengan mudah melalui fasilitas ini.                                   
				          </font>
				        </p>
              </div>
              <div className="col-12 col-md-8"></div>
            </div>
            <div className="row">
              <div className="col-6 col-md-4">
                  <img src={pic1} width="400" heigth="200" alt="Feature" className="img-responsive" />
              </div>
              <div className="col-6 col-md-4"></div>
            </div>
        </div>
      </header>
      </div>
    );
  }
}

export default Welcome;