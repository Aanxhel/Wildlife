import React from "react";

function Header(){
    return (
    <header class="header inicio">
        <div class="barra">
           
            <ul class="menu" data-animation="diagonal">
                <li>
                    <a href="#0">
                    Inicio
                    <span class="border border-top"></span>
                    <span class="border border-right"></span>
                    <span class="border border-bottom"></span>
                    <span class="border border-left"></span>
                    </a>
                </li>
                <li>
                    <a href="#0">
                    Quienes Somos
                    <span class="border border-top"></span>
                    <span class="border border-right"></span>
                    <span class="border border-bottom"></span>
                    <span class="border border-left"></span>
                    </a>
                </li>
                <li>
                    <a href="#0">
                    Contacto
                    <span class="border border-top"></span>
                    <span class="border border-right"></span>
                    <span class="border border-bottom"></span>
                    <span class="border border-left"></span>
                    </a>
                </li>
            </ul>
        </div>

        

    </header>
    )
  }


  export default Header;