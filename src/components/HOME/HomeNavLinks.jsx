//this controls all the links in the desktop version of this app to be independent of each instance in terms of their styling. 

//All imports here:
import {useSpring, animated, config, interpolate} from 'react-spring';
import { useEffect, useRef, useState } from 'react';
import {useLocation} from 'react-router-dom';
//The main functional component here:

const HomeNavLinks = ({children}) => {

    
    //useState to toggle styling
    const [on,set] = useState(false);    

    //useSpring to set styling
    const self_link_animProps = useSpring({
        transform: on ? 'translateX(3px) translateY(5px) scale(1.05)' : 'translateX(0px) translateY(0px) scale(1)',
        color: on ? '#ffffff' : '#f6daa8',
        config:config.gentle
    })

    return(
        <animated.li className = "__te_adageInteriorStudio__HomeNav_desktopMenuList__listItems" onMouseEnter = {e => set(true)} onMouseLeave = {e => set(false)} style = {self_link_animProps}>{children}</animated.li>
    )
}


//exporting component here:
export default HomeNavLinks;