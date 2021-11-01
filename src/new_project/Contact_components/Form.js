import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';

function Form() {
  return (
     <div className="form_main_component p-5">
           <div className="container">
     <div className="card_section">
    <h2 className="section-title"><span>Contact </span> Information</h2>
    <div class="feature_head">
     <p>If you got any questions, please do not hesitate to send us a message. We reply within 24 hours !</p> 
							
						</div>         
      </div>
      <div className="row">
      <div className="col-md-6 col-sm-12">
      <div className="map_area">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6301497458!2d66.5949610598482!3d25.193389485801198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1635684025980!5m2!1sen!2s" style={{border: 0}} allowFullScreen loading="lazy" />
    </div>
      </div>
      <div className="col-md-6 col-sm-12">
      <div className="form_section px-5">
        <form mehtod="get">
        <div>
  <div className="mb-3">
    <input type="text" className="form-control shadow-none" id="exampleFormControlInput1" placeholder="Enter Name" />
  </div>
  <div className="mb-3">
    <input type="email" className="form-control shadow-none" id="exampleFormControlInput1" placeholder="Enter Email" />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control shadow-none" id="exampleFormControlInput1" placeholder="Subject" />
  </div>
  <div className="mb-3">
    <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" placeholder="Message" rows={3} defaultValue={""} />
  </div>
  <button type="submit" class="btn btn-primary mb-3">Submit</button>
</div>

        </form>
        
      </div>
      </div>
      </div>
      </div>
      </div>
  );
}

export default Form;
