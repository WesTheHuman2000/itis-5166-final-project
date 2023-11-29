import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


import AboutPage from './pages/AboutPage';
import Menu from './components/Menu';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import Footer from './components/Footer'

function App() {
  return (
    
    
    <Router>
    <Menu/>
      <div className="container px-4 px-lg-5">
        <Routes>
          <Route path='/' element= {<AboutPage/>}></Route>
          <Route path='/login' element= {<LoginPage/>}></Route>
          <Route path='/logout' element= {<LogoutPage/>}></Route>
          <Route path='/signup' element= {<SignupPage/>}></Route>
          <Route path='/dashboard' element= {<DashboardPage/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
    
  );
};

export default App;
