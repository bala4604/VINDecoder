import React,{Component} from 'react'
import { Redirect } from 'react-router';
import BackCard from '../Components/CardComponent';
class RegisterHandler extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            redirect:false,
            info:{
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            },
            additional:{
                cnfpassword:''
            }
        }
    }
    register()
    {
    if(this.state.info.password===this.state.additional.cnfpassword)
    {
     fetch("http://localhost:9000/users/connect",{
      method:"post",
      headers: {
        'Content-Type': 'application/json'
    },
      body:JSON.stringify(this.state.info)
    })
    .then(res=>res.text())
    .then(res=>{
        if(JSON.parse(res).code===200)
        {
            this.setState({redirect:!this.state.redirect}) 
        }
        else
          alert(res)
    });
    }
    else
      alert("Password and Confirm password doesn't match")
    }
    getdata(event)
    {
        if(event.target.id==="username")
           this.setState({info:{...this.state.info,username:event.target.value}})
        if(event.target.id==="password")
           this.setState({info:{...this.state.info,password:event.target.value}})
        if(event.target.id==="firstname")
           this.setState({info:{...this.state.info,firstname:event.target.value}})
        if(event.target.id==="lastname")
           this.setState({info:{...this.state.info,lastname:event.target.value}})
        if(event.target.id==="cnfpassword")
           this.setState({additional:{cnfpassword:event.target.value}})
        if(event.target.id==="myform")
           this.register();
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log(nextState)
        return true;
    }
    render()
    {
        const redirect=this.state.redirect
        return(
            <div>
            {redirect?(
              <Redirect to="/login/"/>
            ):(
                <BackCard  getdata={(event)=>this.getdata(event)} pageType={'register'}/>
            )}
            </div>
            )
        
    }
} 
export default RegisterHandler