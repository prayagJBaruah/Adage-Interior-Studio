//This is the work page of adage interior studio. This provides a maximum of 5 real world based projects by adage. 

//All imports here:
import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import {useSpring, animated, interpolate, useSprings, useChain, useTrail, config} from 'react-spring';
import CharacterAnimation from '../CharacterAnimations';
import Footer from '../Footer';
import {Link} from 'react-router-dom';
import WorkViewer from './WorkViewer';
//The primary component here:

const Work = () => {
    //useRef for parent components:
    const self_Outro_ref = useRef();

    //useRef for children components:
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
    const [winSize, setSize] = useState(window.innerWidth)
    useLayoutEffect(() => {
        window.addEventListener('scroll', self_scroll_handler);
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
        })
        return () => window.removeEventListener('scroll', self_scroll_handler);
    },[])
    useChain(self_Outro__anim ? [self_Outro_ref_child1, self_Outro_ref_child2] : [], [0.3,1]);
    //useSprings for animations
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
    const Cd = () => {
        if(winSize <= 480){
            return(
                <>
                <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/panecea-the-village'>
            <WorkViewer children = "LOREM IPSUM" position = 'relative' width = '54vw'  height = '40vh' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r4_6.png'/>
            </Link></div>
            <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/protech-pelican-apartments'>
            <WorkViewer children = "LOREM IPSUM" position = 'absolute' top = "0" left = "0" width = '50vw'  height = '100%' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r2_1.jpg'/>
            </Link></div>
            <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/bs-fitness-gym'>
            <WorkViewer children = "LOREM IPSUM" position = 'absolute' top = "10%" left = "40%" width = '40vw'  height = '80%' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r3_1.jpg'/>
            </Link></div>
            <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/orchid-apartments'>
            <WorkViewer children = "LOREM IPSUM" position = 'absolute' top = "0" left = "20%" width = '56vw'  height = '100%' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r0_2.jpg'/>
            </Link></div>
            <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/royal-crown'>
            <WorkViewer children = "LOREM IPSUM" position = 'relative' width = '54vw'  height = '40vh' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r4_2.jpg'/>
            </Link></div>
            </>
            )
        }
        else{
            return(<>
            <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/panecea-the-village'>
            <WorkViewer children = "LOREM IPSUM" position = 'relative' width = '34vw'  height = '100vh' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r4_6.png'/>
            </Link></div>
            <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/protech-pelican-apartments'>
            <WorkViewer children = "LOREM IPSUM" position = 'absolute' top = "0" left = "0" width = '40vw'  height = '100%' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r2_1.jpg'/>
            </Link></div>
            <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/bs-fitness-gym'>
            <WorkViewer children = "LOREM IPSUM" position = 'absolute' top = "0" left = "40%" width = '30vw'  height = '100%' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r3_1.jpg'/>
            </Link></div>
            <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/orchid-apartments'>
            <WorkViewer children = "LOREM IPSUM" position = 'absolute' top = "0" left = "20%" width = '34vw'  height = '100%' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r0_2.jpg'/>
            </Link></div>
            <div className="__te_adageInteriorStudio__WorkViewer"><Link to = '/work/royal-crown'>
            <WorkViewer children = "LOREM IPSUM" position = 'relative' width = '34vw'  height = '100vh' imgSrc = 'https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/r4_2.jpg'/>
            </Link></div></>
            )
        }
    }
    return(
        <div className="__te_adageInteriorStudio__Work">
            <div className="__te_adageInteriorStudio__Work_hero">
            <animated.div style = {{transform:self_StudioIntro_styleProps.y.interpolate(y => `translateY(${-y/10}px)`)}} className="__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'EXQUISITE'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'PROJECTS'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'work'} xTrans = {0} yTrans = {0}/>
                    </div>
                    <animated.p style = {self_StudioIntro_descStyle}>
                        OUR DILIGENT TEAM MAKES SURE TO DELIVER THE PRODUCT TO YOUR EXPECTATIONS AND LEAVES NO STONE UNTURNED TO SUPRISE YOU WITH THE FINAL RESULT. BELOW ARE SOME OF OUR BEST WORK. CLICK ON THEM TO OPEN THE DETAILED WORK PAGE 
                    </animated.p>
                </animated.div>
            </div>
            <Cd/> 
            <Link to = '/adage'>
            <div ref = {self_Outro_ref} className = "__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'NEXT-PAGE'} xTrans = {0} yTrans = {0} parentRef = {self_Outro_ref_child1}/>
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'adage'} xTrans = {0} yTrans = {0} parentRef = {self_Outro_ref_child2}/>
                    </div>
            </div>
            </Link>
            <Footer/>
        </div>
    )
}

//exporting component here:
export default Work;