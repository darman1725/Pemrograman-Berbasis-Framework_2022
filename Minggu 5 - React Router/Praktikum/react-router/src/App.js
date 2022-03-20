import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// Situs ini memiliki 3 halaman, yang semuanya dirender secara dinamis di browser.
// Meskipun halaman tidak pernah di-refresh, perhatikan bagaimana React Router 
// membuat URL selalu terbarui saat Anda menavigasi situs.
// Ini menjaga riwayat browser, memastikan hal-hal seperti tombol kembali
// dan bookmark berfungsi dengan baik.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// Anda dapat menganggap komponen ini sebagai halaman "halaman(konten)" di situs Anda.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}