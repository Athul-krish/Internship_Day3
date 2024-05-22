//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import StateBasics from './Components/StateBasics';
import Counter from './Components/Counter';
import UseButton from './Components/UseButton';
import ListMap from './Components/ListMap';
import Mapping from './Components/Mapping';
import Api from './Components/Api';
import CardView from './Components/CardView';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/s' element={<StateBasics/>}/>
        <Route path='/count' element={<Counter/>}/>
        <Route path='/button' element={<UseButton/>}/>
        <Route path='/list' element={<ListMap/>}/>
        <Route path='/map' element={<Mapping/>}/>
        <Route path='/api' element={<Api/>}/>
        <Route path='/card' element={<CardView/>}/>
      </Routes>
    </div>
  );
}

export default App;
