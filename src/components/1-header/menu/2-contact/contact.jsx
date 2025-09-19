import "./contact.css";

export default function ContactPage() {
    return (
        <section className="contact">
            {/* <div className="container"> */}
            <header className="contact__hero">
                <div className="contact__badge">Kontakt</div>
                <h1 className="contact__title">Schreib mir eine Nachricht</h1>
                <p className="contact__subtitle">
                    Ob Projektidee, Zusammenarbeit oder Fragen – ich melde mich
                    schnell zurück.
                </p>
            </header>

            <div className="contact__grid">
                {/* Formular */}
                <form
                    className="card contact__form"
                    onSubmit={(e) => {
                        // Clientseitig nur Demo: Standard-Submit verhindern
                        e.preventDefault();
                        alert("Danke! Deine Nachricht wurde (Demo) gesendet.");
                    }}
                    noValidate>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Dein Name"
                        />
                        <small className="hint">Pflichtfeld</small>
                    </div>

                    <div className="field">
                        <label htmlFor="email">E-Mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="name@mail.com"
                        />
                        <small className="hint">
                            Wir behandeln deine E-Mail vertraulich.
                        </small>
                    </div>

                    <div className="field">
                        <label htmlFor="message">Nachricht</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            placeholder="Worum geht’s?"></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn--primary"
                        aria-label="Nachricht absenden">
                        Absenden
                    </button>
                </form>

                {/* Weitere Wege */}
                <aside className="card contact__info">
                    <h2 className="card__title">
                        Weitere Kontaktmöglichkeiten
                    </h2>
                    <ul className="contact__list">
                        <li>
                            <span className="contact__label">E-Mail</span>
                            <a
                                className="contact__link"
                                href="mailto:ibrahim@example.com">
                                ibrahim@example.com
                            </a>
                        </li>
                        <li>
                            <span className="contact__label">LinkedIn</span>
                            <a
                                className="contact__link"
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer">
                                linkedin.com
                            </a>
                        </li>
                        <li>
                            <span className="contact__label">GitHub</span>
                            <a
                                className="contact__link"
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer">
                                github.com/
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
            {/* </div> */}
        </section>
    );
}
