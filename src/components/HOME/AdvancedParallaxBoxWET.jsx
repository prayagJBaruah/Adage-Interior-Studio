//This is the container containg pics for a parallax display

//All imports here:
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {animated, config, useSpring, interpolate} from 'react-spring';


//The main functional component here:
const AdvancedParallaxBox = () => {
    //useSpring for animations

    //useRef for the advancedImage:
    const self_AdvancedImages_ref = useRef();

    const [props, set] = useSpring(() => ({
        y : 0,
        s:1,
        zTrans:0,
        rotateXY:[0,0],
        p:0,
        config : config.slow
    }));

    //the scroll handler
    const self_scroll_handler = () => {
        set(() => {
            return{
                y:window.scrollY,
            }
        })
    }

    //logic to set parallax:
    useLayoutEffect(() => {
        window.addEventListener('scroll', self_scroll_handler);
        return () => window.removeEventListener('scroll', self_scroll_handler);
    },[])

    const self_AdvancedImages_style = {transform: interpolate([props.y, props.zTrans, props.rotateXY, props.p, props.s], (y,zT,xy,p,s) => `translateX(-50%) translateY(${y/12}px) translateZ(${zT}px) perspective(${p}px) rotateX(${xy[0]}deg) rotateY(${xy[1]}deg) scale(${s})`)}
    
    return(
        <animated.div className="__te_adageInteriorStudio__AdvancedParallaxBox">
            <animated.img style = {{transform:props.y.interpolate( y => `translateY(${-y/y}px)`)}} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__AdvancedParallaxBox_reactiveImages1" src = "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch5.PNG"/>
            <animated.img ref ={self_AdvancedImages_ref} onMouseEnter = {e => {
                set(() => {
                    return{
                        p:600,
                        s:1.05,
                        zTrans:10
                    }
                })
            }} 
            onMouseLeave = {e => {
                set(() => {
                    return{
                        p:0,
                        s:1,
                        zTrans:0,
                        rotateXY:[0,0]
                    }
                })
            }}
            // onMouseMove = {e => {
            //     set(() => {
            //         return{
            //             rotateXY: [(-(e.clientX - window.innerWidth/3))/20,((e.clientY - (self_AdvancedImages_ref.current.getBoundingClientRect().top-e.target.clientHeight)))/20] 
            //         }
            //     })
            // }}
            style = {self_AdvancedImages_style} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__AdvancedParallaxBox_reactiveImages2" src = "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch6.PNG"/>
        </animated.div>
    )
}


//Exports here:
export default AdvancedParallaxBox;