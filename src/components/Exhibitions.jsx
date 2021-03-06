import React from "react";

function Exhibitions() {
  return (
    <div className="exhibitions">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <img src="./assets/globe-fine-art.jpg" alt="Salida" height="260px"></img>
          </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <h1 className="font-weight-light">Current Galleries</h1>
          <p>Globe Fine Art</p>
          <p>727 Canyon Road</p>
          <p>Santa Fe, NM 87501</p>
          <p>Tel: 505-989-3888</p>
          <a target="#" href="https://www.globefineart.com/">globefineart.com</a>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <img src="./assets/sofa.jpg"  alt="college of the redwoods" height="250px"></img>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
            <h1 className="font-weight-light">Exhibition History</h1>
            <p>SOFA Chicago, 2004 - 2012</p>
            <p>SOFA New York, 2005 - 2012</p>
            <p>Palm Beach, 2005 - 2012</p>
            <p>SOFA Santa Fe, 2009 - 2013</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exhibitions;
