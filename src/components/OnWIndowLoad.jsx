//This is the animated screen which will appear after each window load/Reload. Contains the logo and an SVG animation with react-spring


//All imports here:

import { useEffect, useLayoutEffect } from 'react';
import {useState, useRef} from 'react';
import {useSpring, animated, config, useTransition, useChain} from 'react-spring';
import CharacterAnimation from './CharacterAnimations';


//Main component function

const OnWindowLoad = () => {
    const [winSize, setSize] = useState('15vw');

    const self_logo_ref = useRef();
    const self_ref = useRef();
    const charAnimRef_child1 = useRef();
    const charAnimRef_child2 = useRef();

    useEffect(() => {
        if(window.innerWidth <= 480)
            setSize('50vw');
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 480)
                setSize('50vw');
            else
                setSize('15vw');
        })
        return () => window.removeEventListener('resize')
    },[])

    const self_logo_anim = useSpring({
        ref:self_logo_ref,
        to:{opacity:1,width:winSize},
        from:{opacity:0,width:'1vw'},
        config:config.slow
    });

    //All spring animations here for the div:

    const self_anim = useSpring({
        ref:self_ref,
        to:{transform:'translateY(-100vh)'},
        from:{transform:'translateY(0vh)'},
        config:config.slow
    });
    useChain([{current:self_logo_ref.current},{current:charAnimRef_child1.current},{current:charAnimRef_child2.current},{current:self_ref.current}], [1,2,2.5,4])
    useChain([self_logo_ref, charAnimRef_child1, charAnimRef_child2, self_ref], [1,2,2.5,4])
    
    return(
        <animated.span style = {self_anim} className = "__te_adageInteriorStudio__OnWindowLoad">
            <animated.img style = {self_logo_anim} className = "__te_adageInteriorStudio__OnWindowLoad_logo" src="https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/logo_bold.png" alt="ADAGE"/>
            <animated.div className = "__te_adageInteriorStudio__CharacterAnimation_wrapper">
                <CharacterAnimation children = {"Interior"} xTrans = {0} yTrans = {0} parentRef = {charAnimRef_child1}/>
                <CharacterAnimation children = {"Studio"} xTrans = {0} yTrans = {0} parentRef = {charAnimRef_child2}/>
            </animated.div>
        </animated.span>
    )
}

//export component here

export default OnWindowLoad;