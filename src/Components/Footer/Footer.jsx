import React from "react";
import {  MDBContainer, MDBFooter, MDBIcon} from "mdbreact";
import './Footer.css'

const FooterPage = () => {
  return (
    <MDBFooter color="black" fixed='bottom'>
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Proudly Created By dgWebCrew{" "} 
          <MDBIcon icon="tools" />
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;