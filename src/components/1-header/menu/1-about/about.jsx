import "./about.css";

export default function AboutMeSection() {
    return (
        <section className="about">
            {/* <div className="container"> */}
            <div className="about__hero">
                <div className="about__badge">Über mich</div>
                <h1 className="about__title">Ibrahim Kewan</h1>
                <p className="about__subtitle">
                    Fachinformatiker AE in Ausbildung • Web & Embedded • C/C++ •
                    React • Node.js • PostgreSQL/Oracle
                </p>
            </div>

            <div className="about__grid">
                <article className="card">
                    <h2 className="card__title">Kurzprofil</h2>
                    <p className="card__text">
                        Allgemeines Abitur in Syrien (in Deutschland anerkannt)
                        mit der Note <strong>1,9</strong>. Danach{" "}
                        <strong>
                            Höhere Berufsfachschule Informationstechnik
                        </strong>{" "}
                        (Kaiserslautern) inkl.{" "}
                        <strong>Fachhochschulreife</strong>. Derzeit Ausbildung
                        zum{" "}
                        <strong>
                            Fachinformatiker – Anwendungsentwicklung
                        </strong>{" "}
                        bei <strong>SPIE</strong>.
                    </p>
                </article>

                <article className="card">
                    <h2 className="card__title">Skills</h2>
                    <ul className="tags">
                        {[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "React",
                            "Node.js",
                            "C",
                            "C++",
                            "PHP (Basics)",
                            "Docker (Basics)",
                            "PostgreSQL",
                            "Oracle",
                            "Git",
                        ].map((s) => (
                            <li key={s} className="tag">
                                {s}
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="card card--span2">
                    <h2 className="card__title">Projekte</h2>
                    <div className="projects">
                        <div className="project">
                            <div className="project__pill">Arduino</div>
                            <h3 className="project__name">Wetterstation</h3>
                            <p className="project__desc">
                                Sensoren (Temp/Feuchte) auslesen, anzeigen &
                                speichern. Solide C/C++-Praxis.
                            </p>
                        </div>
                        <div className="project">
                            <div className="project__pill">Arduino</div>
                            <h3 className="project__name">Roboter-Auto</h3>
                            <p className="project__desc">
                                Motorsteuerung, Hinderniserkennung, modularer
                                C/C++-Code.
                            </p>
                        </div>
                    </div>
                </article>

                <article className="card">
                    <h2 className="card__title">Kontakt</h2>
                    <p className="card__text">
                        Interesse an Zusammenarbeit oder Fragen?
                    </p>
                    <div className="cta">
                        <a className="btn btn--primary" href="/kontakt">
                            Kontakt aufnehmen
                        </a>
                        <a className="btn" href="/cv.pdf">
                            Lebenslauf (PDF)
                        </a>
                    </div>
                </article>
            </div>
            {/* </div> */}
        </section>
    );
}
