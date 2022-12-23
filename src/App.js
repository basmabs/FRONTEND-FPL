import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Register from './Components/Client-side/Register';
import Login from './Components/Client-side/Login';
import PrivateRoute from './Components/private-route/private';
import SondageResult from './Components/Sondage_Components/Sondages_Result';
import AddSondage from './Components/Sondage_Components/AddSondage';
import ListSondage from './Components/Sondage_Components/ListSondages';
import UpdateSondage from './Components/Sondage_Components/UpdateSondage';
import ClickCounter from './Components/Sondage_Components/SondageInc';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<PrivateRoute> <Home /></PrivateRoute>}></Route>

          <Route path='/SondageResult' element={<PrivateRoute><SondageResult /></PrivateRoute>} />
          <Route path='/addSondage' element={<PrivateRoute><AddSondage /></PrivateRoute>} />
          <Route path='/listSondage' element={<PrivateRoute><ListSondage /></PrivateRoute>} />
          <Route path='/updateSondage/:idSondage' element={<PrivateRoute><UpdateSondage /></PrivateRoute>} />
         <Route path='/ClickCounter' element={<PrivateRoute><ClickCounter/></PrivateRoute>} />


        </Routes>
      </Router>
    </div>
  );
};
export default App;