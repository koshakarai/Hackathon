import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class LoginPage  extends React.Component{
    handleSubmit = event => {
      event.preventDefault();

      const data = {
            email: this.email,
            password: this.psw,
      }
      const headers = {
        'Accept': 'application/json',}
      axios.post('http://127.0.0.1:8000/api/v1/auth', data, headers)
      .then(res => {if (res.statusText == "OK") {console.log("OK!")}}).catch(err => console.log(err));} 

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required
                        onChange={e => this.email = e.target.value}/>
                    </div>
                    <div>
                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required
                        onChange={e => this.psw = e.target.value}/>
                    </div>

                    <button type="submit" >login</button>

                    <div>
                        <p>Еще нет аккаунта? <Link to="/registration">зарегистрироваться</Link></p>
                    </div>
                </form>
            </div>
        );
    }
}