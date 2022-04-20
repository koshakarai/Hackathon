import Modalka from '../components/Modal/modal';
import './sell-buy.css';

function Buyer() {
    return (
        <>
        <header>
            <div id="logo"><img src={require('../images/logo.png') }/></div>
            
        </header>
        <div> ЭТО АККАУНТ ЗАКАЗЧИКА </div>
        <Modalka/>
        </>
    );
}
export default Buyer;