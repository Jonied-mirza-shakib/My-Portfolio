import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import MyMission from './Component/MyMission/MyMission';
import MyHobbies from './Component/MyHobbies/MyHobbies';
import MyProjects from './Component/MyProjects/MyProjects';
import Dashboard from './Component/Dasboard/Dashboard';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/myMission' element={<MyMission></MyMission>}></Route>
          <Route path='/hobbies' element={<MyHobbies></MyHobbies>}></Route>
          <Route path='/projects' element={<MyProjects></MyProjects>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
