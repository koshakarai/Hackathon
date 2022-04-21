
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, componentDidMount } from 'react';
import Button from '@mui/material/Button';
import AddOrder from '../components/add_order'
import axios from 'axios';
import './sell-buy.css';

function Buyer() {

    const {id} = useParams()
    const navigate = useNavigate()
    if (!localStorage.auth || localStorage.auth != id){
        navigate('/')
    }


    const [orders, setOrders] = useState()

    const del = (data) => {
        axios.delete('http://127.0.0.1:8000/api/v1/delete_order/' + data)}
        setTimeout(() => {}, 200);
        axios.get('http://127.0.0.1:8000/api/v1/get_orders_by_user/'+ id).then(res => {setOrders(res.data)})
        
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/get_orders_by_user/'+ id).then(res => {setOrders(res.data)});
      }, []);

    const unlogin = () =>{
        localStorage.auth=0
        navigate('/')
    }

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
        <AddOrder />
        
                
               
                {orders?.orders.map(o => 
                <div>
                    <Button sx={{
              paddingBottom: 1.5     ,
              width: 45,
              height: 45,
              fontSize: 35,
              color: '#f23f64',

            }} onClick={(e) => del(o.id)}>-</Button>
                    <span >№{o.id}</span>
                    <span>Тема заказа: {o.title}</span>
                    <span>{o.title}</span>
                    <span>{o.title}</span>
                    <span>{o.title}</span>
                    <span>{o.title}</span>
                </div>
                )}
            
        
        
        </>
    );
}
export default Buyer;