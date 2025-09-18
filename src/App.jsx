import { useEffect, useState } from "react";
import Header from "./components/1-header/header";
import Main from "./components/3-main/main";
import Hero from "./components/2-hero/hero";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";
function App() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setshowScrollBtn(true);
            } else setshowScrollBtn(false);
        });
    }, []);
    const [showScrollBtn, setshowScrollBtn] = useState(false);

    return (
        <div id="up" className="container">
            <Header />
            {/* <div className="divider"></div> */}
            <Hero />
            <div className="divider"></div>
            <Main />
            <div className="divider"></div>
            <Contact />
            <div className="divider"></div>
            <Footer />
            <a
                style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }}
                href="#up">
                <button className="scroll2Top icon-keyboard_arrow_up"></button>
            </a>
        </div>
    );
}

export default App;
