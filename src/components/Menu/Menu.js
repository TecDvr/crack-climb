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
                            <div className='burger burger-rotate' onClick={() => this.openMenu()}>
                                <div className='burger-lines'></div>
                            </div>
                        </nav>
                    :   <nav className='navBar'> 
                            <div className='overlay myNav'>
                                <div className='burger burger-rotate open' onClick={() => this.closeMenu()}>
                                    <div className='burger-lines'></div>
                                </div> 
                                <div className='overlay-content'>
                                    <Link
                                        style={{textDecoration: 'none'}}
                                        to='/'
                                    >Home</Link>
                                </div>
                            </div>            
                        </nav>
                }
            </div>
        )
    }
}