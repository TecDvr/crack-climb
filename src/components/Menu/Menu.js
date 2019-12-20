import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    
    render() {
        return (
            <div>
                <Link
                    style={{ textDecoration: 'none'}}
                    to='/'>
                        <button className='homeButton'>home</button>
                </Link>
            </div>
        )
    }
}