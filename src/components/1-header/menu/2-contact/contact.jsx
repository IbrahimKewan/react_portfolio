export default function ContactPage() {
    return (
        <section>
            <h1>Kontakt</h1>
            <p>
                Du möchtest mit mir in Kontakt treten? Schreib mir gerne eine
                Nachricht!
            </p>

            <h2>Direkt per Formular</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <br />
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Nachricht:</label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required></textarea>
                </div>
                <button type="submit">Absenden</button>
            </form>

            <h2>Weitere Kontaktmöglichkeiten</h2>
            <ul>
                <li>
                    E-Mail:{" "}
                    <a href="mailto:ibrahim@example.com">ibrahim@example.com</a>
                </li>
                <li>
                    LinkedIn:{" "}
                    <a href="https://www.linkedin.com/in/deinprofil">
                        linkedin.com/in/deinprofil
                    </a>
                </li>
                <li>
                    GitHub:{" "}
                    <a href="https://github.com/deinprofil">
                        github.com/deinprofil
                    </a>
                </li>
            </ul>
        </section>
    );
}
