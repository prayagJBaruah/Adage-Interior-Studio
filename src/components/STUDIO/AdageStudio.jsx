//This is the second page for adage. This component may have class names equal to those components in the home page, because, the same components were used. This was done to save time and keep the code DRY

//All imports here:
import CharacterAnimation from '../CharacterAnimations';
import {useSpring, animated, interpolate, config, useChain} from 'react-spring';
import {useState, useRef, useEffect, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';
import AdvancedParallaxBox from './AdvancedParallaxBoxStudio1';
import HomeNav from './StudioNav';
import IneractiveImageBox from './InteractiveImageBoxStudio';
import ParallaxBox from './ParallaxBoxStudio1';
import Footer from '../Footer';
import InteractiveImageBox from './InteractiveImageBoxStudio';
//The main functional component here:

const Studio = () => {

    //useRef for all parent components:
    const self_intro2 = useRef();
    const self_Outro_ref = useRef();


    //useRef for all child components to trigger animations on scroll:
    const self_intro2__child1 = useRef();
    const self_intro2__child2 = useRef();
    const self_intro2__child3 = useRef();
    const self_intro2__child4 = useRef();
    const self_intro2__child5 = useRef();
    const self_intro2__child6 = useRef();
    const self_Outro_ref_child1 = useRef();
    const self_Outro_ref_child2 = useRef();

    //useSprings for animated styles
    const self_StudioIntro_descStyle = useSpring({
        opacity:1,
        from:{
            opacity:0
        },
        config:config.molasses
    });
    const self_StudioIntro2_descStyle = useSpring({
        ref:self_intro2__child5,
        opacity:1,
        from:{
            opacity:0
        },
        config:config.molasses
    });
    const self_HomeIntro_HomeNav = useSpring({
        ref: self_intro2__child6,
        opacity:1,
        from: {opacity:0},
        config:config.slow,
    })
    const [self_StudioIntro_styleProps, setStudioIntro] = useSpring(() => ({
        y:0,
        config:config.slow,
    }));

    //useStates to handle component useChains:
    const [self_intro2__anim, setI2_A] = useState(false);
    const [self_Outro__anim, setO_A] = useState(false);

    const self_scroll_handler = () => {
        setStudioIntro(() => {
            return{
                y:window.scrollY,
            }
        })
        if(window.innerHeight > self_intro2.current.getBoundingClientRect().top)
            setI2_A(true);
        if(window.innerHeight > self_Outro_ref.current.getBoundingClientRect().top)
            setO_A(true);
    }

    //useChain to complete Animations:
    useChain(self_intro2__anim ? [self_intro2__child1, self_intro2__child2, self_intro2__child3, self_intro2__child4, self_intro2__child5, self_intro2__child6]: [], [0.3, 1.4, 1.5, 2.5, 3.5, 4]);
    useChain(self_Outro__anim ? [self_Outro_ref_child1, self_Outro_ref_child2] : [], [0.3,1]);

    useLayoutEffect(() => {
        window.addEventListener('scroll', self_scroll_handler);
        return () => window.removeEventListener('scroll', self_scroll_handler);
    },[])


    return(
        <animated.div className="__te_adageInteriorStudio__Studio">
            <div className="__te_adageInteriorStudio__Studio_hero">
            <animated.div style = {{transform:self_StudioIntro_styleProps.y.interpolate(y => `translateY(${-y/10}px)`)}} className="__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'YOU'} xTrans = {0} yTrans = {0} />
                    <CharacterAnimation children = {'DREAM-IT'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'WE'} xTrans = {0} yTrans = {0} />
                    <CharacterAnimation children = {'BUILD-IT'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'studio'} xTrans = {0} yTrans = {0}/>
                    </div>
                    <animated.p style = {self_StudioIntro_descStyle}>
                        A FULLY EQUIPPED AND SOPHISTICATED DESIGN STUDIO AT ADAGE ENSURES OUTMOST CUSTOMER SATISFACTION. WITH A WIDE VARIETY OF 3D RENDERED INTERIOR DESIGNS TO CHOOSE FROM, CHERISH IN HAPPINESS TO SEE YOUR CHOSEN RENDERS COME TO LIFE WITH ADAGE.
                    </animated.p>
                </animated.div>
            </div>
            <AdvancedParallaxBox/>
            <animated.div ref = {self_intro2} className="__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'SOPHISTICATED'} xTrans = {0} yTrans = {0} parentRef = {self_intro2__child1}/>
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'MODERN'} xTrans = {0} yTrans = {0} parentRef = {self_intro2__child2}/>
                    <CharacterAnimation children = {'DESIGNS'} xTrans = {0} yTrans = {0} parentRef = {self_intro2__child3}/>
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'design'} xTrans = {0} yTrans = {0}parentRef = {self_intro2__child4}/>
                    </div>
                    <animated.p style = {self_StudioIntro2_descStyle}>
                        THE TEAM OF ADAGE ENSURES THAT YOUR VISIONS ARE HAND CRAFTED INTO REALITY. OUR SKILLED DESIGNERS ARE EVER READY TO HELP YOU WITH YOUR IDEAS AND CONVERT THEM INTO 3D RENDERS. THESE COME IN HANDY AS THEY TRUELY REPRESENT THE FINAL DESIGNS. BROWSE THROUGH OUR INTERACTIVE GALLARY BELOW TO SEE SOME OF THESE RENDERS
                    </animated.p>
                    <animated.div style = {self_HomeIntro_HomeNav}className="__te_adageInteriorStudio__Home_nav">
                        <HomeNav/>
                    </animated.div>
                </animated.div>
            <InteractiveImageBox/>
            <ParallaxBox/>
            <Link to = '/work'>
            <div ref = {self_Outro_ref} className = "__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'NEXT-PAGE'} xTrans = {0} yTrans = {0} parentRef = {self_Outro_ref_child1}/>
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'work'} xTrans = {0} yTrans = {0} parentRef = {self_Outro_ref_child2}/>
                    </div>
            </div>
            </Link>
            <Footer/>
        </animated.div>
    )
}


//exporting component here:
export default Studio;