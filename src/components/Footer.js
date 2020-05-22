//4. Create a Footer.jsx component that renders a <footer> element
import React from "react";
//to show a copyright message in a <p> with a dynamically updated year.
function Footer(){
        const currentYear = new Date().getFullYear();
    

        return ( <footer>    
        <p>© copyright Beuty Code {currentYear}</p>
        </footer>
        ); 

}

export default Footer;