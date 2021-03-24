//This is 1st work component. Then entire code here is WET. Will do a DRY update soon.

//All imports here:
import ImageShuffler from './ImageShuffler';
import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import {animated, interpolate, useSprings, useSpring, useChain, config} from 'react-spring';
import CharacterAnimation from '../CharacterAnimations';
import {Link} from 'react-router-dom';
import Footer from '../Footer';
import AdvancedParallaxBox from './AdvancedParallaxBoxDRY';
import ParallaxBox from './ParallaxBoxDRY';
//The primary component here:
const imageData1 = [
    'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r4_1.jpg',
    'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r4_4.jpg',
    'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r4_5.jpg',
    'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r4_0.jpg',
]
const Work1 = () => {
    const self_Outro_ref = useRef();
    const self_Outro_ref_child1 = useRef();
    const self_Outro_ref_child2 = useRef();
    const [self_Outro__anim, setO_A] = useState(false);
    const self_scroll_handler = () => {
        setStudioIntro(() => {
            return{
                y:window.scrollY,
            }
        })
        if(window.innerHeight > self_Outro_ref.current.getBoundingClientRect().top)
            setO_A(true);
    }
    //useLayoutEffect
    useLayoutEffect(() => {
        window.addEventListener('scroll', self_scroll_handler);
        return () => window.removeEventListener('scroll', self_scroll_handler);
    },[])
    useChain(self_Outro__anim ? [self_Outro_ref_child1, self_Outro_ref_child2] : [], [0.3,1]);
    const [self_StudioIntro_styleProps, setStudioIntro] = useSpring(() => ({
        y:0,
        config:config.slow,
    }));
    const self_StudioIntro_descStyle = useSpring({
        opacity:1,
        from:{
            opacity:0
        },
        config:config.molasses
    });
    return(
        <div className="__te_adageInteriorStudio__WorkModules">
            <ImageShuffler imgData = {imageData1}/>
            <div className="__te_adageInteriorStudio__Work_hero_sub">
            <animated.div className="__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'ABOUT'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'PROJECT'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'panecea'} xTrans = {0} yTrans = {0}/>
                    </div>
                    <animated.p style = {self_StudioIntro_descStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </animated.p>
                </animated.div>
            </div>
            <AdvancedParallaxBox img1Src = {imageData1[1]} img2Src = {imageData1[0]}/>
            <ParallaxBox img1Src = {imageData1[2]} img2Src = {imageData1[3]} img3Src = {imageData1[2]}/>
            <Link to = '/work/protech-pelican-apartments'>
            <div ref = {self_Outro_ref} className = "__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'NEXT-PROJECT'} xTrans = {0} yTrans = {0} parentRef = {self_Outro_ref_child1}/>
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'pelican-apts'} xTrans = {0} yTrans = {0} parentRef = {self_Outro_ref_child2}/>
                    </div>
            </div>
            </Link>
            <Footer/>
        </div>
        
    )
}

//exporting here:
export default Work1;