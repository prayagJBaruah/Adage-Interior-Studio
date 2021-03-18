//This is the component that provides a glimpse of the work


//All imports here:
import { useState } from 'react';
import {useSpring, animated, interpolate, config} from 'react-spring';


//The primary component here:

const WorkViewer = (props) => {

    //useState to store onHover state
    // const [hover, setHover] = useState(false);

    // const hoverAnim_props = useSpring({
    //     someVar : 0, from : {someVar : hover ? 1 : 0},config: {duration: 1000}
    // })

    const [zoom, setZoom] = useSpring(() => ({
        bgSize : '100%',
        config: config.slow
    }))

    return(
            <animated.div onMouseEnter = {e => {setZoom(() => {
                return{
                    bgSize:'120%'
                }
            })}
        
        } onMouseLeave = {e => setZoom(() => {
                return{
                    bgSize:'100%'
                }
            })} style = {{position: props.position, width: props.width, height: props.height, top: props.top, left: props.left, backgroundImage:`url(${props.imgSrc})`, backgroundSize: zoom.bgSize.interpolate(s => s)}} className="__te_adageInteriroStudio__WorkViewer_content">
                <animated.span className="__te_adageInteriorStudio__WorkViewer_contentTag">{props.children}</animated.span>
            </animated.div>
    )
}

//exporting here:
export default WorkViewer;