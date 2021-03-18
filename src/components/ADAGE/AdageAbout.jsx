//This is the home component for adage, that is, the home page. All components used here will be found under the HOME sub component folder inside the primary component folder.

// import { useEffect } from "react";

//All imports here:
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useSpring, animated, interpolate, config, useChain} from 'react-spring';
import CharacterAnimation from '../CharacterAnimations';
import HomeNav from './AdageNav';
import AboutDescription from './AboutDescription';
import DraggableImages from './DraggableImages';
import {Link} from 'react-router-dom';
import Footer from '../Footer';
//main functional component here:
const imgData = [
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/boss.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/boss.jpg",
    "https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/boss.jpg",
]
const Adage = () => {


    const self_Outro_ref = useRef();
const self_Outro_ref_child1 = useRef();
    const self_Outro_ref_child2 = useRef();
const [self_Outro__anim, setO_A] = useState(false);
const self_scroll_handler = () => {
        
        if(window.innerHeight > self_Outro_ref.current.getBoundingClientRect().top)
            setO_A(true);
    }
useLayoutEffect(() => {
        window.addEventListener('scroll', self_scroll_handler);
        return () => window.removeEventListener('scroll', self_scroll_handler);
    },[])
    useChain(self_Outro__anim ? [self_Outro_ref_child1, self_Outro_ref_child2] : [], [0.3,1]);
    const self_StudioIntro_descStyle = useSpring({
        opacity:1,
        from:{
            opacity:0
        },
        config:config.molasses
    });
    return(
        <div className="__te_adageInteriorStudio__Adage">
            <div className="__te_adageInteriorStudio__Work_hero_sub wsm">
            <animated.div className="__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'ARPITA'} xTrans = {0} yTrans = {0} />
                    <CharacterAnimation children = {'AND'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'HER'} xTrans = {0} yTrans = {0} />
                    <CharacterAnimation children = {'TEAM'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'about'} xTrans = {0} yTrans = {0}/>
                    </div>
                    <animated.p style = {self_StudioIntro_descStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </animated.p>
                    <HomeNav style = {self_StudioIntro_descStyle}/>
                </animated.div>
            </div>
            <AboutDescription movementVar = {50} imgSrc = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80 668w" children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque eleifend ante, et sollicitudin nibh bibendum id. In eu ligula urna. Ut at gravida libero. In hac habitasse platea dictumst. Morbi accumsan lacus vel semper ullamcorper. Vestibulum tincidunt lectus lectus, ut placerat purus posuere sed. Vivamus suscipit rutrum vehicula. Nullam ullamcorper feugiat justo sed laoreet. Integer vulputate placerat ex, non cursus urna tincidunt ac."/>
            <AboutDescription movementVar = {40} imgSrc = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80 334w" children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque eleifend ante, et sollicitudin nibh bibendum id. In eu ligula urna. Ut at gravida libero. In hac habitasse platea dictumst. Morbi accumsan lacus vel semper ullamcorper. Vestibulum tincidunt lectus lectus, ut placerat purus posuere sed. Vivamus suscipit rutrum vehicula. Nullam ullamcorper feugiat justo sed laoreet. Integer vulputate placerat ex, non cursus urna tincidunt ac."/>
            <AboutDescription movementVar = {30} imgSrc = "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80 751w" children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque eleifend ante, et sollicitudin nibh bibendum id. In eu ligula urna. Ut at gravida libero. In hac habitasse platea dictumst. Morbi accumsan lacus vel semper ullamcorper. Vestibulum tincidunt lectus lectus, ut placerat purus posuere sed. Vivamus suscipit rutrum vehicula. Nullam ullamcorper feugiat justo sed laoreet. Integer vulputate placerat ex, non cursus urna tincidunt ac."/>
            <DraggableImages imgData = {imgData}/>
            <Link to = '/contact'>
            <div ref = {self_Outro_ref} className = "__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'NEXT-PAGE'} xTrans = {0} yTrans = {0} parentRef = {self_Outro_ref_child1}/>
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'contact'} xTrans = {0} yTrans = {0} parentRef = {self_Outro_ref_child2}/>
                    </div>
            </div>
            </Link>
            <Footer/>
        </div>
    )
}
export default Adage;