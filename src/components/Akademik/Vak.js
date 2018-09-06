import React from 'react';
import { GetData } from '../../services/GetData';
import {Redirect} from 'react-router-dom';
// import { Media } from 'reactstrap';
import Menu from '../../components/Header/Menu';

class Vak extends React.Component {
    constructor () {
        super();
        this.state ={
          data: '',
          detailvak: '',
          redirectToReferrer: false,
          nis: ''
        };
    }
      
    componentWillMount(){
        if(sessionStorage.getItem('userData'))
        {
            let dataSession = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({redirectToReferrer: true});
            let dataNIS = dataSession[0]['cNIS'];
            // console.log(dataNIS);
            var replacedNIS = dataNIS.split(' ').join('');
            this.getInfoVAK(replacedNIS);
            // console.log(replacedNIS);
        }

    }

    getInfoVAK(param){
        GetData('Vak/get_byID/'+param).then((result) => {
            let responseJson = result;
            this.setState({data: responseJson});
            // console.log(this.state.data.dominan);
            GetData('Vak/get_detailVAK/'+this.state.data.dominan).then((result) => {
                let responseJson = result;
                this.setState({detailvak: responseJson});
                // console.log(this.state.detailvak);
            });
        });

    }

    render() {  
        if (!this.state.redirectToReferrer) {
            return (<Redirect to={'/'}/>)
        }

        const infoData = this.state.data;
        const detailData = this.state.detailvak;
        if(infoData !== '')
        {
            return (
                <div>
                    <div>
                    <Menu />
                    <div className="container" align="center">
                        <br />
                        <h2>GOLearn <font color="red"><strong>Modalitas</strong></font></h2>
                        <div className="sub-heading">
			                <p align="left">Dengan hormat,</p>
			                <p align='justify'>
			                Kami mengucapkan terima kasih kepada Bapak/Ibu atas kepercayaan untuk memilih Ganesha Operation sebagai mitra belajar. Keputusan itu sudah tepat karena kami telah menyediakan program belajar yang komprehensif untuk menjamin keberhasilan putera/i Bapak/Ibu.
			                </p>
                            <p align='justify'>
                            Sebagai langkah awal program bimbingan belajar kami telah melakukan tes modalitas (tes kecenderungan cara penyerapan materi pelajaran), apakah visual (kuat melalui penglihatan), auditorial (kuat melalui pendengaran), atau kinestetik (cenderung langsung mencoba). Menurut tes tersebut diperoleh hasil sebagai berikut :
                            </p>
                            <p align='justify'>
                            <strong>(Visual:  {infoData.nV}) - (Auditorial: {infoData.nA}) - (Kinestetik: {infoData.nK}) </strong>
                            </p>
                            <p align='justify'>
                            Hasil ini menunjukan bahwa putera/i Bapak/Ibu memiliki kecenderungan cara belajar <strong>{infoData.dominan}</strong>. Untuk mencapai hasil belajar yang optimum kami menberikan tip belajar sebagai berikut :
                            </p>
                            <p align='justify'>
                            <br/>
                            <strong>{detailData.judul1}</strong><br/>
                            <em>{detailData.isi1}</em>
                            </p>
                            <p align='justify'>
                            <br/>
                            <strong>{detailData.judul2}</strong><br/>
                            <em>{detailData.isi2}</em>
                            </p>
                            <p align='justify'>
                            <br/>
                            <strong>{detailData.judul3}</strong><br/>
                            <em>{detailData.isi3}</em>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            );
        }
        else
        {
            return (
            <div>
            <Menu />
            <div className="container" align="center">
                <br />
                <h2>GOLearn <font color="red"><strong>Modalitas</strong></font></h2>
                <div className="sub-heading">
                <h3 align='center'>Untuk sementara hasil Test Modalitas belum dapat kami upload.</h3>
			    <h3 align='center'>
			    Mohon maaf atas ketidaknyamanan ini.<br/><br/><br/><br/>
			    </h3>
                </div>
            </div>
            </div>
            );   
        }
    }
}

  export default Vak;