import './sell-buy.css'
import axios from 'axios';
import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

function Seller(){
    const navigate = useNavigate()
    const {id} = useParams()
    if (!localStorage.auth || localStorage.auth != id){
        navigate('/')
    }

    const unlogin = () =>{
        localStorage.auth=0
        navigate('/')
    }
    const [acceptes, setAcceptes] = useState()
    const [orders, setOrders] = useState()
    const handleTake = (data) => {
        axios.post('http://127.0.0.1:8000/api/v1/add_accept', data)
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/get_accept/' + id).then(res => {setAcceptes(res.data)});
      }, []);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/get_orders').then(res => {setOrders(res.data)});
      }, []);
    return (
        <>
        <header>
            <div id="logo"><img src={require('../images/logo.png') }/></div>
            <Button color="secondary" sx={{
            marginTop: '2.5%',
              width: 300,
              height: 70,
              fontSize: 20,
              color: '#00B3E7',

            }}   onClick={unlogin}>
        Выйти
      </Button>
        </header>
        {console.log(orders)}
        {orders?.orders.map(o => 
                <div className={o.red_line? "rdl":"grl"}>
                                
                        <Button  sx={{
                            paddingLeft: 5,
                            paddinBottom: 5,
                           width: 45,
                           height: 45,
                           fontSize: 20,
                           color: '#E7B300',

                        }} onClick={(e) => {handleTake({transaction_id:o.id, id:id})}}>
                     [ВЗЯТЬ]
                    </Button>
                    <span >№{o.id}</span>
                    <span>{o.title}</span>
                    <span>{o.amount}</span>
                    <span>{o.req_price}{o.currency}</span>
                    <span>{(o.red_line)? "экстренно":""}</span>
                </div>
                )}
        </>
        
    );
}
export default Seller;