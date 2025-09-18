import { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
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
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Project</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">test</a>
                    </li>
                    <li>
                        <a href="">test</a>
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
                <div className="fixed">
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
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Project</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">test</a>
                        </li>
                        <li>
                            <a href="">test</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
