import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <li><a className='active' href="#">My Dashboard</a></li>
                <li><a href="#">Sales</a></li>
                <li><a href="#">Purchases</a></li>
                <li><a href="#">Banking</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Account Setting</a></li>
                <li><a href="#">Help</a></li>
            </div>
        );
    }
}

export default Menu;