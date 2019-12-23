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

    openMenu() {
        this.setState({
            open: true
        })
    }

    closeMenu() {
        this.setState({
            open: false
        })
    }
    
    render() {
        return (
            <div>
                {this.state.open === false 
                    ?   <nav className='navBar'>
                            <div id='myDIV' className='burger burger-rotate' onClick={() => this.openMenu()}>
                                <div className='burger-lines'></div>
                            </div>
                        </nav>
                    :   <nav className='navBar'>
                            <div className='burger burger-rotate open myNav' onClick={() => this.closeMenu()}>
                                <div className='burger-lines'></div>
                                <div id='myNav' className='overlay'>
                                    <div className='overlay-content'>
                            
                                    </div>
                                </div>
                            </div>
                        </nav>
                }
                <Link
                    style={{ textDecoration: 'none'}}
                    to='/'>
                        <button className='homeButton'>home</button>
                </Link>
            </div>
        )
    }
}