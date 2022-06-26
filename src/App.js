
import './App.css';
import Navbar from './components/navbar';
import Body from './components/body';
import Footer from './components/footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CountryDetails from './components/countrydetails';

function App() {
  return (
    <Router>
    <div>
<Navbar/>
<Switch>

<Route exact path='/'>
<Body/>
</Route>

<Route exact path='/countries/:countryName'>
<CountryDetails/>
</Route>
  
</Switch>

<Footer/>
    </div>
    </Router>
  );
}

export default App;
