import About from './component/About';
import Discover from './component/Discover';
import Services from './component/Services';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn'
import ForexRupee from './component/ForexRupee'
import './component/Style.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <>                                          
    <Router>
    <nav className='link'>
      <Link to="/forexRupee" id='forex' className='colo'>Forex-Rupee</Link>
      <div className='navbar'>😊
      <Link to="/about" className='col'>About</Link>😁
      <Link to="/discover" className='col'>Discover</Link>😁
      <Link to="/services" className='col'>Services</Link>😁
      <Link to="/signUp" className='col'>SignUp</Link>😊
      </div>
      <Link to="/signIn" id='sign' className='colo'>SignIn</Link>
    </nav>

    <Routes>
      <Route path="/forexRupee" element={<ForexRupee/>}>ForexRupee</Route>
      <Route path="/about" element={<About/>}>Home</Route>
      <Route path="/discover" element={<Discover/>}>AboutUs</Route>
      <Route path="/services" element={<Services/>}>StopWatch</Route>
      <Route path="/signUp" element={<SignUp/>}>Sign Up</Route>
      <Route path="/signIn" element={<SignIn/>}>Sign In</Route>      
    </Routes> 
    </Router>     
    
    </>
  );
}

export default App;
    