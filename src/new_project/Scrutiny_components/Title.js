import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';
import { FaAngleRight } from "react-icons/fa";

function Title() {
  return (
     <div className="scrutiny_title_main">
        <div className="container-fluid background">
  <div className="row py-5 wow flipInY mx-auto" style={{visibility: 'visible', animationName: 'flipInY'}}>
    <div className="backgroundset">
      <h1>Scrutiny Result</h1>
      <div className="text-center mt-4 d-flex justify-content-center">
        <p>Home</p> <span>< FaAngleRight /></span> <p><span class="badge bg-primary">Scrutiny Result</span></p>
      </div>
    </div>
  </div>
</div>
      </div>
  );
}

export default Title;
