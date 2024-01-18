import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/SignIn';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from './store';
import checkForToken from "./helpers/checkForToken";


checkForToken();
function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Container> */}
        <Routes>
        <Route exact path='/' element={<SignIn />}></Route>
          <Route exact path='/signin' element={<SignIn />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
        </Routes>
        {/* </Container> */}
      </Router>
    </Provider>


  );
}

export default App;
