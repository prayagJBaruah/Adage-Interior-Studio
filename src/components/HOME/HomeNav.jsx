//This is the bottom menu, fixed component for desktop view which is present throughout all the routes.


//All imports here:
import {useSpring, animated, config, interpolate} from 'react-spring';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import HomeNavLinks from './HomeNavLinks';

//Main functional Component here:
const HomeNav = () => {

//array to store links and names and the id-counter
let self_links_id_counter = 1;
const self_links_data = [
    {
        "key": `__te_adageInteriorStudio__BottomRightFloat_desktopMenuList__listItems_id[${self_links_id_counter++}]`,
        "link":"/studio",
        "name":"STUDIO"
    },
    {
        "key": `__te_adageInteriorStudio__BottomRightFloat_desktopMenuList__listItems_id[${self_links_id_counter++}]`,
        "link":"/adage",
        "name":"ADAGE"
    },
    {
        "key": `__te_adageInteriorStudio__BottomRightFloat_desktopMenuList__listItems_id[${self_links_id_counter++}]`,
        "link":"/contact",
        "name":"CONTACT"
    }
]

    return(
        <div className="__te_adageInteriorStudio__HomeNav">
            <ul className="__te_adageInteriorStudio__HomeNav_desktopMenuList">
                {
                self_links_data.map(elem => <Link key = {elem.key} to = {elem.link}><HomeNavLinks children = {elem.name} key = {elem.key}/></Link>)
                }
            </ul>
        </div>
    )
}

//export component here:
export default HomeNav;