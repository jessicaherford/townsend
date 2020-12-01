import React from "react";

function Bio() {
  return (
    <div className="bio">
      <div className="container">
        <div className="row  my-5">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <img src="./assets/college-of-redwoods.jpg"  alt="college of the redwoods" height="200px"></img>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <h1 className="font-weight-light">Education</h1>
            <p>College of the Redwoods 2004</p>
            <p>Capellagarden/ Sweden 2005</p>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">            
            <img src="./assets/woodworker_west.jpg" alt="woodworker west" height="200px"></img>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <h1 className="font-weight-light">Publications</h1>
            <p style={{ marginBottom: "1px" }}>Woodworker West 2004</p>
            <p style={{ marginBottom: "1px" }}>Robb Report 2007</p>
            <p>Woodworker West 2007</p>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <img src="./assets/craftsman_challenge.png" alt="craftsman challenge" width="300px" style={{'marginTop':'40px'}}></img>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <h1 className="font-weight-light">Honors</h1>
            <p>2006 Grand Prize/1st Place</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
