import React from "react";


 
const currentYear = new Date().getFullYear()


function Futter(){
    return(
        <section id="Futter">
            <p>Copyright Dev-Temi {currentYear} </p>
        </section>
    )
}

export default Futter;