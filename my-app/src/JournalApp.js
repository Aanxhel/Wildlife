import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Alert} from 'react-bootstrap'

import Caballo from './img/caballo.png'

function JournalApp(){
    return(
        <div className='JournalApp'>
            <h1>JournalApp</h1>
            

            <nav class="navbar 
            navbar-expand-sm 
            bg-dark 
            navbar-dark
            justify-content-center">
                
            <ul class="navbar-nav" >
                <li class="nav-item">
                <a class="navbar-brand" href="#">Quienes somos?</a>
                </li>
                <li class="nav-item">
                <a class="navbar-brand" href="#">Productos</a>
                </li>
                <li class="nav-item">
                <a class="navbar-brand" href="#">Fuego</a>
                </li>

                <li class="nav-item">
                <a class="navbar-brand" href="#">Otro Item</a>
                </li>

            </ul>

            </nav>

            <div class = 'container'>
                <div class="row">
                    <div class="col-sm-4">
                    <h3>Column 1</h3>
                    
                        <img src ={Caballo} class="mx-auto d-block"></img>

                    
                </div>



                <div class="col-sm-4">
                    <h3>Column 2</h3>
                    <p>Lorem ipsum dolor..</p>
                </div>
                <div class="col-sm-4">
                    <h3>Column 3</h3>
                    <p>Lorem ipsum dolor..</p>
                </div>
            </div>

            </div>
            
            
            

        </div>
    );

}

export default JournalApp;