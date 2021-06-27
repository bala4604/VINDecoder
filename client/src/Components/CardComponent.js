import {Card, CardBody,CardTitle} from 'reactstrap';
import Register from './Register/Register'
import Login from './Login/Login'
const BackCard=(props)=>{
    const style={
        backgroundColor:'#EEEE',
        opacity:'.75',
        width:'100%',
        marginLeft:'120px',
        height:'auto'
      }
      const divstyle={
        height:'50vh',
        marginLeft:'40vh',
        marginTop:'20vh',
        width:'100vh'
      }
      let Content =null;
      if(props.pageType==='login')
      {
        Content=(    
          <Card style={style} >
          <CardBody>
          <CardTitle tag="h5">Welcome to our portal</CardTitle>
           <Login getdata={props.getdata}/>
          </CardBody>
         </Card>
        
        );
      }
      if(props.pageType==='register')
      {
        Content=(   
          <Card style={style} >
          <CardBody>
          <CardTitle tag="h5">Register the account</CardTitle>
          <Register getdata={props.getdata}/>
          </CardBody>
         </Card>
 
        );
      }
    return (
        <div style={divstyle}>
          {Content}
        </div>
        );
}
export default BackCard