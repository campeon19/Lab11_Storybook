import React from "react";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";


export const Footer = ({ blue, backgroundColor }) => {
    const mode = blue ? 'color--blue' : 'color--dark';
  return (
    <footer className={['border-top',mode].join(' ')} style={backgroundColor && { backgroundColor }}>
      <div class="container">
        <div class="row py-3 text-light">
          <div class="col-md-4">
            <img
              src="https://res.cloudinary.com/dfog0e294/image/upload/v1547038233/webdev/Blog/logo-LEGO-white.png"
              class="img-fluid"
              width="250"
              draggable="false"
              alt="Logo"
            />
          </div>

          <div class="col-md-4">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
              nec ultrices dui sapien eget mi proin.
            </p>
          </div>

          <div class="col-md-4">
            <h3>Contact me</h3>
            <p>
              <br/>
                <strong>
                  Email:{" "}
                  <a href="#" class="text-white">
                    contact@mail.com
                  </a>
                </strong>
              
            </p>
          </div>
        </div>

        <p class="lead text-center text-light">FOLLOW ME ON THE WEB</p>
        <div class="row mb-3 justify-content-center">
          <a href="https://www.facebook.com" role="button">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://twitter.com" role="button">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://youtube.com" role="button">
            <i class="fab fa-youtube fa-lg"></i>
          </a>
          <a href="https://pinterest.com" role="button">
            <i class="fab fa-pinterest-p fa-lg"></i>
          </a>
        </div>

        <div class="row py-3 d-flex justify-content-center border-top">
          <small class="d-block text-light">
            Copyright &copy; 2025 Rob Smith Blog
          </small>
        </div>
      </div>
    </footer>
  );
};
