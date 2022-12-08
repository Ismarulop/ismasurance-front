import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import SignInForm from './components/sign in/SignInForm';
import Header from './components/header/Header';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>

          <Route exact path='/home' element={<Home />}></Route>

          <Route exact path='/' element={<SignInForm />}></Route>

        </Routes>
      </div>
    </Router>


  );
}

export default App;
