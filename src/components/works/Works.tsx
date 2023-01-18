import React from "react";
import Case from "./Case/Case";
import { cases } from "../../assets/data/cases";
import S from "./Works.module.scss";

export default function Works() {
  return (
    <section id="works" className={S.worksSection}>
      <div className={S.sectionMask}></div>
      <div className={S.content}>
        <div className={S.sectionMask__text}>
          <h4 className={S.section__subtitle}>Case Studies</h4>
        </div>
        <div className={S.sectionMask__text}>
          <h2 className={S.section__title}>Latest Works</h2>
        </div>
        <ul className={S.worksList}>
          {cases.map((item) => (
            <Case key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
