import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Button, Form, FormGroup, Label, Alert, Tooltip  } from 'reactstrap';
import './Signup.css';
import '../../styles/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert'; 
// import ReactLoading from 'react-loading';

class RegisForm extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     siapa: 'SISWA',
     nis: '',
     email: '',
     password: '',
     tgllahir:'',
     tooltipOpen: false,
     infoAPI: '',
     visible: false,
     pesan: '',
     loading: 'blank'
    };

    this.toggle = this.toggle.bind(this);
    this.regisKlik = this.regisKlik.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  toggle(){
    this.setState ({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
 
  onDismiss() {
    this.setState({pesan: ''});
    this.setState({ btnMati: ''});
    this.setState({ visible: false });
  }

  regisKlik() {
    // this.setState({loading: 'bars'});
    if (!this.showFormErrors())
    {

      console.log('invalid');
    }
    else
    {
      PostData('regis',this.state).then((result) => {      
          if (result.status==='error')
          {
            this.pesan('NIS/NIK Tidak Terdaftar Di Sistem Kami');
            console.log('error');
          }
          else if (result.status==='nis')
          {
            this.pesan('NIS/NIK Sudah Ada Yang Menggunakan');
          }
          else if (result.status==='email')
          {
            this.pesan('Alamat Email Sudah Ada Yang Menggunakan');
          }
          else if (result.status==='ok')
          {
            this.pesan('Data Registrasi Sukses Tersimpan');
          }
        });
        // this.setState({loading: 'blank'});
    }
  }

  pesan(isiPesan) {
    confirmAlert({
      title: '',                        
      message: isiPesan,               
      childrenElement: () => '',                              
      cancelLabel: 'OKE',                               
      Cancel: () => '',      
    })
  }

  handleChange(e) {
      e.target.classList.add('active');
      this.setState({[e.target.name]:e.target.value});

      this.showInputError(e.target.name);
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;
    
    inputs.forEach(input => {
      input.classList.add('active');
      
      const isInputValid = this.showInputError(input.name);
      
      if (!isInputValid) {
        isFormValid = false;
      }
    });
    
    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf('password') !== -1;
    const isPasswordConfirm = refName === 'passwordConfirm';
    
    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Password tidak sesuai');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }
        
    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} wajib diisi !!!`; 
      } else if (validity.typeMismatch) {
        error.textContent = `${label} Alamat email salah`; 
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} Password minimal 4 digit`; 
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Password tidak sesuai';
      }
      return false;
    }
    
    error.textContent = '';
    return true;
  }

  render() {
    if(sessionStorage.getItem('userData')){
      return (<Redirect to={'/home'}/>)
    }
    
    return (
    <Form>
    <div className="col-md-6 col-md-offset-3">
    <FormGroup>
        <Label id="siapaLabel"><strong>Pilih Salah Satu</strong></Label>
        <select className="form-control"
          type="text"
          name="siapa"
          ref="siapa"
          value={ this.state.siapa } 
          onChange={ this.handleChange }
          required >
                <option value="SISWA">Sebagai Siswa/I</option>
                <option value="ORTU">Sebagai Orangtua</option>
                <option value="PENGAJAR">Sebagai Pengajar</option>
            </select>
        <div className="error" id="siapaError" />
      </FormGroup>

      <FormGroup>
        <Label id="nisLabel"><strong>NIS/NIK</strong></Label>
        <input className="form-control"
          type="text"
          name="nis"
          id="nis"
          ref="nis"
          value={ this.state.nis } 
          onChange={ this.handleChange }
          required />
        <div className="error" id="nisError" />
      </FormGroup>

      <FormGroup>
        <Label id="tgllahirLabel"><strong>Tanggal Lahir</strong></Label>
        <input className="form-control"
          type="text"
          name="tgllahir"
          id="tgllahir"
          ref="tgllahir"
          value={ this.state.tgllahir } 
          onChange={ this.handleChange }
          required />
          <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="tgllahir" toggle={this.toggle}>
            Format Tanggal Lahir <br />(yyyy-mm-dd)
          </Tooltip>
        <div className="error" id="tgllahirError" />
      </FormGroup>

      <FormGroup>
        <Label id="emailLabel"><strong>Email</strong></Label>
        <input className="form-control"
          type="email"
          name="email"
          ref="email"
          value={ this.state.email } 
          onChange={ this.handleChange }
          required />
        <div className="error" id="emailError" />
      </FormGroup>

      <FormGroup>
        <Label id="passwordLabel"><strong>Password</strong></Label>
        <input className="form-control"
          type="password" 
          name="password"
          ref="password"
          value={ this.state.password } 
          onChange={ this.handleChange }
          pattern=".{5,}"
          required />
        <div className="error" id="passwordError" />
      </FormGroup>

      <FormGroup>
        <Label id="passwordConfirmLabel"><strong>Confirm Password</strong></Label>
        <input className="form-control"
          type="password" 
          name="passwordConfirm"
          ref="passwordConfirm"
          value={ this.state.passwordConfirm } 
          onChange={ this.handleChange }
          required />
        <div className="error" id="passwordConfirmError" />
      </FormGroup>

      <Button color="primary" onClick={ this.regisKlik }>Registrasi</Button>
      <div className="checkbox">
        <label>
        <em>Masukan NIS (No Induk Siswa) sesuai yang tertera di Kartu GO Card <br/>*contoh (1234 18 1234)</em><br/>
        </label>
      </div>
      </div>
      <Alert color={this.state.jenisPesan} isOpen={this.state.visible} toggle={ this.onDismiss } id="pesanSalah">
        <strong>{this.state.pesan}</strong><br/>
        <em>Tutup Pesan Ini</em>
      </Alert>
      </Form>
    );
  }
}

class Signup extends React.Component {
  render() {
    return (
     <div>
       <Header />
      <div className="container" align="center">
          <br />
          <h2 align="center">Registrasi <font color="red">GOLearn</font></h2>
          <p align="center">Untuk dapat menggunakan layanan GOlearn ini, Orangtua maupun Siswa/i Ganesha Operation harus melakukan registrasi terlebih dahulu.Dan diharapkan seluruh Jajaran Orangtua dan Siswa/I dapat memperoleh informasi dengan mudah melalui fasilitas yang disediakan ini.</p>
          <br />
        <RegisForm />
        {/* <ReactLoading type="{this.state.loading}" color="red" /> */}
      </div>
      </div>
    );
  }
}

export default Signup;