// import './App.css'

import Signup from "./component/Signup";
import Home from "./component/Home";
import Login from "./component/Login";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Signup">signup</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/Signup' element={< Signup />}></Route>
          <Route exact path='/Login' element={< Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;