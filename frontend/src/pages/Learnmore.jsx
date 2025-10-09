import React from "react";
import "./Learnmore.css";
import { 
  FaRecycle, 
  FaLeaf, 
  FaCity, 
  FaBolt, 
  FaTrash, 
  FaBoxOpen, 
  FaHandsHelping, 
} from "react-icons/fa";

function LearnMore() {
  return (
    <div className="learn-container">
      <h1 className="learn-title">
        <FaRecycle style={{ marginRight: "10px", color: "#2ecc71" }} />
        Learn More About Eco-Exchange
      </h1>

      <p className="learn-intro">
        Waste management is the process of collecting, transporting, 
        processing, and disposing of waste in a safe and eco-friendly way. 
        It helps reduce pollution, saves resources, and builds a cleaner future.
      </p>

      {/* Why It Matters */}
      <div className="learn-section">
        <h2>
          <FaLeaf style={{ marginRight: "8px", color: "#27ae60" }} />
          Why It Matters?
        </h2>
        <ul>
          <li><FaRecycle style={{ marginRight: "6px" }}/> Reduces pollution and greenhouse gases</li>
          <li><FaBolt style={{ marginRight: "6px" }}/> Conserves energy and natural resources</li>
          <li><FaLeaf style={{ marginRight: "6px" }}/> Promotes recycling and reusability</li>
          <li><FaCity style={{ marginRight: "6px" }}/> Keeps communities clean and healthy</li>
        </ul>
      </div>

      {/* What You Can Do */}
      <div className="learn-section">
        <h2>
          <FaHandsHelping style={{ marginRight: "8px", color: "#2980b9" }} />
          What You Can Do
        </h2>
        <ol>
          <li><FaTrash style={{ marginRight: "6px" }}/> Reduce single-use plastics</li>
          <li><FaRecycle style={{ marginRight: "6px" }}/> Separate waste into recyclable and non-recyclable</li>
          <li><FaLeaf style={{ marginRight: "6px" }}/> Compost organic waste</li>
          <li><FaBoxOpen style={{ marginRight: "6px" }}/> Encourage eco-friendly products</li>
        </ol>
      </div>

      {/* Call-to-action button */}
      <div className="learn-footer-btn">
        <a href="/" className="learn-btn">
          
          Start Making a Difference Today
        </a>
      </div>

      {/* Footer Section */}
      <footer className="learn-footer">
        <p>
          © {new Date().getFullYear()} EcoExchange Waste Management System
        </p>
        <p>
          Made with <FaRecycle style={{ color: "#2ecc71", margin: "0 5px" }} /> 
          for a cleaner planet
        </p>
      </footer>
    </div>
  );
}

export default LearnMore;
