import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faCode, faGears } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = ["React", "JavaScript", "HTML5", "CSS3", "Flask"];

const labelsSecond = [
  "Python",
  "Java",
  "C++",
  "Git",
  "Flask",
  "Node.js",
  "AWS",
  "SQL",
  "OAuth2.0",
];

const labelsThird = [
  "pandas",
  "NumPy",
  "TensorFlow",
  "Keras",
  "scikit-learn",
  "Matplotlib",
  "Seaborn",
  "Jupyter Notebooks",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5} size="3x" />
            <h3>Front-end Development</h3>
            <p>
              Learning front-end development with React, JavaScript, HTML5, and
              CSS3, focusing on creating responsive, interactive, and visually
              appealing user interfaces that enhance user experience.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faGears} size="3x" />
            <h3>Back-end Development</h3>
            <p>
              Currently expanding knowledge in backend development, focusing on
              building scalable and secure systems with Flask, Python, SQL,
              Java, and C++. Gaining experience in integrating APIs, managing
              databases, optimizing server-side functionality, and enhancing
              application performance.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Machine Learning & Data Analysis</h3>
            <p>
              Expanding my skills in machine learning and data analysis by
              developing predictive models with TensorFlow, Keras, and
              scikit-learn. Working with large datasets, using tools like pandas
              and NumPy to preprocess data and uncover insights, and leveraging
              Matplotlib to visualize results and track model performance.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
