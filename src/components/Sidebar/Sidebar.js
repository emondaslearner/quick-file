import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <input type="text" placeholder='Quick search...' />
                <FontAwesomeIcon className='edit' icon={faPenToSquare} />
                <p>Create you own custom menu with links to your most visited pages in QuickFile of extands links to third party applications and CMS tools <a href="">Tell me more</a> </p>
                <div className="links">
                    <button><FontAwesomeIcon className='plus' icon={faPlus} /> Add links</button>
                    <button><FontAwesomeIcon className='minus' icon={faMinus} /> Hide</button>
                </div>
            </div>
        );
    }
}

export default Sidebar;