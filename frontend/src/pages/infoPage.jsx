import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

import RegForm from "../components/registration";
import './infoPage.css'
import Footer from "../components/Footer/Footer";

function InfoPage() {
    return (
        <div>
            <Header/>
            <div className="parallax"></div>
            <hr/>
            <br/>
            <div className="we"><p>Мы - РОСГОСЗАКУПКИ, сервис для продажи и покупки серийной продукции и услуг. С 2022 года мы предоставляем 
                предприятиям и заказчикам площадку для торговли. Удобный и приятный интерфейс создан для того, 
                чтобы создать максимально комфортную для пользователя атмосферу. Для пользования необходима регистрация.
                </p></div>
                <hr/>
                <div className="bs-cont">
                <div className="seller">
                    <div className="bs-ic"><img src={require("../images/package.png")} /></div>
                    <div className="bs-tc"><div className="bs-prc"><p>Поставщики - те, кто поставляют товар по запросу закупщика. Могут создавать 
                        предложение о поставке.</p></div></div>
                </div>
                
                <div className="buyer">
                    <div className="bs-tc"><div className="bs-prc"><p> Закупщики - те, кто запрашивают поставку определенного товара. На запрос могут ответить поставщики в 
                        течении ограниченного количества времени.</p></div></div>
                    <div className="bs-ic"><img src={require("../images/question.png")} /></div>
                </div>   
                </div>
                <hr/>
                <RegForm/>
                <div className="good"><p> Мы гарантируем удобный и качественый сервис. </p></div>
                <Footer />
                
                
            
            
            
        </div>
    );
}

export default InfoPage;