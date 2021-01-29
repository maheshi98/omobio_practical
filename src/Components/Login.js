import React, { Component } from 'react'
import loginService from '../Service/loginService'


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            email :'' ,
            password : '',
            redirect : false 
            
        }

        this.login= this.login.bind(this); 
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
      console.log(this.state);
    }

    componentDidMount() {
        
    }

    login(event){
     
        event.preventDefault();
  
        if(this.state.email && this.state.password){
        loginService.getUserById(this.state.email).then(res => {
          this.state.isFound = true;
          let user = res.data;
          console.log('User => ' + JSON.stringify(user));
          if(user.userData){
            sessionStorage.setItem("userData" , user)
            this.props.history.push('/loginlist');
          }else{
          console.log("login error");
          }
        
        
          if(user == null){
            this.state.isFound = false;
            alert("Invalid Credentials!!");
            return;
          }
          
          if(this.state.email == user.email && this.state.password == user.password){
            this.state.isFound = true;
            window.sessionStorage.setItem("UserId", user.email);
            this.state.isValid = true;
            this.state.currentUser = user;
          } else{
    
            this.state.isValid =  false;
          }
  
          
          if(this.state.isValid == false && this.state.isFound == true) {
            this.state.isFound = true;
            alert("Password does not match with the given email!");
          }else{
             this.props.history.push("/loginlist");
          }
          
        });
      }
      }
    render() {
     
        return (
            <div>
                <center> <h4>Login Page</h4></center>
               
        <div className="container">
          <div className="form">
            <div className="input-field">
              <label htmlFor="email">User Name</label>
              <input type="email" placeholder="example@example.com" id="email" name="email" onChange={this.onChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="********" id="password" name="password" onChange={this.onChange} />
            </div>
            <div className="input-field">
              <label htmlFor="remember">
                <input type="checkbox" name id="remember" />Remember me
              </label>
            </div>
            <div className="action">
              <a href="#">forgot your password?</a>
              <button id="btn" className="btn" onClick={this.login}>Sign in</button>
            </div>
          </div>
        </div>
    
      </div>
        )
    }
}
