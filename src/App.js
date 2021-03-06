import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

// pages 
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Article from './Pages/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <nav>
            <h1>My Articles</h1>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

        <Switch>
          <Route exact path='/'> 
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
