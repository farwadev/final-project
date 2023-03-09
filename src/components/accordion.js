import React from "react";
// import css , js

import "../pages/style/accordion.css";

function accordion(props) {
  return (
    <div>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {/* heading 1 */}
              BIKES
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Bikes Services.</strong><ul>
                <li>
                Polorise 
                </li>
                <li>
                Slingshot 
                </li>
                <li>
                Harley Davidson
                </li>
                <li>
                Honda Goldwing
                </li>
                <li>
                Honda All Models
                </li>
                <li>
                Yamaha All Models
                </li>
                <li>
                Suzuki
                </li>
                <li>
                Boom Trike
                </li>
              </ul>  
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {/* heading 2 */}
              CARS
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Cars Services.</strong>
              <ul>
                <li>
                  Nissan 
                </li>
                <li>
                 Toyota
                </li>
                <li>
                Hundai
                </li>
                <li>
                  JMC
                </li>
                <li>
                  Chevrolet
                </li>
                <li>
                  Lexus
                </li>
                <li>
                Suzuki
                </li>
              </ul> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {/* heading 3 */}
              JETSKI
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Jetski Services.</strong>
              <ul>
                <li>
                 Yamaha
                </li>
                <li>
                 Suzuki
                </li>
                <li>
                 Seadoo Jetski
                </li>
                <li>
                 Kawasaki
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default accordion;
