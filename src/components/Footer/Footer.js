import React, {Component} from 'react';
import picFooter from '../../assets/logo-footer.png';

class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="bgcolor-2">
   <div className="container">
     <div className="footer-logo">
        <img src={picFooter} alt="" width="200px" />
     </div>
   </div>
 </footer>
   </div>
    );
  }
}

export default Footer;