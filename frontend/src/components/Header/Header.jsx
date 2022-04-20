import { NavLink } from 'react-router-dom';

import './Header.models.css';

function Header () {
    return(
        <header>
            <div id="logo"><img src={require('../../images/logo.png') }/></div>
            <div className="login"> <NavLink to="/login">вход</NavLink></div>
        </header>
    );
}

export default Header;