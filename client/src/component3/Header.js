import '../style.css'
import {Link} from 'react-router-dom'
export default function Header(){
 return(
 <div class="header">
 <h3 class="i1">FlipKart</h3>
 <ul class="i31">
 <li>
 <Link to="/">Home</Link>
 </li>
<li><Link to="/Login">Login</Link></li>
 <li><Link to="/Register">Register</Link></li>
 <li><Link to="/Feedback">Feedback</Link></li>
 <li><Link to="/TodoList">Todo</Link></li>
 </ul>
 </div>
 )
}