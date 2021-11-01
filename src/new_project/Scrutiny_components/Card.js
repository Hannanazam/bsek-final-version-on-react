import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';
import { FaUserAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

function Card() {
  return (
     <div className="scrutiny_card_main">
         <div className="card_section_main p-5">
             <div className="container">
         <div className="row">
         <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="card">
  <div className="card-body">
      <h5 className="card-title">IX Science Scrutiny 2019</h5>
    <p className="card-text text-muted">
        <span className="border_right">< FaUserAlt /> By: BSEK</span>
        <span>< FaListUl /> Admin</span>
    </p>
    <button type="button" class="btn btn-primary">View Result < FaAngleDoubleRight /></button>
  </div>
  </div>
  </div>

  <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="card">
  <div className="card-body">
      <h5 className="card-title">X Science Scrutiny 2019 (GIRLS)</h5>
    <p className="card-text text-muted">
        <span className="border_right">< FaUserAlt /> By: BSEK</span>
        <span>< FaListUl /> Admin</span>
    </p>
    <button type="button" class="btn btn-primary">View Result < FaAngleDoubleRight /></button>
  </div>
  </div>
  </div>


  </div>
</div>

         </div>
      </div>
  );
}

export default Card;
