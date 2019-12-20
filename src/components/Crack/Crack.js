import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import './Crack.css';

export default class Crack extends React.Component {
    render() {
        return (
            <div className='crackContainer'>
                <Controller>
                    <Scene duration={500} triggerElement={null} offset={200}>
                        {(progress) => (
                            <Tween
                                from={{css: {opacity: '0', left: '100px'}, ease: 'Circ.easeOutExpo'}}
                                to={{css: {opacity: '1', left: '0px'}, ease: 'Circ.easeOutExpo'}}
                                totalProgress={progress}
                                paused
                            >
                                <div className='crackType finger'></div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
                <Controller>
                    <Scene duration={500} triggerElement='.hand'>
                        {(progress) => (
                            <Tween
                                from={{css: {opacity: '0', right: '100px'}, ease: 'Circ.easeOutExpo'}}
                                to={{css: {opacity: '1', right:'0px'}, ease: 'Circ.easeOutExpo'}}
                                totalProgress={progress}
                                paused
                            >
                                <div className='crackType hand'></div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
                <Controller>
                    <Scene duration={500} triggerElement='.fist'>
                        {(progress) => (
                            <Tween
                                from={{css: {opacity: '0', left: '100px'}, ease: 'Circ.easeOutExpo'}}
                                to={{css: {opacity: '1', left: '0px'}, ease: 'Circ.easeOutExpo'}}
                                totalProgress={progress}
                                paused
                            >
                                <div className='crackType fist'></div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
                <Controller>
                    <Scene duration={500} triggerElement='.offwidth'>
                        {(progress) => (
                            <Tween
                                from={{css: {opacity: '0', right: '100px'}, ease: 'Circ.easeOutExpo'}}
                                to={{css: {opacity: '1', right:'0px'}, ease: 'Circ.easeOutExpo'}}
                                totalProgress={progress}
                                paused
                            >
                                <div className='crackType offwidth'></div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
            </div>
        )
    }
}