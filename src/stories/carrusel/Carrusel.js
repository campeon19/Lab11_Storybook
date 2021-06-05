import React from "react";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';
import "../style.css";


export const Carrusel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img
            src="https://res.cloudinary.com/dfog0e294/image/upload/v1547723569/webdev/Blog/slide-01.png"
            class="d-block w-100 mh-100"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 class="display-4 text-dark">NEW POST</h2>
            <h3 class="display-5 text-dark">Spider-Man Adventures</h3>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="https://res.cloudinary.com/dfog0e294/image/upload/v1547723569/webdev/Blog/slide-02.png"
            class="d-block w-100 mh-100"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 class="display-4 text-dark">NEW POST</h2>
            <h3 class="display-5 text-dark">Batman Adventures</h3>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="https://res.cloudinary.com/dfog0e294/image/upload/v1547723568/webdev/Blog/slide-03.png"
            class="d-block w-100 mh-100"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 class="display-4 text-dark">NEW POST</h2>
            <h3 class="display-5 text-dark">Black Panther Adventures</h3>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};