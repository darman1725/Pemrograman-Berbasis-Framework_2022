import logo from './logo.svg';
import './bootstrap.min.css';
import './style.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  
  return (
    <div>
      <All />
    </div>
  );
}

function All() {
  const script = document.createElement("script");
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
  script.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js";
  script.src = "https://github.com/twbs/bootstrap/blob/main/dist/js/bootstrap.min.js.map";
  script.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">

          <a class="navbar-brand" href="index.html">
            <img src="https://img.icons8.com/bubbles/2x/react.png" alt="Avatar" className="photo"/>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/">Home</Link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><Link to="/private">Login</Link></a>
                  </li>
              </ul>
          </div>
      </nav>
        <Switch>
          <Route exact path="/">
            <AuthButton />
            <Home />
          </Route>
          <Route path="/login">
            <AuthButton />
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <AuthButton />
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  return(
    <Router>
    <div>

      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link"><Link to="/view1">{'Laptop'}</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><Link to="/view2">{'Mouse'}</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><Link to="/View3">{'Keyboard'}</Link></a>
                </li>
            </ul>
        </div>
      </nav>
      <Switch>
      <Route component={View1} path="/view1"></Route>
      <Route component={View2} path="/view2"></Route>
      <Route component={View3} path="/view3"></Route>
      </Switch>
    </div>
    </Router>
  );
}

const View1 = () => {
  return(
    <div>
      <hr/>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://rog.asus.com/media/1464624756388.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Asus ROG</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://www.jakartanotebook.com/images/products/17/3/1547/2/keyboard-notebook-acer-ferrari-1000-and-travelmate-6290-series-black-2.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Acer Ferrari 1100</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
};

const View2 = () => {
  return(
    <div>
      <hr/>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/cKUHdJtQqc.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Razer - Lancehead Wireless Laser Gaming Mouse - Black</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/q05Sp5UNSI.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Logitech - G903 Wireless Gaming Mouse - Black</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

const View3 = () => {
  return(
    <div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="thumbnail">
          <a><img src="https://i2.wp.com/hanamera.com/wp-content/uploads/2016/04/keyboard-gaming-termahal-2-1024x576.jpg?resize=618%2C348" alt="Avatar" className="barang"/></a>
          <div class="caption">
                    <h3>Mionix Zibal 60</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris</p>
                    <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
          <a><img src="https://i0.wp.com/hanamera.com/wp-content/uploads/2016/04/keyboard-gaming-termahal-7.jpg?resize=540%2C298" alt="Avatar" className="barang"/></a>
          <div class="caption">
                    <h3>Optimus Maximus</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris</p>
                    <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


function Home() {
  const script = document.createElement("script");
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
  script.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js";
  script.src = "https://github.com/twbs/bootstrap/blob/main/dist/js/bootstrap.min.js.map";
  script.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  return (
    
    <div>
      <div class="jumbotron text-center">
      <h1>Selamat Datang di Darman Store</h1>
    <p>Menyediakan kebutuhan keyboard sesuai dengan keinginan Anda</p>
      </div>
      <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="thumbnail">
          <a><img src="https://i2.wp.com/hanamera.com/wp-content/uploads/2016/04/keyboard-gaming-termahal-2-1024x576.jpg?resize=618%2C348" alt="Avatar" className="barang"/></a>
          <div class="caption">
                    <h3>Mionix Zibal 60</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris</p>
                    <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
          <a><img src="https://i0.wp.com/hanamera.com/wp-content/uploads/2016/04/keyboard-gaming-termahal-7.jpg?resize=540%2C298" alt="Avatar" className="barang"/></a>
          <div class="caption">
                    <h3>Optimus Maximus</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris</p>
                    <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                </div>
          </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
            <a><img src="https://www.jakartanotebook.com/images/products/17/3/1547/2/keyboard-notebook-acer-ferrari-1000-and-travelmate-6290-series-black-2.jpg" alt="Avatar" className="barang"/></a>
            <div class="caption">
                      <h3>Acer Ferrari 1100</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris</p>
                      <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p>
                  </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}>
          Sign out
        </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{
            pathname: "/login",
            state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function ProtectedPage() {
  return <Topics/>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: {pathname: "/"} };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default App;
