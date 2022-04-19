import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class LoginPage  extends React.Component{

      
    render () {
        return (
            <div>
                <form onSubmit={this.handleChange}>
                    <div>
                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required/>
                    </div>
                    <div>
                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
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