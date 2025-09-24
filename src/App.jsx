import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import Header from "./components/1-header/header";

// Lazy load heavy components
const Main = React.lazy(() => import("./components/3-main/main"));
const Hero = React.lazy(() => import("./components/2-hero/hero"));
const Contact = React.lazy(() => import("./components/4-contact/contact"));
const Footer = React.lazy(() => import("./components/5-footer/footer"));

// menu
const AboutMeSection = React.lazy(() =>
    import("./components/1-header/menu/1-about/about")
);
const ContactPage = React.lazy(() =>
    import("./components/1-header/menu/2-contact/contact")
);
const Projects = React.lazy(() =>
    import("./components/1-header/menu/3-projekte/projekte")
);
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
            <Suspense fallback={<div className="loading">Lädt...</div>}>
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
                    </>
                )}
                <div className="divider"></div>
                <Footer setPage={setPage} />
            </Suspense>
            <a
                style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }}
                href="#up">
                <button className="scroll2Top icon-keyboard_arrow_up"></button>
            </a>
        </div>
    );
}

export default App;
