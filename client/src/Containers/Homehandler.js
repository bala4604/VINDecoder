import React,{Component} from 'react'
import Home from '../Components/Home/Home'

import {vinhistorylist} from '../Redux/Actions/VINActions'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch=>({
  log:(username)=>{dispatch(vinhistorylist(username))}
})

class Homehandler extends Component
{
  
  
    constructor(props)
    {
        super(props);
        this.state =
        {
            vinno:'',
            
            details:
            {
              manufacturer:'',
              make:'',
              model:'',
              
            vinhistory:[
      
            ],
              year:''
            }
        }
        
        
        this.getVINHistory();
    }

    getdata(event)
    {
      if(event.target.id==="vinno")
         this.setState({vinno:event.target.value})
    }

    getVINHistory(){
        fetch("http://localhost:9000/users/fetchVINHistory",{
            method:"get",
            headers: {
              'Content-Type': 'application/json'
          }
          
          })
          .then(res=>res.text())
          .then(res=>{
            console.log(JSON.parse(res))
            // this.setState({vinhistory:res})
            let resdata=JSON.parse(res)
        
                this.setState({details:{...this.state.details,vinhistory:JSON.parse(res)}})
        
          
          });
          
    }
    getdetail()
    {

      let datenow=new Date().toLocaleString();
        var data = "format=json&data="+this.state.vinno;
        if(data!=''){
        fetch("http://localhost:9000/users/storeVINHistory",{
            method:"post",
            headers: {
              'Content-Type': 'application/json'
          },
            body:JSON.stringify({"vin_no":this.state.vinno})
          })
          .then(res=>{
            console.log(res)
            this.getVINHistory();
          });
        var url = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesBatch/";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
       xhr.onreadystatechange = ()=> {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
           var y=JSON.parse(xhr.responseText);
           if(y.Count>0){
            this.setState({details:{...this.state.details,make:y.Results[0].Make}})
            this.setState({details:{...this.state.details,manufacturer:y.Results[0].Manufacturer}})
            this.setState({details:{...this.state.details,model:y.Results[0].Model}})
            this.setState({details:{...this.state.details,year:y.Results[0].ModelYear}})
            this.props.log({vin_no:this.state.vinno,created_at:String(datenow)})
            }
            else{
              alert("Not found")
            }
       }};
       xhr.send(data);
      }
       else{
        alert("Please enter a valid VIN number")
       }
    }

    getdetail1(vinno)
    {
        var data = "format=json&data="+vinno;
       
        var url = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesBatch/";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
       xhr.onreadystatechange = ()=> {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
           var y=JSON.parse(xhr.responseText);
           if(y.Count>0){
           this.setState({details:{...this.state.details,make:y.Results[0].Make}})
           this.setState({details:{...this.state.details,manufacturer:y.Results[0].Manufacturer}})
           this.setState({details:{...this.state.details,model:y.Results[0].Model}})
           this.setState({details:{...this.state.details,year:y.Results[0].ModelYear}})
           }
           else{
             alert("Not found")
           }
       }};
       xhr.send(data);
    }
    render(){
        return(
            <Home  content={this.state.details} getdetail1={(data)=>this.getdetail1(data) } getdata={(event)=>this.getdata(event)} data={this.state.data} getdetail={()=>this.getdetail()}/>
            );
    }
}
export default connect(null,mapDispatchToProps)(Homehandler)