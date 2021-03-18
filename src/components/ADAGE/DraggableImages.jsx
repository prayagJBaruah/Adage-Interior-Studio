//this is the image dragger component
//NOTE: THIS IS NOT IN THE FINAL PRODUCTION YET

//All imports:
import { render } from 'react-dom'
import React, { useState, useRef } from 'react'
import { useSprings, animated, interpolate, config, useSpring } from 'react-spring'
import { useGesture } from 'react-use-gesture'

//the primary container here:

const DraggableImages = ({imgData}) => {
    const [props1, set1] = useSpring(() => ({
        xy:[0,0],
        config: config.slow
    }))
    const [props2, set2] = useSpring(() => ({
        xy:[0,0],
        config: config.slow
    }))
    const [props3, set3] = useSpring(() => ({
        xy:[0,0],
        config: config.slow
    }))
    const bind1 = useGesture(({down, delta}) => {
        if(down)
            set1(() => {
                return{
                    xy:[delta[0],delta[1]]
                }
            })
        else{
            set1(() => {
                return{
                    xy:[0,0]
                }
            })
        }
    })
    const bind2 = useGesture(({down, delta}) => {
        if(down)
            set2(() => {
                return{
                    xy:[delta[0],delta[1]]
                }
            })
        else{
            set2(() => {
                return{
                    xy:[0,0]
                }
            })
        }
    })
    const bind3 = useGesture(({down, delta}) => {
        if(down)
            set3(() => {
                return{
                    xy:[delta[0],delta[1]]
                }
            })
        else{
            set3(() => {
                return{
                    xy:[0,0]
                }
            })
        }
    })
    return(
        <div className="__te_adageInteriorStudio__DraggableImages">            
            <animated.div id = "team1" {...bind1()} style={{transform: props1.xy.interpolate((x, y) => `translateX(${x}px) translateY(${y}px)`), backgroundImage: `url(${imgData[0]})`}}/>
            <animated.div id = "team2" {...bind2()} style={{transform: props2.xy.interpolate((x, y) => `translateX(${x}px) translateY(${y}px)`), backgroundImage: `url(${imgData[1]})`}}/>
            <animated.div id = "team3" {...bind3()} style={{transform: props3.xy.interpolate((x, y) => `translateX(${x}px) translateY(${y}px)`), backgroundImage: `url(${imgData[2]})`}}/>            
        </div>
    )
}

//Exports here:
export default DraggableImages;