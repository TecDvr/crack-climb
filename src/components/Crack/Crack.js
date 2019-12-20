import React from 'react';
import './Crack.css';

export default class Crack extends React.Component {
    render() {
        return (
            <div className='crackContainer'>
                <div className='crackType finger'></div>
                <div className='crackType hand'></div>
                <div className='crackType fist'></div>
                <div className='crackType offwidth'></div>
            </div>
        )
    }
}