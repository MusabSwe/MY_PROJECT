import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="navbar">
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/filter'>Filter</Link></li>
            </nav>
        </div>
    );
}

export default NavBar;