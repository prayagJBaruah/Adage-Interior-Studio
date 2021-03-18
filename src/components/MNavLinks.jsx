//this controls all the links in the desktop version of this app to be independent of each instance in terms of their styling. 

//All imports here:
import {useSpring, animated, config, interpolate} from 'react-spring';
import { useEffect, useRef, useState } from 'react';
import {useLocation} from 'react-router-dom';
//The main functional component here:

const MNavLinks = ({children, routeName}) => {

    
    //useState to toggle styling
    const [on,set] = useState(false);    

    //useLocation for getting url 
    const location = useLocation();

    //useState for route high-lighting
    const [currRoute, setRoute] = useState('');

    //Accessing location using useEffect:
    useEffect(() => {
        if(location.pathname === '/')
            setRoute('HOME')
        else
            setRoute(location.pathname.replace("/","").toUpperCase());
    },[location.pathname])

    //useSpring to set styling
    const self_link_animProps = useSpring({
        transform: on ? 'translateX(3px) translateY(5px) scale(1.05)' : 'translateX(0px) translateY(0px) scale(1)',
        color: on ? '#F6DAA8' : '#ffffff',
        config:config.gentle
    })

    //Another spring to set the current route effect to a link
    const self_link_animProps_routeIndicator = useSpring({
        to:{transform:'scale(1.02) translateX(-10px)',color:"#f6daa8"},
        from:{transform:'scale(1) translateX(0px)',color:"#ffffff"},
        config:config.slow
    })

    return(
        <animated.li className = "__te_adageInteriorStudio__MNav_desktopMenuList__listItems" onMouseEnter = {e => set(true)} onMouseLeave = {e => set(false)} style = {(currRoute === routeName)?self_link_animProps_routeIndicator:self_link_animProps}>{children}</animated.li>
    )
}


//exporting component here:
export default MNavLinks;