import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import ScrollMagic from 'scrollmagic';
import { Tween } from 'react-gsap';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './Crack.css';

export default class Crack extends React.Component {
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {
        let scene = new ScrollMagic.Scene({
            duration: 1000,
            triggerElement: '.videoTrigger',
            triggerHook: 0
        })
        .setPin(".videoTrigger") // pins the element for the the scene's duration
        .addTo(this.controller); // assign the scene to the controller

        const video = document.querySelector("video");

        let accelamount = 0.1;
        let scrollpos = 0;
        let delay = 0;

        scene.on("update", e => {
        scrollpos = e.scrollPos / 1000;
        });

        setInterval(() => {
        delay += (scrollpos - delay) * accelamount;
        
        video.currentTime = delay;
        }, 33.3);
    }
    
    render() {
        return ( 
            <div className='crackContainer'>
            <Menu />
                <div className='intro'>
                    <p>this is the intro</p>
                </div>
                <div className='videoTrigger'>
                    <video src='https://clips.vorwaerts-gmbh.de/VfE_html5.mp4' type='video/mp4'></video>
                </div>

                {/* <Controller>
                    <Scene duration={500} triggerElement={null} offset={200}>
                        {(progress) => (
                            <Tween
                                from={{css: {opacity: '0', left: '100px'}, ease: 'Circ.easeOutExpo'}}
                                to={{css: {opacity: '1', left: '0px'}, ease: 'Circ.easeOutExpo'}}
                                totalProgress={progress}
                                paused
                            >
                                    <div className='videoTrigger'>
                                        <TapingUp />
                                    </div>
                            </Tween>
                        )}
                    </Scene>
                </Controller> */}
                
                <Controller>
                    <Scene duration={500} triggerElement='.tapingContainer' offset={500}>
                        {(progress) => (
                            <Tween
                                from={{css: {opacity: '0', left: '100px'}, ease: 'Circ.easeOutExpo'}}
                                to={{css: {opacity: '1', left: '0px'}, ease: 'Circ.easeOutExpo'}}
                                totalProgress={progress}
                                paused
                            >
                                <div className='crackType finger'>
                                    <p>finger crack</p>
                                </div>
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
                                <div className='crackType hand'>
                                    <p>hand crack</p>
                                </div>
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
                                <div className='crackType fist'>
                                    <p>fist crack</p>
                                </div>
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
                                <div className='crackType offwidth'>
                                    <p>offwidth crack</p>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
                <Footer />
            </div>
        )
    }
}