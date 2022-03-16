import React, { Component } from 'react';
import logo from '../images/1441620889_quickfile_mid.png'
import '../css/style.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="accountInformation">
                    <p>GARDENMATT</p>
                    <p>Account: <span>6131504958</span></p>
                    <a href="">Sing out</a>
                </div>
            </div>
        );
    }
}

export default Header;