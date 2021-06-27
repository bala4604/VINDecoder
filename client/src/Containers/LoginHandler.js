import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {userlog} from '../Redux/Actions/userlog'
import BackCard from '../Components/CardComponent';

const mapDispatchToProps = dispatch=>({
    log:(username)=>{dispatch(userlog(username))}
})

class LoginHandler extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            redirect:false,
            info:{
            username:'',
            password:''
            }
        }
    }
    
    login()
    {    
    fetch("http://localhost:9000/users/login",{
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
           this.props.log(JSON.parse(res).first_name+ " "+JSON.parse(res).last_name)
           this.setState({redirect:!this.state.redirect})
         }
         else
           alert("Failed")
    });

    }
    getdata(event)
    {
        if(event.target.id==="username")
           this.setState({info:{...this.state.info,username:event.target.value}})
        if(event.target.id==="password")
           this.setState({info:{...this.state.info,password:event.target.value}})
        if(event.target.id==="myform")
           this.login()
    }
    render()
    {
        const redirect=this.state.redirect
        return(
            <div>
                {
                    redirect?(
                      <Redirect to="/Home/"></Redirect>
                    ):(
                        <BackCard  getdata={(event)=>this.getdata(event)} pageType={'login'}/>
                    )
                    
                }
            </div>
        )
    }
      
} 
export default connect(null,mapDispatchToProps)(LoginHandler)