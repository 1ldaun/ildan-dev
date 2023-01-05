import React from "react";
import S from "./Case.module.scss";

export interface CaseProps {
  id: number;
  background: string;
  title: string;
  description: string[];
  button: string;
  link: string;
}

const Case: React.FC<CaseProps> = (props) => {
  const { id, background, title, description, button, link } = props;

  const getNumberTitle = (id: number): string => {
    if (id < 10) return "0" + id;
    else return "" + id;
  };

  return (
    <li>
      <a
        href={link}
        className={S.work}
        style={{ backgroundImage: "url(" + background + ")" }}
      >
        <div className={S.work__revealMask}></div>
        <div className={S.work__maskNumber}>
          <div className={S.work__maskBack}>{getNumberTitle(id)}</div>
          <div>
            <div
              data-index={getNumberTitle(id)}
              className={S.work__maskOverlay}
            >
              {getNumberTitle(id)}
            </div>
          </div>
        </div>
        <div className={S.work__textSection}>
          <h3 itemProp="name" className={S.work__title}>
            {title}
          </h3>
          <h5 itemProp="description" className={S.work__subtitle}>
            {description.map((row) => {
              return (
                <p key={row}>
                  {row}
                  <br />
                </p>
              );
            })}
          </h5>
          <button className={S.work__button}>
            <span className={S.work__button__text}>{button}</span>
          </button>
        </div>
      </a>
    </li>
  );
};

export default Case;
