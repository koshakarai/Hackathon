import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import './infoPage.css'

function InfoPage() {
    return (
        <div>
            <Header/>
            <div className="we"><p>Мы - РОСГОСЗАКУПКИ, сервис для продажи и покупки серийной продукции и услуг. С 2022 года мы предоставляем предприятиям и заказчикам площадку для торговли. Удобный и приятный интерфейс создан для того, чтобы создать максимально комфортную для пользователя атмосферу. Для пользования необходима регистрация.
                </p></div>
            <div className="choise">
                <div className="seller">
                    <div className="bs-ic"><img src={require("../images/package.png")} /></div>
                    <div className="bs-tc"><div className="bs-prc"><p>Поставщики - те, кто поставляют товар по запросу закупщика. Могут создавать 
                        предложение о поставке.</p></div>
                    <div><Link to='/login'>Начать с нами</Link></div></div>
                </div>
                <div className="buyer">
                    <div className="bs-ic"><img src={require("../images/question.png")} /></div>
                    <div className="bs-tc"><div className="bs-prc"><p> Закупщики - те, кто запрашивают поставку определенного товара. На запрос могут ответить поставщики в 
                        течении ограниченного количества времени.</p></div>
                    <div><Link to='/login'>Начать с нами</Link></div></div>
                </div>
            </div>
            
            
        </div>
    );
}

export default InfoPage;