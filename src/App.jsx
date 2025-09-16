import { useState } from "react";
import Header from "./components/1-header/header";
import Main from "./components/3-main/main";
import Hero from "./components/2-hero/hero";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";
function App() {
    return (
        <div id="up" className="container">
            <Header />
            <div className="divider"></div>
            <Hero />
            <div className="divider"></div>
            <Main />
            <div className="divider"></div>
            <Contact />
            <div className="divider"></div>
            <Footer />
            <a href="#up">
                <button className="scroll2Top icon-keyboard_arrow_up"></button>
            </a>
        </div>
    );
}

export default App;
