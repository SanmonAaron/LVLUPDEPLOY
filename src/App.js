import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from "./components/Index";
import ShowPersonajes from "./components/ShowPersonajes";
import ShowMyPersonajes from "./components/ShowMyPersonajes";
import CreatePersonajes from "./components/CreatePersonaje";
import EditPersonajes from "./components/EditPersonaje";
import Login from './components/Login';
import Register from './components/Register';
import Objetivos from './components/Objetivos';
import Objetivos2 from './components/Objetivos2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/inicio' element={ <Index /> } />
         <Route path='/show' element={ <ShowPersonajes /> } />
         <Route path='/showone/:id' element={ <ShowMyPersonajes /> } />
         <Route path='/create' element={ <CreatePersonajes /> } />
         <Route path='/edit/:id' element={ <EditPersonajes /> } />
         <Route path='/' element={ <Login /> } />
         <Route path='/register' element={ <Register /> } />
         <Route path='/objetivos/:id' element={ <Objetivos /> } />
         <Route path='/objetivos2/:id' element={ <Objetivos2 /> } />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
