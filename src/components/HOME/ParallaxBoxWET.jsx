//This is the container containg pics for a parallax display

//All imports here:
import { useEffect, useLayoutEffect } from 'react';
import {animated, config, useSpring} from 'react-spring';


//The main functional component here:
const ParallaxBox = () => {
    //useSpring for animations
    const [props, set] = useSpring(() => ({
        y : 0,
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


    return(
        <animated.div className="__te_adageInteriorStudio__ParallaxBox">
            <animated.img style = {{transform:props.y.interpolate( y => `translateX(-50%) translateY(${-y/50}px)`)}} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__ReactiveImages_1" src = "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch1.PNG"/>
            <animated.img style = {{transform:props.y.interpolate( y => `translateY(${-y/15}px)`)}} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__ReactiveImages_2" src = "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch3.PNG"/>
            <animated.img style = {{transform:props.y.interpolate( y => `translateY(${-y/10}px)`)}} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__ReactiveImages_3" src = "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch4.PNG"/>
            <animated.img style = {{transform:props.y.interpolate( y => `translateY(${-y/3}px)`)}} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__ReactiveImages_4" src = "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch2.PNG"/>
        </animated.div>
    )
}


//Exports here:
export default ParallaxBox;