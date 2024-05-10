import React, { useEffect } from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import "../css/Contact";

const Contact = () => {
    return (
      <div className="container col-xl-6">
        <form action="" method="" role="form" className="">
          <div className="row col-xl-12">
            <div className="col-xl-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
            </div>
            <div className="col-xl-6 form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
          </div>
          
          <div className="text-center"><button type="button" className="btn btn-dark">Send Message</button></div>
        </form>
      </div>
    );
};

export default Contact;