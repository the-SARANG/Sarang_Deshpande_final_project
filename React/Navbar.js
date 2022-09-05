import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-warning" style={{borderBottom: '1px solid', borderTop: '1px solid', fontSize: "20px"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color: 'black', fontSize: "30px"}}><h1>Hotel SunShine</h1></a>
        <button className="navbar-toggler" type="button" style={{color: "black"}} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" style={{color: 'black'}} href="#">Home</a>
            <a className="nav-link active" href="http://localhost:4000/rooms" style={{color: 'black'}}>Rooms</a>
            <a className="nav-link active" href="http://localhost:4000/about" style={{color: 'black'}}>About</a>
            <a className="nav-link active" href="http://localhost:4000/contact" style={{color: 'black'}}>Contact</a>
            <a className="nav-link active" href="http://localhost:4000/category" style={{color: 'black'}}>Categories</a>
            <a className="nav-link active" href="http://localhost:4000/reservation" style={{color: 'black'}}>Reservation</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar