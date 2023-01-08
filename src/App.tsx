import React, { useEffect, useState } from "react";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./main.sass";
import S from "./App.module.scss";
import Works from "./components/works/Works";
import TopSection from "./components/TopSection/TopSection";

function App() {
  const [contactsActive, setContactsActive] = useState(true);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowY = mobileMenuActive
      ? "hidden"
      : "unset";
  }, [mobileMenuActive]);

  return (
    <div>
      <section className={S.topSection}>
        <Header
          active={mobileMenuActive}
          setActive={setMobileMenuActive}
          setContactsActive={setContactsActive}
        />
        <TopSection setActive={setContactsActive} />
      </section>
      <Works />
      <Contacts active={contactsActive} setActive={setContactsActive} />
      <Footer />
    </div>
  );
}

export default App;
