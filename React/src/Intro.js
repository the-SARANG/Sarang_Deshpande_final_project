import React from 'react'

function Intro() {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
            <img src={require('../../images/pillow.webp')} width="560px" height="315px"/>
          </div>
          <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
            <h2 className="heading" style={{fontSize: "50px"}}>Welcome!!!</h2>
            <p className="mb-4">Here we are to give you a lifetime Luxury facility that is intended primarily for vacationers and is usually located near special attractions, such as beaches and seashores, scenic or historic areas, ski parks, or spas</p>
          </div>
        </div>
      </div>
    <hr/>
      <div className="section" id="rooms">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading" data-aos="fade-up" style={{fontSize: "50px"}}>Rooms</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <a href="/rooms" className="room">
              <figure className="img-wrap">
                <img src={require('../../images/img_1.jpg')} alt="Free website template" className="img-fluid mb-3"/>
              </figure>
              <div className="p-3 text-center room-info" style={{color: "black"}}>
                <h2>Single Room</h2>
                <h4>Rs. 15000</h4>
                <p>These cozy rooms located in the historic Palace Wing are the gateway to a memorable experience. Perfect for meditation, these windowless rooms offer you complete tranquillity. Designed for our jet-setting business travellers who require silence. </p>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <a href="/rooms" className="room">
              <figure className="img-wrap">
                <img src={require('../../images/img_2.jpg')} alt="Free website template" className="img-fluid mb-3"/>
              </figure>
              <div className="p-3 text-center room-info" style={{color: "black"}}>
                <h2>Family Room</h2>
                <h4>Rs. 25000</h4>
                <p>These rooms are located in the Palace Wing on the 2nd, 3rd and 4th floors. They exude an aura of the old-world charm and elegance. These rooms are adorned with delicate Rajput bay-windows, offering spectacular views of the poolside or the bustling Mumbai city. Includes butler service and complimentary WiFi for four devices.</p>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <a href="/rooms" className="room">
              <figure className="img-wrap">
                <img src={require('../../images/luxary.webp')} alt="Free website template" className="img-fluid mb-3"/>
              </figure>
              <div className="p-3 text-center room-info" style={{color: "black"}}>
                <h2>Luxary Room</h2>
                <h4>Rs. 50000</h4>
                <p>These rooms have an old world charm with the delicate Rajput bay-windows that offer spectacular views of the Arabian Sea or the Gateway of India. Includes butler service and WiFi for four devices</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    </div>
  )
}

export default Intro