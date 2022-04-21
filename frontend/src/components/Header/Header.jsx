
import FormDialog from '../login'
import './Header.models.css';

function Header () {
    return(
        <><header>
          <div id="logo"></div>
          <div id="login"> <FormDialog /></div>
        </header>
        </>
        
    );
}

export default Header;