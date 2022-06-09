import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import MyMission from './Component/MyMission/MyMission';
import MyHobbies from './Component/MyHobbies/MyHobbies';
import MyAllProjects from './Component/MyAllProjects/MyAllProjects';
import ContactMe from './Component/ContactMe/ContactMe';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myMission' element={<MyMission></MyMission>}></Route>
        <Route path='/hobbies' element={<MyHobbies></MyHobbies>}></Route>
        <Route path='/projects' element={<MyAllProjects></MyAllProjects>}></Route>
        <Route path='/contactMe' element={<ContactMe></ContactMe>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
