//This is an advanced image viewer which enables the users to scroll through various images within the wrapper, pinch to zoom with finger gestures. 

import { forwardRef, useRef } from "react";
import { config, useSprings, animated, interpolate} from "react-spring";
import { useGesture } from "react-use-gesture";
import clamp from 'lodash-es/clamp'
import CharacterAnimation from '../CharacterAnimations';

//All imports here:

const imageData = [
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch10.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch8.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch19.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch13.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch14.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch15.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch16.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch17.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch18.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch9.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch20.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/arch21.jpg",
]

//The primary functional component here:
const InteractiveImageBox = forwardRef((props,ref) => {

    const index = useRef(0);

    const [divProps,set] = useSprings(imageData.length, i => ({
        xTrans: i * window.innerWidth,
        sc: 1,
        display:'block',
        config:config.slow
    }));
    
    const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
        if (down && distance > window.innerWidth / 2)
            cancel(index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, imageData.length-1))
        set(i => {
            return{
                xTrans: (i - index.current) * window.innerWidth + (down ? xDelta : 0),
                sc: down ? 1 - distance / window.innerWidth / 2 : 1,
                display: 'block',
            }
        })
    })

    return(
        <div className="__te_adageInteriorStudio__InteractiveImageBox">
            {divProps.map(({ xTrans, sc, display }, i) => (
                <animated.div {...bind()} key={i} style={{ display:display, transform: interpolate([xTrans, sc], (x, s) => `translateX(${x}px) scale(${s})`), backgroundImage: `url(${imageData[i]})`}}/>
            ))}
        </div>
    )
})

//exporting here:
export default InteractiveImageBox;