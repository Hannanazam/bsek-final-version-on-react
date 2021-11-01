import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';
import { FaAngleRight } from "react-icons/fa";

function Title() {
  return (
     <div className="result_title_main">
        <div className="container-fluid background">
  <div className="row py-5 wow flipInY mx-auto">
    <div className="backgroundset hannan">
      <h1>Contact Us</h1>
      <div className="text-center mt-4 d-flex justify-content-center">
        <p>Home</p> <span>< FaAngleRight /></span> <p><span class="badge bg-primary">Contact Us</span></p>
      </div>
    </div>
  </div>
</div>
      </div>
  );
}

export default Title;
