//This is the description of arpita and her teammates

//All imports here:
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useSpring, animated, interpolate, config} from 'react-spring';

//the primary component here:
const AboutDescription = ({children, imgSrc, movementVar}) => {

    const [props, set] = useSpring(() => ({
        y : 0,
        config : config.slow
    }));
    const self_scroll_handler = () => {
        set(() => {
            return{
                y:window.scrollY,
            }
        })
    }
    useLayoutEffect(() => {
        window.addEventListener('scroll', self_scroll_handler);
        return () => window.removeEventListener('scroll', self_scroll_handler);
    },[])



    return(
        <div className="__te_adageInteriorStudio__AboutDescription">
            <div className="__te_adageInteriorStudio__AboutDescription_left">
                <animated.img style = {{transform:props.y.interpolate( y => `translateY(${y/movementVar}px)`)}} src= {imgSrc} alt="aboutimg"/>
            </div>
            <div className="__te_adageInteriorStudio__AboutDescription_right">
                <p>{children}</p>
            </div>
        </div>
    )
}

//exports here:
export default AboutDescription;