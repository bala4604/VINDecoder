import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom'
const Login=(props)=>{
  const style={
    marginLeft: '25%',
    marginRight:'25%',
    width: '50%'
  }
  
    return(
    <Form style={style}>
          <FormGroup>
            <Label for="username">UserName</Label>
            <Input type="text" name="username" id="username" onChange={props.getdata}/>
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="password" onChange={props.getdata}/>
          </FormGroup>
          <Link to="/register"><p style={{marginTop:'20px',float:'left'} } className="link-danger font-weight-bold">Sign Up</p></Link>
          <Button onClick={props.getdata} id="myform" color="primary" style={{marginTop:'20px',float:'right'}}>Sign In</Button>
    </Form>
    );
}
export default Login;