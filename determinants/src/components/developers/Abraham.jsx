import React from "react";
import "./dev.css";
import AbrahamPhoto from "./AbrahamPhoto";

const Abraham = () => {
  return (
    <div>
      <div className="dev__container">
        <AbrahamPhoto />
      </div>
      <h3 className="skills__title">Abraham Hernandez Alvarado</h3>
      <div className="skills__content">
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Intermedio</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Intermedio</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__level">Básico</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Intermedio</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Intermedio</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Básico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abraham;
