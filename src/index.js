//This is the starter js file for the entire react app.
import reactDom from 'react-dom';
import react, {useEffect} from 'react';
import {HashRouter as Router, Route, Switch, Link, useRouteMatch, matchPath, useLocation} from 'react-router-dom';
import './styles.css';
import App from './App';


//Functional component to set react router to scroll to top when the path changes
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

reactDom.render(<Router basename = "/"><ScrollToTop/><App/></Router>, document.getElementById('__te_sites__adageInteriorStudio'));