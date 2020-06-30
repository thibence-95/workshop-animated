import React from 'react';
import {useSpring, animated} from 'react-spring';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './components/About';
import Landing from './components/Landing';



function App() {
  const fadeIn = useSpring({config: { duration: 1000 }, opacity: 1, from: {opacity: 0}})

  return (
      <animated.div style={fadeIn}>
    <BrowserRouter>
      <Switch>
        <Route path="/about">
        <About></About>
        </Route>
        <Route path="/" exact>
        <Landing></Landing>
        </Route>
      </Switch>
    </BrowserRouter>
      </animated.div>
  );
}

export default App;
