import React, { useEffect, useState } from "react";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./main.sass";
import Works from "./components/works/Works";
import TopSection from "./components/top-section/TopSection";

function App() {
  const [contactsActive, setContactsActive] = useState(true);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowY = mobileMenuActive
      ? "hidden"
      : "unset";
  }, [mobileMenuActive]);

  return (
    <div className="App">
      <section id="top">
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
