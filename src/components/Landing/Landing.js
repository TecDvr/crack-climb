import React from 'react'; 
import { TweenMax, Power3 } from 'gsap';
import './Landing.css';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.title = null;
        this.myTween = null;
    }

    componentDidMount() {
        console.log('test ref', this.title)
        TweenMax.from(this.title, 1.5, {css: {opacity: 0}, ease: Power3.easeOut})
        TweenMax.to(this.title, 1.8, {css: {opacity: 1}, ease: Power3.easeOut})
    }

    render() {
        return (
            <div className='landing-container'>
                <h1  
                    className='title'
                    ref={element => {this.title = element}}
                    >crack climb
                </h1>
            </div>
        )
    }
}