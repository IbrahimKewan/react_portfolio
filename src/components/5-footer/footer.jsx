import "./footer.css";
const Footer = ({ setPage }) => {
    return (
        <footer className="flex">
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
            <p>© 2025 All rights reserved.</p>
        </footer>
    );
};

export default Footer;
