import React from "react";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";


export const Logo = ({action, blue, backgroundColor}) => {
    const mode = blue ? 'color--blue' : 'color--dark';
    return (
    <header className={['shadow-sm',mode].join(' ')} style={backgroundColor && { backgroundColor }} >
            <div className="shadow-sm rounded">
                <img className="d-block mx-auto" src="https://res.cloudinary.com/dfog0e294/image/upload/v1547038233/webdev/Blog/logo-LEGO-white.png" width="200" draggable="false" alt="Logo"/>
            </div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                    <a class="navbar-brand mr-5" href='#' onClick={action} >LEGO Adventures</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About me</a>
                        </li>

                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                        </a>
                        <div class="dropdown-menu" id="custom-dropdown-menu">
                            <a class="dropdown-item" href="#">
                            Spider-Man
                            <span class="badge badge-secondary badge-info ml-2">
                                New
                            </span>
                            </a>
                            <a class="dropdown-item" href="#">Batman</a>
                            <a class="dropdown-item" href="#">Panther</a>
                        </div>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Partners</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>

                </div>
            </nav>

    </header>
    )
};

