//This is the js file where the final assembly of this react app is done. Dont touch this file if you are not sure, what you are doing.
//The mobile floating contents are also here, directly embedded

//All imports here
import OnWindowLoad from './components/OnWIndowLoad';
import TopLeftFloat from './components/TopLeftFloat';
import BottomRightFloat from './components/BottomRightFloat';
import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch, matchPath, useLocation} from 'react-router-dom';
import Home from './components/HOME/AdageHome';
import { useEffect, useRef, useState } from 'react';
import Adage from './components/ADAGE/AdageAbout';
import Work from './components/WORK/AdageWork';
import Studio from './components/STUDIO/AdageStudio';
import Contact from './components/CONTACT/AdageContact';
import Work1 from './components/WORK/Work1';
import Work2 from './components/WORK/Work2';
import Work3 from './components/WORK/Work3';
import Work4 from './components/WORK/Work4';
import MNavLinks from './components/MNavLinks';
import Work5 from './components/WORK/work5';

// import MNav from './components/MobileNav';
//Main component here

const App = () => {
    
    const [toggled, setToggle] = useState(false);
    const MNav = () => {

        //array to store links and names and the id-counter
        let self_links_id_counter = 1;
        const self_links_data = [
            {
                "key": `__te_adageInteriorStudio__BottomRightFloat_desktopMenuList__listItems_id[${self_links_id_counter++}]`,
                "link":"/",
                "name":"HOME"
            },
            {
                "key": `__te_adageInteriorStudio__BottomRightFloat_desktopMenuList__listItems_id[${self_links_id_counter++}]`,
                "link":"/studio",
                "name":"STUDIO"
            },
            {
                "key": `__te_adageInteriorStudio__BottomRightFloat_desktopMenuList__listItems_id[${self_links_id_counter++}]`,
                "link":"/work",
                "name":"WORK"
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
                <div className="__te_adageInteriorStudio__MNav">
                    <ul className="__te_adageInteriorStudio__MNav_desktopMenuList">
                        {
                        self_links_data.map(elem => <Link onClick = {() => setToggle(!toggled)} key = {elem.key} to = {elem.link}><MNavLinks routeName = {elem.name} children = {elem.name} key = {elem.key}/></Link>)
                        }
                    </ul>
                </div>
            )
        }
    const Trademark = () => {
        return(
            <div className = "tm" >@2021</div>
        )
    }    
    const DisplayMenu = () => {
        if(toggled)
            return(<MNav/>)
        else
            return null
    }
    const ToggleNav = () => {
        return(
            <button className = "MNavBtn" onClick = {() => setToggle(!toggled)}>MENU</button>
        )
    }
    const homeRef = useRef();

    return(
        <span className = "__te_adageInteriorStudio__App">
            {/* all floating components here */}

            <OnWindowLoad/>
            {/* <Trademark/> */}
            <ToggleNav/>
            <TopLeftFloat/>
            <BottomRightFloat/>
            <DisplayMenu/>
            {/* The main routes here */}
            {/* 1.Home Route here*/}

            <Switch>
                <Route path = "/" exact component = {Home}/>
            </Switch>

            {/* 2.Adage Route here */}

            <Switch>
                <Route path = "/adage" exact component = {Adage}/>
            </Switch>

            {/* 2.Studio Route here */}

            <Switch>
                <Route path = "/studio" exact component = {Studio}/>
            </Switch>
            

            {/* work routes here */}

            <Switch>
                <Route path = "/work" exact component = {Work}/>
            </Switch>
            <Switch>
                <Route path = "/work/panecea-the-village" exact component = {Work1}/>
            </Switch>
            <Switch>
                <Route path = "/work/protech-pelican-apartments" exact component = {Work2}/>
            </Switch>
            <Switch>
                <Route path = "/work/bs-fitness-gym" exact component = {Work3}/>
            </Switch>
            <Switch>
                <Route path = "/work/orchid-apartments" exact component = {Work4}/>
            </Switch>
            <Switch>
                <Route path = "/work/royal-crown" exact component = {Work5}/>
            </Switch>

            {/* contact route here */}
            <Switch>
                <Route path = "/contact" exact component = {Contact}/>
            </Switch>

        </span>
    )
}

//export component here

export default App;