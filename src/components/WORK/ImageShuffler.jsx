//This is a stylized image shuffler and decker component for all work modules

//All imports here:
import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
//The primary component here:
const ImageShuffler = (propsForComponent) => {


    const to = i => ({ yT: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
    const from = i => ({ rot: 0, scale: 1.5, yT: -1000 })
    const [props, set] = useSprings(propsForComponent.imgData.length, i => ({ ...to(i), from: from(i) }))
    return(
        <div className="__te_adageInteriorStudio__ImageShuffler">
            {props.map(({yT,scale,rot},i) => (
                <animated.div key = {i} style = {{transform:yT.interpolate(y => `translateY(${y}px)`)}}>
                    <animated.div style = {{backgroundImage: `url(${propsForComponent.imgData[i]})`, transform: interpolate([scale, rot],(s,r) => `perspective(1500px) scale(${s}) rotateX(30deg) rotateY(${r/10}deg) rotateZ(${r}deg)`)}}></animated.div>
                </animated.div>
            ))}
        </div>
    )
}


//exporting here:
export default ImageShuffler;