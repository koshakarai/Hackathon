import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function LoginPage  (){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const [type, setType] = useState("seller")

    const navigate = useNavigate();
      const auth=(id, who)=>{
        navigate('/' + who + '/' + id);
          }
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
            email: email,
            password: password,
            type: type,
      }
      
      const headers = {
        'Accept': 'application/json',}
      axios.post('http://127.0.0.1:8000/api/v1/auth', data, headers)
      .then(res => {if (res.statusText=="OK") {auth(res.data.id, type)}}).catch(err => console.log(err));} 

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span>Поставшик</span>
                        <label className="switch"><input type='checkbox' id="who" onChange={(e) => setType((type == "seller")? "buyer":"seller")}/><span className="slider round"></span></label>
                        <span>Заказчик</span>
                    </div>
                    <div>
                        <label><b>Email</b></label>
                        <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label ><b>Password</b></label>
                        <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" >login</button>

                    <div>
                        <p>Еще нет аккаунта? <Link to="/registration">зарегистрироваться</Link></p>
                    </div>
                </form>
            </div>
        );
    
}