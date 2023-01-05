import React from "react";

export default function Case() {
  return (
    <footer className="footer">
      <div className="content">
        <a href="#1" className="footer-logo no-smoothstate">
          <img
            src="img\svg\logo-white.png"
            alt="Ildan Sharifullin's Personal Logo"
          />
        </a>
        <div className="inner-container text-center">
          <div></div>
          <ul className="footer-links">
            <li>
              <a
                href="https://t.me/d1sinterested"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://vk.com/dis1nterested"
                target="_blank"
                rel="noreferrer"
              >
                Vkontakte
              </a>
            </li>
            <li>
              <a
                href="mailto:sharfull33@gmail.ru"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </li>
          </ul>
          <div></div>
        </div>
        <div className="footer-copy">
          © 2022 Ildan Sharifullin -{" "}
          <a href="mailto:sharfull33@gmail.ru" className="no-smoothState">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
