
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import './sell-buy.css';

function Buyer() {

    const [isVisible, setIsVisible] = useState(false)

    const {userID} = useParams()

    const [title, setTitle] = useState()
    const [amount, setAmount] = useState()
    const [exp_data, setExp_data] = useState()
    const [req_price, setReq_price] = useState()

    const [currency, setCurrency] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            amount: amount,
            exp_data: exp_data,
            req_price: req_price,    
        }}
        console.log(data)
    return (
        <>
        <header>
            <div id="logo"><img src={require('../images/logo.png') }/></div>
        </header>
        <div className='Buyer-cont'>
            <div className='add_aria'>
                <button type='button' onClick={(e) => setIsVisible(!isVisible)}>add</button>
                <div className={isVisible? "form-vis":"form-invis"}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label ><b>Наименование товара/услуги</b></label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <label ><b>Количество (если услуга поставить прочерк)</b></label>
                            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                        </div>
                        <div>
                            <label ><b>Срок актуальности заказа</b></label>
                            <input type="text" value={exp_data} onChange={(e) => setExp_data(e.target.value)}/>
                        </div>
                        <div>
                            <label ><b>Запрашиваемая цена</b></label>
                            <input type="text" value={req_price} onChange={(e) => setReq_price(e.target.value)}/>
                        </div>
                        <div>
                            <label ><b>Валюта</b></label>
                            <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)}/>
                        </div>
                        <button type="submit" >Сделать Запрос</button>
                    </form>

                </div>
            </div>
            <div className='orders'>asd</div>
        </div>
        
        </>
    );
}
export default Buyer;