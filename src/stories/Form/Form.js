import React from "react";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";


export const Form = () => {
  return (
    <div class="col-md-3 mx-auto mb-3 text-center">
      <form class="py-3 border-bottom text-left">
        <h3>Buy Comic Books</h3>
        <div class="row">
          <div class="col-md-6 pb-3">
            <input
              type="text"
              class="form-control input"
              name="name"
              data-form-field="Name"
              placeholder="Your Name"
              required=""
            />
          </div>

          <div class="col-md-6 pb-3">
            <input
              type="tel"
              class="form-control input"
              name="phone"
              data-form-field="Phone"
              placeholder="Phone"
              required=""
            />
          </div>

          <div class="col-md-12 pb-3">
            <input
              type="email"
              class="form-control input"
              name="email"
              data-form-field="Email"
              placeholder="Email"
              required=""
            />
          </div>

          <div class="col-md-12 pb-3">
            <select class="custom-select" id="country" required="">
              <option value="">Country</option>
              <option>United States</option>
            </select>
          </div>

          <div class="col-md-12 pb-3">
            <input
              type="text"
              class="form-control input"
              name="address"
              data-form-field="Address"
              placeholder="Address"
              required=""
            />
          </div>

          <div class="col-md-12 pb-3">
            <select class="form-control">
              <option>Avengers: Wakanda Wild Side #01</option>
              <option>Avengers #01: Brain Games</option>
              <option>Ultimate Spider-Man: Spider-Verse #06</option>
              <option>Black Panther Comics</option>
            </select>
          </div>

          <div class="col-md-12 pb-3">
            <h4 class="mb-3">Payment</h4>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Credit card
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Debit card
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label class="form-check-label" for="exampleRadios3">
                PayPal
              </label>
            </div>
            <hr />
          </div>

          <div class="col-md-12 pb-3">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Save this information for next time
              </label>
            </div>
          </div>

          <div class="col-md-12 pb-3 input-group-btn">
            <button
              type="submit"
              class="btn btn-primary btn-form btn-block display-4"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};