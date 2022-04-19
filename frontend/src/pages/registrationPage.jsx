import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class RegistrationPage  extends React.Component{

    
    handleSubmit = event => {
      event.preventDefault();

      const data = {
            email: this.email,
            lastname: this.ln,
            firstname: this.name,
            fathername: this.fn,
            phone: this.phone,
            org: this.org,
            inn: this.inn,
            psw: this.psw,
            pswr: this.pswr,
      }
      const headers = {
        'Accept': 'application/json',
    }
      axios.post('http://127.0.0.1:8000/api/v1/create', data, headers)
      .then(res => {if (res.statusText == "OK") {console.log("OK!")}}).catch(err => console.log(err));
        } 

    render () {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label><b>Почта</b></label>
                        <input type="text" placeholder="Enter Email" name="email" 
                        onChange={e => this.email = e.target.value} required/>
                    </div>
                    
                    <div>
                        <label ><b>Фамилия</b></label>
                        <input type="text" placeholder="Last name" name="ln" 
                        onChange={e => this.ln = e.target.value} required/>
                    </div>

                    <div>
                        <label ><b>Имя</b></label>
                        <input type="text" placeholder="First Name" name="name" 
                        onChange={e => this.name = e.target.value} required/>
                    </div>

                    <div>
                        <label ><b>Отчество</b></label>
                        <input type="text" placeholder="Father name" name="fn" 
                        onChange={e => this.fn = e.target.value} required/>
                    </div>

                    <div>
                        <label ><b>Номер телефона</b></label>
                        <input type="text" placeholder="Phone" name="phone" 
                        onChange={e => this.phone = e.target.value} required/>
                    </div>

                    <div>
                        <label ><b>Название организации</b></label>
                        <input type="text" placeholder="Org name" name="org" 
                        onChange={e => this.org = e.target.value} required/>
                    </div>

                    <div>
                        <label ><b>ИНН</b></label>
                        <input type="text" placeholder="INN" name="inn" 
                        onChange={e => this.inn = e.target.value} required/>
                    </div>

                    <div>
                        <label ><b>Пароль</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" 
                        onChange={e => this.psw = e.target.value} required/>
                    </div>

                    <div>
                        <label ><b>Пароль</b></label>
                        <input type="password" placeholder="Repeat Password" name="pswr" 
                        onChange={e => this.pswr = e.target.value} required/>
                    </div>

                    

                    <button type="submit" >зарегистрироваться</button>

                    <div>
                        <p>Уже есть аккаунт? <Link to="/login">войти</Link></p>
                    </div>
                </form>
            </div>
        );
    }
}