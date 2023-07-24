import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BurgerBuilder from './BurgerBuilder';
import Login from './Login';
import Burger from './Burger';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        
        <Switch>
          <Route path="/BuildBurger" component={BurgerBuilder} />
        
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
