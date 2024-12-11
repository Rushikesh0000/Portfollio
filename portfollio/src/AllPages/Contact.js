import React from "react";

const Contact = () => {
  const contactDetails = {
    name: "Rushikesh Nivrutti Patil",
    email: "rushikeshp9695@gmail.com",
    phone: "+91 7057749695",
    address: "Pune, Maharashtra, India",
  };

  return (
    <div className="container mb-5">
      <center><h2 className="btn btn-danger mt-4">Contact Me</h2></center>
      <div className="row justify-content-center ">
     
        <div className="col-lg-4 col-md-6 col-sm-8 mb-5">
          <div className="p-4 border rounded shadow">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={contactDetails.name}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="email" className="form-control" id="email" value={contactDetails.email} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input type="text" className="form-control" id="phone" value={contactDetails.phone}  readOnly />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea className="form-control" id="address" rows="3" value={contactDetails.address} readOnly></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
