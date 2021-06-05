import React from "react";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";
import PropTypes from 'prop-types';


export const Post = ({action}) => {
  return (
    <div class="col-md-9">
      <div class="card flex-md-row mb-4 border-light shadow-sm h-md-250">
        <img
          class="card-img-left flex-auto d-none d-md-block"
          height="250"
          src="https://res.cloudinary.com/dfog0e294/image/upload/v1547038234/webdev/Blog/img01.png"
          alt="Card image cap"
        />
        <div class="card-body d-flex flex-column align-items-start">
          <h3 class="card-title mb-0">Lego Spider-Man</h3>
          <p class="card-text mb-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            commodo odio aenean sed.
          </p>
          <button onClick={action} class="btn btn-outline-secondary" false>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

