//This is the container containg exactly 3 pics pics for a parallax display

//All imports here:
import { useEffect, useLayoutEffect } from 'react';
import {animated, config, useSpring} from 'react-spring';


//The main functional component here:
const ParallaxBox = ({img1Src, img2Src, img3Src}) => {
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
        <animated.div style = {{margin:'5vw 0'}} className="__te_adageInteriorStudio__ParallaxBox_Studio">
            <animated.img style = {{transform:props.y.interpolate( y => `translateX(-50%) translateY(${-y/50}px)`)}} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__ReactiveImages__Studio1" src = {img1Src}/>
            <animated.img style = {{transform:props.y.interpolate( y => `translateY(${-y/15}px)`)}} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__ReactiveImages__Studio2" src = {img2Src}/>
            <animated.img style = {{transform:props.y.interpolate( y => `translateY(${-y/10}px)`)}} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__ReactiveImages__Studio3" src = {img3Src}/>
            {/* <animated.img style = {{transform:props.y.interpolate( y => `translateY(${-y/20}px)`)}} className = "_te__adageInteriorStudio__ReactiveImages" id = "_te__adageInteriorStudio__ReactiveImages__Studio4" src = "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch2.PNG"/> */}
        </animated.div>
    )
}


//Exports here:
export default ParallaxBox;