// import logo from './logo.svg';
import './App.css';
import './index.css';

// Pages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import mainPage from './pages/mainPage';

function App() {
  return (
    <Router>
      <div>  
        <Switch>
          <Route path="/" exact component={mainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

