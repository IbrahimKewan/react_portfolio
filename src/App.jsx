import { useEffect, useState } from "react";
import Header from "./components/1-header/header";

import Main from "./components/3-main/main";
import Hero from "./components/2-hero/hero";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";

// menu
import AboutMeSection from "./components/1-header/menu/1-about/about";
import Projects from "./components/1-header/menu/3-projekte/projekte";
import ContactPage from "./components/1-header/menu/2-contact/contact";

function App() {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setshowScrollBtn(true);
            } else {
                setshowScrollBtn(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const [showScrollBtn, setshowScrollBtn] = useState(false);
    const [page, setPage] = useState("home");

    return (
        <div id="up" className="container">
            <Header setPage={setPage} />
            {page === "about" ? (
                <AboutMeSection />
            ) : page === "projects" ? (
                <Projects />
            ) : page === "contact" ? (
                <ContactPage />
            ) : (
                <>
                    <Hero />
                    <div className="divider"></div>
                    <Main />
                    <div className="divider"></div>
                    <Contact />
                    <div className="divider"></div>
                    <Footer />
                </>
            )}
            <a
                style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }}
                href="#up">
                <button className="scroll2Top icon-keyboard_arrow_up"></button>
            </a>
        </div>
    );
}

export default App;
