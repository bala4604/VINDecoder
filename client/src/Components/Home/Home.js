import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import {Input,Button,Form,FormGroup,Row,Col,Table} from 'reactstrap'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
const Home=(props)=>
{
  const style=
  {
    width:'300px',
    marginTop:'50px'
   
  }
  const [collapsed, setCollapsed] = useState(true);
  const username=useSelector(state=>state.login.username)
  
  let vinhistory1=useSelector(state=>state.vinhistory.arr)
  const toggleNavbar = () => setCollapsed(!collapsed);
  let vinhistory2=vinhistory1.slice(-10);
var vinhistory3= vinhistory2 .sort((function (a, b) { 
                   return new Date(b.payload.created_at) - new Date(a.payload.created_at) 
                 }));
let vinhistory = vinhistory3.filter(function (a) {
                  return !this[a.payload.created_at] && (this[a.payload.created_at] = true);
              }, Object.create(null));
          
  console.log(vinhistory);
  return(
        <div>
        
          <nav className="navbar navbar-dark bg-primary">
         <a style={{"marginLeft": "20px"}} className="navbar-brand" href="#">VINDECODER</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faUser} />{"  "+username}
  </button>

</nav>

<nav className="">
  <div className="nav nav-tabs nav-justified" id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">VIN SEARCH</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">VIN History</button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <Form>
            <div className="row" style={{ 'textAlign':'center'}}>
              <div className="col-12">
                <FormGroup style={{"display": "grid","placeItems": "center"}}>
                  <Input type="text" style={style} placeholder="Vechicle NO" id="vinno" onChange={props.getdata} required></Input>
                </FormGroup>
              </div>
              <div className="col-12">
              
                <FormGroup>
                  <Button color="primary" style={style} onClick={props.getdetail}>Search</Button>
                </FormGroup>
              
            </div>
            </div>
          </Form>
          <div className="container">
          <table style={{"marginTop":"20px"}} className="table">
            <thead className="table-dark">
              <tr>
                <th>Manufacturer</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.content.manufacturer}</td>
                <td>{props.content.make}</td>
                <td>{props.content.model}</td>
                <td>{props.content.year}</td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    <div class="container">
      <div class="card" style={{"marginTop":"20px"}}>
     
      <div class="row card-body">
      <h5 class="card-title">VIN DETAILS</h5>
        <div class="col-3">
        <Input type="text" style={style} value={props.content.manufacturer} placeholder="Manufacturer" disabled={true}></Input>
        </div>
        <div class="col-3">
        <Input type="text" style={style} value={props.content.make} placeholder="Make" disabled={true}></Input>
        </div>
        <div class="col-3">
        <Input type="text" style={style}  value={props.content.model} placeholder="Model" disabled={true}></Input>
        </div>
        <div class="col-3">
        <Input type="text" style={style}  value={props.content.year} placeholder="Year" disabled={true}></Input>
        </div>
        </div>
      </div>
    <table class="table table-striped" style={{"marginTop":"20px"}}>
  <thead>
    <tr>
    <th scope="row">S.no</th>
      <th>VIN Number</th>
      <th>Visited time</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

   
     {/* { props.content.vinhistory.map((item, index) =>
      (<tr key={index}>
        <td  >{index+1}</td>
        <td >{item.vin_no}</td>
      <td >{item.created_at}</td>
      <td>
<button type="button" class="btn btn-info" onClick={() =>props.getdetail1(item.vin_no)} >View</button></td>
      </tr>)) } */}
     
      { vinhistory.map((item, index) =>
      (<tr key={index}>
        <td  >{index+1}</td>
        <td >{item.payload.vin_no}</td>
      <td >{item.payload.created_at}</td>
      <td>
<button type="button" class="btn btn-info" onClick={() =>props.getdetail1(item.payload.vin_no)} >View</button></td>
      </tr>)) }
  </tbody>
</table>
    </div>
  </div>
</div>
        </div>
        );
}
export default Home;