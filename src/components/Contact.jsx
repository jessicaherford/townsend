import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <img src="./assets/salida.jpg"></img>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <h1 className="font-weight-light">Contact</h1>
            <p>Kent Townsend Fine Furniture is located in Salida, CO. </p>
            <p>We are 3 hours from Denver.</p>
            <p>Mail: 8172 Lazy Daze Road Salida, CO 81201</p>
            <p>Email:kent@kenttownsend.com</p>
            <a href="tel:719-530-1088">Tel: (719) 530-1088</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
