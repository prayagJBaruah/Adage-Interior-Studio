import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import {useSpring, animated, interpolate, useSprings, useChain, useTrail, config} from 'react-spring';
import CharacterAnimation from '../CharacterAnimations';
import {Link} from 'react-router-dom';
import Footer from '../Footer';


const Contact = () => {

    const self_StudioIntro_descStyle = useSpring({
        opacity:1,
        from:{
            opacity:0
        },
        config:config.molasses
    });

    return(
        <div className="__te_adageInteriorStudio__Contact">
            <div className="__te_adageInteriorStudio__Work_hero_sub wsm">
            <animated.div className="__te_adageInteriorStudio__Home_intro">
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'CONNECT-WITH'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers">
                    <CharacterAnimation children = {'ADAGE'} xTrans = {0} yTrans = {0} />
                    </div>
                    <div className="__te_adageInteriorStudio__Home_intro__spacers_handwritten">
                    <CharacterAnimation children = {'contact'} xTrans = {0} yTrans = {0}/>
                    </div>
                    <animated.p style = {self_StudioIntro_descStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  
                    </animated.p>
                </animated.div>
            </div>
            <div className="__te_adageInteriorStudio__Contact_hero">
                <span>
                    <p className = "descHeader">CONTACT US</p>
                    <a href="mailto:arpita.adage@gmail.com">arpita.adage@gmail.com</a>
                    <a href="tel:9654838456">9654838456</a>
                </span>
                <span>
                <p className = "descHeader">ADDRESS</p>
                    <a href="mailto:arpita.adage@gmail.com">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</a>
                </span>
            </div>
            <div className="__te_promo">
                <a href="https://thetektap.co.in/pages/Theesaan%20Enterprises/Theesaan%20Enterprises.html"><p>Coded with <img width = "10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRYhe2UUUoCURSG/yMYgQvwOXcQuYh8TxBXIa2jB+utTRhUu4jagW8imq+9CMLXQ3fgauPMVedeI/xh4Mww537fnAMjnXLKXwxQA/rACzAFVsDM3d8A9ZyeOtAFXt27K9f7DPSAWii8BXxQnDFw7fV03LOivAMXIfDPkoP83LkrNPOtEvyMvezLq8gb3jr8vfQkXQbt6bC0JXXzBPoJ4L9YvsBVQoF2VlhWAEtJZ4kElmZ2Lq1PYJIIvsbyBZ4SCoyywl9BU9JYUiMy/EtSy8wWkjcBM5tLuo0Ml6RBBs8NMIz4ExqW6gEG3EeAPwJWKhBJIhweQWJ3eIUS+8MrkDgcviHxcBT4HhLVw3eQiAcPkIgPL5BIB8+RSA/fkDgO/N/kG7ztJC6dJsGDAAAAAElFTkSuQmCC"></img> by Theesaan Enterprises</p></a>
            </div>
            <Footer/>
            
        </div>
    )
}
export default Contact;