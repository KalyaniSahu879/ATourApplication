
import './App.css';
import {ToastContainer} from 'react-toastify';
import {BrowserRouter , Routes , Route} from 'react-router-dom' ;
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <ToastContainer/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/login' element = {<Login />}/>
        <Route path = '/register' element = {<Register />}/>
      </Routes>
      Hello
    </div>
    </BrowserRouter>
  );
}

export default App;