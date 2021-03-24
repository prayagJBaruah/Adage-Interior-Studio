//This is the home component for adage, that is, the home page. All components used here will be found under the HOME sub component folder inside the primary component folder.

//All imports here:
import {useEffect, useRef, useLayoutEffect, useState} from 'react';
import { config, useSpring, animated, useChain } from 'react-spring';
import CharacterAnimation from '../CharacterAnimations';
import ParallaxBox from './ParallaxBoxWET';
import AdvancedParallaxBox from './AdvancedParallaxBoxWET';
import HomeNav from './HomeNav';
import {Link} from 'react-router-dom';
import Footer from '../Footer';
// import HomeNavLinks from './HomeNavLinks'

//main functional component here:
const Home = () => {  


    //This entire component is animated by scroll positions.
    //useReferences are used for the parent components as well as numerous child components.

    //All parent self_rendered_divs_refs here:
    const self_HomeIntro_ref = useRef();
    const self_HomeIntro__HomeNav_ref = useRef();
    const self_HomeOutro_ref = useRef();
    // const self_Hero_ref = useRef();
    // const self_HeroRef_wrapper = useRef();


    //All children references
    const self_HomeIntro_ref__child1 = useRef();
    const self_HomeIntro_ref__child2 = useRef();
    const self_HomeIntro_ref__child3 = useRef();
    const self_HomeIntro_ref__child4 = useRef();
    const self_HomeIntro_ref__child5 = useRef();
    const self_HomeIntro_ref__child6 = useRef();
    const self_HomeIntro_ref__introductionParagraph = useRef();
    const self_HomeOutro_ref_child1 = useRef();
    const self_HomeOutro_ref_child2 = useRef();

    //All useChains useStates, to set animations based off of scroll position
    const [HomeIntro__Animations,setHI_A] = useState(false);
    const [HomeOutro__Animations,setHO_A] = useState(false);
    const [Hero_Animations, setH_A] = useState(false);

    //All useChains here:
    useChain(HomeIntro__Animations ? [self_HomeIntro_ref__child1, self_HomeIntro_ref__child2, self_HomeIntro_ref__child3, self_HomeIntro_ref__child4, self_HomeIntro_ref__child5, self_HomeIntro_ref__child6, self_HomeIntro_ref__introductionParagraph,self_HomeIntro__HomeNav_ref] : [],[0.3,1.1,1.8,2,2.3,3.5,4.5,5])
    useChain(HomeOutro__Animations ? [self_HomeOutro_ref_child1, self_HomeOutro_ref_child2] : [],[0.3,1.4])


    //The scroll handler function for this page
    const self_scroll_handler = () => {
        if(window.innerHeight > self_HomeIntro_ref.current.getBoundingClientRect().top)
            setHI_A(true);
        if(window.innerHeight > self_HomeOutro_ref.current.getBoundingClientRect().top)
            setHO_A(true);
    }


    //Assign scroll event listener to window only after the self_HomeIntro_ref is initialized
    useLayoutEffect(() => {
        window.addEventListener('scroll', self_scroll_handler);
        return () => window.removeEventListener('scroll', self_scroll_handler);
    },[])


    //useSpring to set animations to the paragraphs
    const self_HomeIntro_introductionAnimationProps = useSpring({
        ref: self_HomeIntro_ref__introductionParagraph,
        opacity:1,
        from: {opacity:0},
        config:config.slow,
    })
    const self_HomeIntro_HomeNav = useSpring({
        ref: self_HomeIntro__HomeNav_ref,
        opacity:1,
        from: {opacity:0},
        config:config.slow,
    })

    return(
        <div className="__te_adageInteriorStudio__Home">
            <div className = "__te_adageInteriorStudio__Studio_hero_HOME">
            <p className="__te_adageInteriorStudio__Home_welcomeHeader">
                    WELCOME TO ADAGE <br></br> ONE OF GUWAHATI'S FINEST INTERIOR DESIGN STUDIOS
                </p>
                <div className="__te_adageInteriorStudio__Home_HERO">
                    <div id = "c1">
                    <CharacterAnimation children = {'ADAGE'} xTrans = {0} yTrans = {0}/>
                    </div>
                    <p><span>"</span>WE ADD MORE <span>AGE</span> TO YOUR <span>SPACE</span><span>"</span></p>
                </div>
            </div>
                
                <ParallaxBox/>
                <div ref = {self_HomeIntro_ref} style = {{display:'flex'}} className="__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                <CharacterAnimation children = {'INTERIOR'} xTrans = {0} yTrans = {0} parentRef = {self_HomeIntro_ref__child1}/>
                <CharacterAnimation children = {'ART'} xTrans = {0} yTrans = {0} parentRef = {self_HomeIntro_ref__child2}/>
                </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                <CharacterAnimation children = {'AT'} xTrans = {0} yTrans = {0} parentRef = {self_HomeIntro_ref__child3}/>
                <CharacterAnimation children = {'ITS'} xTrans = {0} yTrans = {0} parentRef = {self_HomeIntro_ref__child4}/>
                <CharacterAnimation children = {'FINEST'} xTrans = {0} yTrans = {0} parentRef = {self_HomeIntro_ref__child5}/>
                </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                <CharacterAnimation children = {'intro'} xTrans = {0} yTrans = {0} parentRef = {self_HomeIntro_ref__child6}/>
                </div>
                    <animated.p style = {self_HomeIntro_introductionAnimationProps}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. QUICK LINKS BELOW TO GO TO OUR PRIOROTY PAGES</animated.p>
                    <animated.div style = {self_HomeIntro_HomeNav}className="__te_adageInteriorStudio__Home_nav">
                        <HomeNav/>
                    </animated.div>
                </div>
                <AdvancedParallaxBox/>
                <Link to = '/studio'>
                <div ref = {self_HomeOutro_ref} className = "__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'NEXT-PAGE'} xTrans = {0} yTrans = {0} parentRef = {self_HomeOutro_ref_child1}/>
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'studio'} xTrans = {0} yTrans = {0} parentRef = {self_HomeOutro_ref_child2}/>
                    </div>
                </div>
                </Link>
                <Footer/>
        </div>
    )
}
export default Home;