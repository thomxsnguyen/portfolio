import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Nov 2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Boundary Remote Sensing Systems
            </h4>
            <ul>
              <li>
                Integrated Python-based quantum computing frameworks (e.g.,
                Qiskit, Cirq) to enhance data processing capabilities for
                high-resolution geospatial imaging, improving speed and
                precision in complex data analyses.
              </li>
              <li>
                Designed and developed modular, scalable systems using AWS
                Lambda, React, and Node.js to support real-time data
                visualization and cloud-based processing across large datasets.
              </li>
              <li>
                Collaborated with cross-functional teams to integrate backend
                Node.js services and frontend React components, ensuring
                seamless system functionality and a cohesive user experience.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Machine Learning Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              California Institute for Telecommunication and Information
              Technology (CALIT2)
            </h4>
            <ul>
              <li>
                Developed machine learning models to predict thermal behavior in
                multi-scale thermal energy systems, integrating with Finite
                Element Method (FEM) simulations
              </li>
              <li>
                Implemented and fine-tuned supervised learning algorithms to
                enhance the accuracy of transient and steady-state thermal
                simulations.
              </li>
              <li>
                Conducted model evaluation and comparison of machine learning
                techniques, focusing on performance in thermal simulation tasks
                and data from FEM models.
              </li>
              <li>
                Validated and optimized machine learning models using large
                datasets generated from FEM and computational fluid dynamics
                (CFD) simulations, ensuring alignment with physical thermal
                properties
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Code Instructor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              theCoderSchool
            </h4>
            <ul>
              <li>
                Taught coding basics using Python, JavaScript, and Java, helping
                students build confidence and problem-solving skills through fun
                projects.
              </li>
              <li>
                Adjusted lessons to match each student's pace, making sure they
                understood the material and enjoyed the process of learning to
                code.
              </li>
              <li>
                Provided regular feedback to students, helping them track their
                progress and stay motivated as they improved their coding
                skills.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
