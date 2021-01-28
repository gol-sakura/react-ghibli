import React from 'react';
import {

  MDBMask,
  MDBRow,
  MDBCol,
  MDBAnimation ,

  MDBView,
  MDBContainer,

} from 'mdbreact';

import './LandingPage.css';

class CallToActionIntro extends React.Component {
  state = {
   
  };

 
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
   
    return (
      <div id='caltoaction'>       
        <MDBView src='https://images.hdqwalls.com/wallpapers/spirited-away-vp.jpg'>
          <MDBMask className='rgba-purple-slight ' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '14rem' }}
            className='d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 text-center'>
              <MDBAnimation type="rotateIn"><h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                "Sometimes You Have To Fight For The Things That Are Worth Fighting For.” - The Secret World Of Arrietty (2010)
                </h1> </MDBAnimation>
                <MDBAnimation type="zoomInUp" duration="3s" ><strong><h3 className='pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5'>
                "Once You've Met Someone, You Never Really Forget Them." - Spirited Away (2001)
               </h3>  </strong>  </MDBAnimation>
                        
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default CallToActionIntro;