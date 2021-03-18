//This is the component that contains exactly 1 hero image to be zoomed in out automatically based on scroll


//All imports here:
import {animated, interpolatee, useSpring, config} from 'react-spring';
import React, {useEffect, useRef, useLayoutEffect, useState} from 'react';

//The primary component here:
const ImageZoomer = ({bg}) => {
    const self_container = useRef();
    const [zoom, setZoom] = useSpring(() => ({
        csVar : '100%',
        config:config.molasses,
    }))
    const self_scroll_handler = () => {
        if(window.innerHeight > self_container.current.getBoundingClientRect().top)
            {setZoom(() => {
                return{
                    csVar:'105%'
                }
            })}
        else if(window.innerHeight < self_container.current.getBoundingClientRect().bottom)
            {setZoom(() => {
                return{
                    csVar:'100%'
                }
            })}
    }
    useLayoutEffect(() => {
        window.addEventListener('scroll', self_scroll_handler);
        return () => window.removeEventListener('scroll', self_scroll_handler);
    },[])

    return(
        <animated.div ref = {self_container} style = {{backgroundImage:`url(${bg})`, backgroundSize: zoom.csVar.interpolate(x => x)}} className="__te_adageInteriorStudio__ImageZoomer">            
        </animated.div>
    )
}

//exports here:
export default ImageZoomer;