import './App.css';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LogIn from './components/LogIn';
import CreatAccount from './components/CreatAccount';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/createaccount' element={<CreatAccount />}></Route>
        </Routes>
      </BrowserRouter>
  

    </div>
  );
}

export default App;
