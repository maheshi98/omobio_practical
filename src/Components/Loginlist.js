import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import loginService from '../Service/loginService'


export default class Loginlist extends Component {
    constructor(props) {
        super(props)

        this.state = {
               user :[],
               userName: '',
               name : '',
               id : '',
               email : ''

        }

    }

    componentDidMount() {
        
        loginService.getuserList(this.state.userName).then(res => {
        this.state.isFound = true;
        let user = res.data;
        
        this.setState({userName: user.userName, name : user.name, id : user.id, email : user.email});
        this.state.customer = user;
        console.log('User => ' + JSON.stringify(this.state.user));
    });

    }

  

  

    render() {
        return (
            <div >
                 <center><h4>User Details</h4></center>
                
                 <center>
         <Card className = {"border border-light bg-light text-black"} style={{ alignContent:'center', width:'35cm'}}>
         <div className="card col-md-6 offset-md-3 offset-md-3" variant ="dark">
             <div className = "card-body">
         <form  method="POST"  width = "30%">
                <center>
                
                <br/>
                   
                    
                   
                <font size="5">UserName:  {this.state.userName}</font></center>
                <br/>
                <table>
                
                <font size="4">Name : {this.state.name} </font>
                
                      <br/>  
        <br/>
       
                <font size="4">ID : {this.state.id}</font>
                      <br/>
                <font size="4">email : {this.state.email} </font>
                      
                 
                      <br/>
                    </table>
                    <br/><br/>
                    <center>


                    <Button type="submit" variant="primary" onClick = { () => this.logout(this.state.email)}><font size="4">Log Out</font></Button>

                    </center>
        </form>
        </div>
        </div>
        </Card>
        </center>
            </div>
        )
    }
}
