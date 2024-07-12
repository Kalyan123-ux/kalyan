import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Login from './components/Login'
import Home from './components/home';
import './index.css'
import {BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'
import Register from './components/Register';

const root =document.getElementById('root')//root id from index.html
const VirtualRoot = ReactDOM.createRoot(root);


VirtualRoot.render(
  <Router>
  <div>  
    <Header/>
    <nav>
    <Home/>
    </nav>

  </div>
  
    
  <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      
    </Routes>
  </Router>
)