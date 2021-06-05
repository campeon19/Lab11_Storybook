import React from "react";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";


export const About = () => {
  return (
    <div class="col-md-3 mx-auto mb-3 text-center">
    <div class="blog-sidebar p-2 shadow-sm rounded">
      <h2>About</h2>
      <img
        src="https://res.cloudinary.com/dfog0e294/image/upload/v1547038232/webdev/Blog/user.png"
        class="img-fluid rounded-circle"
        width="150"
        alt="Rob Smith"
      />
      <h4>Rob Smith</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
        imperdiet diam. In id nibh varius, interdum mauris eu, sollicitudin
        nunc. Ut pretium tellus metus, at efficitur elit venenatis sed.
      </p>
    </div>
    </div>
  );
};