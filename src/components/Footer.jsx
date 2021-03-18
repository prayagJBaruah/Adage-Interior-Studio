//This is the footer for all the pages in Adage.

//All imports here:


//The main functional component here:
const Footer = () => {
    return(
        <div className="__te_adageInteriorStudio__Footer">
            <p>@2021 ADAGE INTERIOR STUDIO, ALL RIGHTS RESERVED <br></br> GET IN TOUCH WITH US</p>
            <span>
                <ul>
                    <li><a target = "_blank" href="https://www.instagram.com"><img src="https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/insta.png" alt="Insta logo"/></a></li>
                    <li><a target = "_blank" href="https://www.facebook.com"><img src="https://theesaan-enterprises-server.herokuapp.com/sites/adage/data/visual-data/fb.png" alt="fb logo"/></a></li>
                </ul>
            </span>
        </div>
    )
}

//exporting here:
export default Footer;