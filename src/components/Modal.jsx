import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useEffect } from 'react';
const Modal = ({open, close}) => {
    
    const [formVisible, setFormVisibility] = useState(true);
    const [paraVisible, setParaVisibility] = useState(false);
    const [para2Visible, setPara2Visibility] = useState(false);
    useEffect(() => {
        setFormVisibility(true);
        setPara2Visibility(false);
        setParaVisibility(false);
    },[open,close])
    const PARA = () => {
        if(!paraVisible)
        return null;
        return(
            <div className="paraModal">
                <p>Form submitted Successfully, you will receive an email from us shortly. You may close this Popup now.</p>
            </div>
        )
    }
    const PARA1 = () => {
        if(!para2Visible)
        return null;
        return(
            <div className="paraModal1">
                <p>Please wait, Processing your request. Do not close this popup window now until confirmation</p>
            </div>
        )
    }
    const formSubmit = (e) => {
        e.preventDefault();
        setFormVisibility(false);
        setPara2Visibility(true);
        emailjs.sendForm('service_degdvly', 'template_pm2dh9g', e.target, 'user_kc8Uf3baEB7sDGqbAz01K')
        .then((result) => {
            setFormVisibility(false);
            setParaVisibility(true);
            setPara2Visibility(false);
        }, (error) => {
            console.log(error.text);
        });
    }
    const FORM = () => {
        if(!formVisible)
            return null;
        return(
            <div className = "modalForm">
                <p className="modalFormDesc">Fill in the below form for an enquiry</p>
                <form onSubmit = {formSubmit}>
                <span>
                    <label htmlFor="name">
                        NAME
                    </label>
                    <input id = "name" name = "name" required type="text"/>
                </span>
                <span>
                    <label htmlFor="mail">
                        E-MAIL
                    </label>
                    <input id = "mail" name = "mail" required type="email"/>
                </span>
                <span>
                    <label htmlFor="phone">
                        PHONE-NO
                    </label>
                    <input id = "phone" name = "phone" required type="tel"/>
                </span>
                <span>
                    <label htmlFor="address">
                        ADDRESS
                    </label>
                    <input id = "address" name = "address" required type="text"/>
                </span>
                <span>
                    <label htmlFor="message">
                        YOUR QUERY
                    </label>
                    <textarea id = "message" name = "message" required type="text"/>
                </span>
                <button type = "submit" >SUBMIT</button>
                </form>
            </div>
        )
    }

    if(!open)
        return null;

    return ReactDOM.createPortal((
        <div className = "__te_adageInteriorStudio__Modal">
            <div className="mainModal">
                <span onClick = {close} className="closeBtn">CLOSE</span>
                <FORM/>
                <PARA1/>
                <PARA/>
            </div>
        </div>
    ),
    document.getElementById('__te_sites__adageInteriorStudio_Portal'));
}
export default Modal;