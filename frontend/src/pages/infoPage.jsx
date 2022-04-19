import Header from "../components/Header/Header";

import './infoPage.css'

function InfoPage() {
    return (
        <div>
            <Header/>
            <p> This is info page</p>
            <div className="choise">
                <div className="export">
                    <div><img src={require("../images/package.png")} /></div>
                    <div><p> поставки поставки поставки</p></div>
                </div>
                <div className="import">
                    <div><img src={require("../images/question.png")} /></div>
                    <div><p> заказы заказы заказы</p></div>
                </div>
            </div>
            
            
        </div>
    );
}

export default InfoPage;