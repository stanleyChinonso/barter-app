import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Forms/Login';
import Signup from './Components/Forms/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/createaccount' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
  

    </div>
  );
}

export default App;