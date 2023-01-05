import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll";

export interface HeaderProps {
    active: boolean,
    setActive: (x: boolean) => void,
    setContactsActive: (x: boolean) => void,
}

const Header: React.FC<HeaderProps> = ({active, setActive, setContactsActive}) => {
    return (
      <header>
        <a href="/">
          <div className="logo">
            <img src="/img/logo-grey2.png"/>
          </div>
        </a>
       <div onClick={() => setActive(true)} className="nav-toggle"><span className="menu-trigger"><i className="menu-trigger-bar top"></i><i className="menu-trigger-bar middle"></i><i className="menu-trigger-bar bottom"></i></span>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="works" smooth={true} className="menu-link">Works</Link></li>
            <li><a href="#1" onClick={() => setContactsActive(false)} className="menu-link">Contact</a></li>
            <li><a href="#1" className="menu-link"></a></li>
          </ul>
        </nav>
        <nav className={"mobile-menu " + (active ? "mobile-menu-open" : "")}>
        <span className="close-trigger" onClick={() => setActive(false)}><i className="close-trigger-bar left"></i><i className="close-trigger-bar right"></i></span>
          <ul className="mobile-nav-links">
              <li><a href="#1" onClick={() => setActive(false)}>Home</a></li>
              <li className="in-single-work"><Link to="works" smooth={true} onClick={() => setActive(false)} className="no-smoothState">All Works</Link></li>
              <li><a href="#1" onClick={() => {setActive(false); setContactsActive(false)}} className="no-smoothState open-contact">Contact</a></li>
          </ul>
          <ul className="nav-social-stripe">
            <li><a href="https://t.me/d1sinterested" target="_blank" rel="noreferrer" ><i className="fab fa-telegram-plane"></i></a></li>
            <li><a href="https://vk.com/dis1nterested" target="_blank" rel="noreferrer" ><i className="fa-brands fa-vk"></i></a></li>
            <li><a href="mailto:sharfull33@gmail.ru" target="_blank" rel="noreferrer" ><i className="far fa-envelope"></i></a></li>
            <li><a href="#1" ></a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;
