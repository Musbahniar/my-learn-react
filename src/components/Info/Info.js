import React from 'react';
import { GetData } from '../../services/GetData';
import { Media } from 'reactstrap';
import Header from '../../components/Header/Header';

class Info extends React.Component {
  constructor () {
    super();
    this.state ={
      data: []
    };
  }
  
  componentWillMount(){
      this.getInfoFeed();
  }

  getInfoFeed(){
    GetData('Info').then((result) => {
        let responseJson = result;
        this.setState({data: responseJson});
        console.log(this.state);
    });
  }

    render() {
        const infoData = this.state.data;
        let tampilInfo = '';
        if(infoData.length > 0) {
            tampilInfo = infoData.map( obj => {
              return (
                <div key={obj.index}>
                <Media>
                    <Media body>
                        <Media heading>{obj.c_tgl} {obj.c_blnThn}</Media>
                        <div dangerouslySetInnerHTML={ { __html: obj.c_infoLengkap } } />
                        <hr />
                      </Media>
                </Media>
                </div>
              )
          })
          }
  
      return (
        <div>
          <div>
            <Header />
          <div className="container" align="center">
          <br />
          <h2 align="center">Info Terbaru <font color="red">GOLearn</font></h2>
          <br />
          { tampilInfo }
          </div>
        </div>
        </div>
      );
    }
  }

  export default Info;