import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';
import { FaUserAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Card() {
  return (
     <div className="result_card_main">
         <div className="card_section_main p-5">
             <div className="container">
         <div className="row">
         <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="card">
  <div className="card-body">
  <div className="card-body-child">
  <h5 className="card-title">X 2021 Result (Science)</h5>
    <p className="card-text">
    Check Your Result Here !!
    </p>
  </div>
    <div className="input_area p-5">
    <label className="mb-3">Enter Your Roll Number:</label>
  <input type="number" />
    </div>
    <div className="button_area">
    <button type="button" class="btn btn-primary">View Result < FaAngleDoubleRight /></button>
  </div>
  </div>
  </div>
  </div>

  <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="card">
  <div className="card-body p-3">
      <h5 className="card-title">Student Information</h5>
      <hr />
    <p className="card-text">
        <span className="border_right_result">< FaAngleRight /> Roll No</span>
        <span className="float-end">377733</span>
    </p>
      <hr />
    <p className="card-text">
        <span className="border_right_result">< FaAngleRight /> Name</span>
        <span className="float-end">MUHAMMAD FAIZAN</span>
    </p>
      <hr />
    <p className="card-text">
        <span className="border_right_result">< FaAngleRight /> Father Name</span>
        <span className="float-end">MUHAMMAD USMAN HASHMI</span>
    </p>
      <hr />
    <p className="card-text">
        <span className="border_right_result">< FaAngleRight /> School Code</span>
        <span className="float-end">----</span>
    </p>
      <hr />
    <p className="card-text">
        <span className="border_right_result">< FaAngleRight /> Total Marks</span>
        <span className="float-end">441</span>
    </p>
      <hr />
    <p className="card-text">
        <span className="border_right_result">< FaAngleRight /> Grade</span>
        <span className="float-end">C</span>
    </p>
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
