import Navbar from './components/Navbar/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />

        </Switch>
      </Router>


    </div>
  );
}

export default App;
