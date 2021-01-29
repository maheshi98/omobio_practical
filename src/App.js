import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Container , Row , Col} from 'react-bootstrap';
import Login from './Components/Login'
import Loginlist from './Components/Loginlist'

function App() {
  return (
    <div >
      <Router>
       
           <Container>
             <Row>
               <Switch>
               <Route path = "/" exact component = {Login}/>
               <Route path = "/loginlist" exact component = {Loginlist}/>
               </Switch>
              
            </Row>
             </Container>
         </Router>  
      
      
    </div>
  );
}

export default App;
