import React from "react";
import { Link } from "react-scroll";
import S from "./Header.module.scss";
import cx from "classnames";

export interface HeaderProps {
  active: boolean;
  setActive: (x: boolean) => void;
  setContactsActive: (x: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  active,
  setActive,
  setContactsActive,
}) => {
  return (
    <header>
      <a href="/">
        <div className={S.logo}>
          <img src="/img/logo-grey2.png" alt="logo" />
        </div>
      </a>
      <span onClick={() => setActive(true)} className={S.menuTrigger}>
        <i className={cx(S.menuTrigger__bar, S.top)}></i>
        <i className={cx(S.menuTrigger__bar, S.middle)}></i>
        <i className={cx(S.menuTrigger__bar, S.bottom)}></i>
      </span>
      <nav className={S.navigation}>
        <ul>
          <li>
            <Link to="works" smooth={true} className={S.menuLink}>
              Works
            </Link>
          </li>
          <li onClick={() => setContactsActive(true)} className={S.menuLink}>
            Contact
          </li>
          <li />
        </ul>
      </nav>
      <nav className={cx(S.mobileMenu, active ? S.mobileMenu__open : "")}>
        <span className={S.closeTrigger} onClick={() => setActive(false)}>
          <i className={cx(S.closeTrigger__bar, S.left)}></i>
          <i className={cx(S.closeTrigger__bar, S.right)}></i>
        </span>
        <ul className={S.mobileNavLinks}>
          <li>
            <p onClick={() => setActive(false)}>Home</p>
          </li>
          <li className="in-single-work">
            <Link
              to="works"
              smooth={true}
              onClick={() => setActive(false)}
              className="no-smoothState"
            >
              All Works
            </Link>
          </li>
          <li>
            <p
              onClick={() => {
                setActive(false);
                setContactsActive(false);
              }}
              className="no-smoothState open-contact"
            >
              Contact
            </p>
          </li>
        </ul>
        <ul className={S.navSocialStripe}>
          <li>
            <a
              href="https://t.me/d1sinterested"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/dis1nterested"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-vk"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:sharfull33@gmail.ru"
              target="_blank"
              rel="noreferrer"
            >
              <i className="far fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="#1"></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
