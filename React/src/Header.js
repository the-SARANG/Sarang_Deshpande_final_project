import React from 'react'

function Header() {
  const myStyle={
    backgroundImage: "url(https://wallpaperaccess.com/full/902478.jpg)",
    width: "auto",
    height: "700px",
    marginLeft: "5px",
    marginRight: "5px"
  };
    return (
    <>
    <div className="container0" style={myStyle}>
      <div className="container" >
        <div className="row site-hero-inner justify-content-center align-items-center">
          <div className="col-md-8 text-center" style={{alignItems: 'center'}}>
          <img src={require('../../images/logo.webp')} style={{marginTop: '100px',maxWidth:"150px", maxHeight:"100px"}}/>
            <h2 className="heading" style={{fontSize:"75px"}}>A Beautiful Place</h2>
            <a href="http://localhost:4000/reservation" className="btn btn-warning py-3 text-black px-5">Check Availability</a>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}
export default Header