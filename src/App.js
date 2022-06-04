import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
