import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';

function Table() {
  return (
<div className="table_section_main">
<div className="container">
<div className="p-5">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">NO</th>
      <th scope="col">DISCRIPTION</th>
      <th scope="col">LINK</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>NBP Branch's for Fee Collection</td>
      <td><a href="#0">Click here to Download</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Duplicate Admit Card Form</td>
      <td><a href="#0">Click here to Download</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Online Enrollment fee schedule 2020</td>
      <td><a href="#0">Click here to Download</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Original Certificate Form</td>
      <td><a href="#0">Click here to Download</a></td>
    </tr>
  </tbody>
</table>

</div>
</div>
</div>
  );
}

export default Table;
