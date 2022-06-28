import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Body from './components/body';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CountryDetails from './components/countrydetails';


function App() {
  const[Theme,changeTheme]=React.useState(true)

  const handleClick=()=>changeTheme(!Theme)

  return (
    <Router>
    <div  >
<Navbar changeTheme={handleClick}/>
<Switch>

<Route exact path='/'>
<Body/>
</Route>

<Route exact path='/countries/:countryName'>
<CountryDetails/>
</Route>
  
</Switch>


    </div>
    </Router>
  );
}

export default App;
