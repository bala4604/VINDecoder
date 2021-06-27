import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom'
import './Register.css'
const Register=(props)=>{
  const style={
    marginLeft: '25%',
  
    width: '50%'
  }
    return(
    <Form style={style}>
      <Row>
      <Col lg={6}>
          <FormGroup>
            <Label for="firstname">FirstName</Label>
            <Input type="text" name="firstname" id="firstname" onChange={props.getdata}/>
          </FormGroup>
        </Col>
        <Col lg={6}>
          <FormGroup>
            <Label for="lastname">LastName</Label>
            <Input type="text" name="lastname" id="lastname" onChange={props.getdata}/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
            <Label for="username">UserName</Label>
            <Input type="text" name="username" id="username" onChange={props.getdata}/>
      </FormGroup>
      <Row>        
        <Col md={6}> 
        <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="password" onChange={props.getdata}/>
        </FormGroup>
        </Col>
        <Col md={6}> 
        <FormGroup>
            <Label for="CnfPassword">Confirm Password</Label>
            <Input type="password" name="cnfpassword" id="cnfpassword" onChange={props.getdata}/>
        </FormGroup>
        </Col>
      </Row>
      <Link to="/login"><p style={{marginTop:'20px',float:'left'} } className="link-danger font-weight-bold">Sign in</p></Link>
      <Button id="myform" onClick={props.getdata} style={{marginTop:'20px',float:'right'} } color="primary">Sign Up</Button>
    </Form>
    );
}
export default Register;