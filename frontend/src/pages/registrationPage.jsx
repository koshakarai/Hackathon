import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegistrationPage () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [inn, setInn] = useState('');
    const [org, setOrg] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [patronymic, setPatronymic] = useState('');

    const navigate = useNavigate();
      const registrate=(id)=>{
        navigate('/login');
          }

    const handleSubmit = e => {
      e.preventDefault();

      const data = {
            email: email,
            surname: lastname,
            name: name,
            patronymic: patronymic,

            company_name: org,
            inn: inn,
            password: password,
      }
      const headers = {
        'Accept': 'application/json',
    }
      axios.post('http://127.0.0.1:8000/api/v1/create', data, headers)
      .then(res => {if (res.statusText == "OK") {registrate()}}).catch(err => console.log(err));
        } 

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label><b>Почта</b></label>
                        <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    
                    <div>
                        <label ><b>Фамилия</b></label>
                        <input type="text" id='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                    </div>

                    <div>
                        <label ><b>Имя</b></label>
                        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div>
                        <label ><b>Отчество</b></label>
                        <input type="text" id='patronymic' value={patronymic} onChange={(e) => setPatronymic(e.target.value)}/>
                    </div>

                    <div>
                        <label ><b>Название организации</b></label>
                        <input type="text" id='org' value={org} onChange={(e) => setOrg(e.target.value)}/>
                    </div>

                    <div>
                        <label ><b>ИНН</b></label>
                        <input type="text" id='inn' value={inn} onChange={(e) => setInn(e.target.value)}/>
                    </div>

                    <div>
                        <label ><b>Пароль</b></label>
                        <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div>
                        <label ><b>Пароль</b></label>
                        <input type='password'/>
                    </div>

                    

                    <button type="submit" >зарегистрироваться</button>

                    <div>
                        <p>Уже есть аккаунт? <Link to="/login">войти</Link></p>
                    </div>
                </form>
            </div>);

}