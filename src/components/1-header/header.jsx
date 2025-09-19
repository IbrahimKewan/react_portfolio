import { useEffect, useState } from "react";
import "./header.css";
const Header = ({ setPage }) => {
    const [showModal, setshowModal] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem("currentMode") ?? "dark"
    );
    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);
    return (
        <header className="flex">
            <button
                className="menu icon-menu flex"
                onClick={() => {
                    setshowModal(true);
                }}
            />
            <div></div>
            <nav>
                <ul className="flex">
                    <li>
                        <button
                            className="link-btn"
                            onClick={() => setPage("home")}>
                            Startseite
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onClick={() => setPage("about")}>
                            Über mich
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onClick={() => setPage("projects")}>
                            Projekte
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onClick={() => setPage("contact")}>
                            Kontakt
                        </button>
                    </li>
                </ul>
            </nav>

            <button
                className="mode flex"
                onClick={() => {
                    const newTheme = theme === "light" ? "dark" : "light";
                    setTheme(newTheme);
                    localStorage.setItem("currentMode", newTheme);
                }}>
                {theme === "dark" ? (
                    <span className="icon-moon-o"></span>
                ) : (
                    <span className="icon-sun"></span>
                )}
            </button>

            {showModal && (
                <div
                    className="fixed"
                    onClick={() => {
                        setshowModal(false);
                    }}>
                    <ul className="modal">
                        <li>
                            <button
                                className="icon-close"
                                onClick={() => {
                                    setshowModal(false);
                                }}
                            />
                        </li>
                        <li>
                            <button
                                className="link-btn"
                                onClick={() => setPage("home")}>
                                Startseite
                            </button>
                        </li>
                        <li>
                            <button
                                className="link-btn"
                                onClick={() => setPage("about")}>
                                Über mich
                            </button>
                        </li>
                        <li>
                            <button
                                className="link-btn"
                                onClick={() => setPage("projects")}>
                                Projekte
                            </button>
                        </li>
                        <li>
                            <button
                                className="link-btn"
                                onClick={() => setPage("contact")}>
                                Kontakt
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
