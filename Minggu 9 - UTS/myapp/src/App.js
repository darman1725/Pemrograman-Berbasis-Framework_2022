import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Policy from './Component/Policy';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';
import Start from './pages/Start';
import End from './pages/End';
import Game from './pages/Game';
import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0)
  let [option, setOption] = useState(0)
  let [score, setScore] = useState(0)
  let [page, setPage] = useState(0)
  return (
    <div>
      <List />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/policy" component={Policy} />
        <Route path='/kuis' exact>
          <Start />
        </Route>
        <Route path="/game" exact>
          <Game count={count} setCount={setCount} score={score} setScore={setScore} page={page} setPage={setPage} option={option} setOption={setOption} />
        </Route>
        <Route path="/end">
          <End count={count} setCount={setCount} score={score} setScore={setScore} page={page} setPage={setPage} option={option} setOption={setOption} />  
        </Route>
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  )
}
export default App;