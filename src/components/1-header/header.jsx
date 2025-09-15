import { useState } from "react";
import "./header.css";
const Header = () => {
    const [showModal, setshowModal] = useState(false);
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

            <button className="mode flex">
                <span className="icon-moon-o"></span>
                {/* <span className="icon-moon-o"></span> */}
            </button>

            {showModal && (
                <div className="fixed">
                    <ul className="modal">
                        <li>
                            <button
                                className="icon-clear"
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
