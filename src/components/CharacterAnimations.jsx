//This component breaks the children string passed into it into an array, then uses useTrail hook to animate each character separately. 
//P.S. This works only for a single word, strings separated by whitespaces wont be shown with the whitespace in the DOM. 
//If you are a developer and want to make it simpler, go ahead and creat a better logic, guess I am too lazy to use regex now or a better logic.
//WET VERSION

//All import here:
import React, { forwardRef, useRef } from 'react';
import {useTrail, animated, config, useSpring, interpolate, useChain} from 'react-spring';

//The main functional component here:

const CharacterAnimation = forwardRef(({children, xTrans, yTrans,parentRef},ref) => {
    //useRef for chaining: the stand-alone ref is undefined, we use multiple instances of the same component, so, we pass ref as props
    //use props ref

    //string.split to split the child into chars

    const charArr = children.split('')
    //Using useTrail here:
    
    const newTrail = useTrail(charArr.length, {
    ref:parentRef,
    to:{transform:`translateX(0px) translateY(0px)`,opacity:1},
    from:{transform:`translateX(${xTrans}px) translateY(${yTrans}px)`,opacity:0},
    config:config.gentle,  
    });    



    return(
    <div ref = {ref} className="__te_adageInteriorStudio__CharacterAnimation">
        {newTrail.map((props,index) => 
        <animated.div className = "__te_adageInteriorStudio__CharacterAnimation_wrappers" key = {index} style = {props}>
            {charArr[index]}
        </animated.div>
        )}
    </div>
    )
})



//Exports here:
export default CharacterAnimation;
