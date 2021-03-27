import React from "react";

//importacion de iconos
import FaceBook from '../icons/fb.png';


function Footer() {
    return (

        <div className="jumbotron" id="footerEdit">

            <div id="footerIcons">
                <img src={FaceBook} alt='FaceBook'></img>
            </div>

            <div id="footterCopyright">
                <p>© Copyright - A quien corresponfa por "nombre de la empresa"</p>
            </div>

        </div>




    )

}
export default Footer;