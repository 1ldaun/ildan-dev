import React from "react";
import Case from "./Case/Case";
import { cases } from "../../assets/data/cases";

export default function Works() {
  return (
    <section id="works" className="works-section">
      <div className="section-mask"></div>
      <div className="content">
        <div className="section-text-mask">
          <h4 className="h5 section-subtitle">Case Studies</h4>
        </div>
        <div className="section-text-mask">
          <h2 className="h3 section-title">Latest Works</h2>
        </div>
        <ul className="works-list">
          {cases.map((item) => (
            <Case key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
