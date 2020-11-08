import React from "react";

function Bio() {
  return (
    <div className="bio">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-12">
            <h1 className="font-weight-light">Education</h1>
            <p>College of the Redwoods 2004 Capellagarden/ Sweden 2005</p>
          </div>
          <div className="col-12">
            <h1 className="font-weight-light">Publications</h1>
            <p style={{ marginBottom: "1px" }}>Woodworker West 2004</p>
            <p style={{ marginBottom: "1px" }}>Robb Report 2007</p>
            <p>Woodworker West 2007</p>
          </div>
          <div className="col-12">
            <h1 className="font-weight-light">Honors</h1>
            <p>Craftsman Challenge 2006 Grand Prize/1st Place</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
