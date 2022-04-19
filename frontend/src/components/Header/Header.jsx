import { Link } from 'react-router-dom';

import './Header.models.css';

function Header () {
    return(
        <header>
            <div id="logo"> РОСГОСПОСТАВКИ </div>
            <div className="login"> <Link to="/login">вход</Link></div>
        </header>
    );
}

export default Header;