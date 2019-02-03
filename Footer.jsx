import React from "react";
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FooterPage = () => {
  return (
      <div>
    <footer className="footer">
    <div className="container">
      <span className="text-muted">controller of examination &#169; {new Date().getFullYear()}</span>
    </div>
  </footer>
  
    <footer className="footer">
    <div className="container">
      <span className="text-muted"></span>
    </div>
  </footer>
      </div>
  );
}

export default FooterPage;