import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Landing/Home'
import About from './components/Landing/About'
import News from './components/Landing/News'
import Navbar from './components/Landing/CustomNavbar'
import HackerSignup from './components/Landing/HackerSignup'
import OrganizationSignup from './components/Landing/OrganizationSignup'
import HackerMain from './components/Hacker/HackerMain'
import HackerBio from './components/Hacker/HackerBio'

import './App.css';
function Navcomponent(props)
{
return (
  <div>
  <Navbar />
   <props.name/>
 </div>
)

}


                { /* components */ }
class App extends Component {
  render() {
    
    return (
   
       
     <Router>
    

       <Route exact path='/' component={() => <Navcomponent name={Home} />}></Route> 
       <Route path='/about'component={() => <Navcomponent name={About} />}></Route>  
       <Route path='/news' component={() => <Navcomponent name={News} />}></Route>  
       <Route path='/signup-hacker' component={() => <Navcomponent name={HackerSignup} />}></Route> 
       <Route path='/signup-organization' component={() => <Navcomponent name={OrganizationSignup} />}></Route> 
       <Route path='/hacker-challenges'   component={() => <Navcomponent name={HackerMain} />}></Route>
       <Route exact path='/hacker-bio' component={HackerBio} />
       
       
      </Router>
        

    );
  }
}

                { /* export the component */ }
export default App;
