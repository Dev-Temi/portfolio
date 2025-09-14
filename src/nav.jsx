import React from "react";


function Nav() {
    return(
      
           <nav class="navbar navbar-expand-lg bg-body-tertiary  ">
  <div class="container-fluid">
    <a class=" space navbar-brand" href="./index.html"> DEV TEMI </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class=" navbar-nav">
        <a class=" nav-link active" aria-current="page" href="./index.html">Home</a>
        <a class=" nav-link" href="#AboutMe">About Me</a>
        <a class=" nav-link" href="#Services">Services</a>
        <a class=" nav-link" href="#Portfolio">Portfolio</a>
        <a class=" nav-link" href="#ContactMe">Contact Me</a>

        

      </div>
    </div>
  </div>
</nav>
        
    )
}


export default Nav;