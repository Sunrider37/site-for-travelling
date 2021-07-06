
import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Services from './pages/Services';
import Products from './pages/Products';
import Signup from './pages/Signup';

function App() {
  return (

   <>
   <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/services' exact component={Services}></Route>
        <Route path='/products' exact component={Products}></Route>
        <Route path='/sign-up' exact component={Signup}></Route>
      </Switch>
   </Router>
    </>
  );
}

export default App;
