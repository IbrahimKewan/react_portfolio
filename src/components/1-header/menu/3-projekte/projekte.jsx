import "./project.css";

export default function Projects() {
    const web = [
        {
            name: "Portfolio-Website",
            desc: "React-basierte Website zur Vorstellung von Person, Skills und Projekten.",
        },
        {
            name: "Kleine Web-Apps",
            desc: "Übungen mit HTML, CSS, JS, React, Node.js (z. B. ToDo, einfache Chat-App).",
        },
    ];

    const hardware = [
        {
            name: "Wetterstation",
            pill: "Arduino",
            desc: "Sensoren (Temp/Feuchte) auslesen, anzeigen & speichern. C/C++.",
        },
        {
            name: "Roboter-Auto",
            pill: "Arduino",
            desc: "Motorsteuerung, Hinderniserkennung, modulare C/C++-Architektur.",
        },
    ];

    const db = [
        {
            name: "PostgreSQL-Übungen",
            desc: "Datenmodellierung, komplexe Abfragen für Übungsdatenbanken.",
        },
        {
            name: "Oracle-SQL",
            desc: "Komplexe Queries & Stored Procedures als Praxisübungen.",
        },
    ];

    return (
        <section className="projects-page">
            {/* <div className="container"> */}
            <header className="projects-hero">
                <div className="projects-badge">Projekte</div>
                <h1 className="projects-title">
                    Ausgewählte Arbeiten & Übungen
                </h1>
                <p className="projects-subtitle">
                    Eine Mischung aus Web-Entwicklung, Hardware-Basteleien und
                    Datenbank-Praxis.
                </p>
            </header>

            {/* Hardware */}
            <section className="group">
                <h2 className="group-title">Arduino / Hardware</h2>
                <div className="cards">
                    {hardware.map((p) => (
                        <article key={p.name} className="card">
                            {p.pill && <span className="pill">{p.pill}</span>}
                            <h3 className="card-title">{p.name}</h3>
                            <p className="card-desc">{p.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Webentwicklung */}
            <section className="group">
                <h2 className="group-title">Webentwicklung</h2>
                <div className="cards">
                    {web.map((p) => (
                        <article key={p.name} className="card">
                            <h3 className="card-title">{p.name}</h3>
                            <p className="card-desc">{p.desc}</p>
                            <ul className="tags">
                                <li className="tag">React</li>
                                <li className="tag">Node.js</li>
                                <li className="tag">HTML/CSS/JS</li>
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            {/* Datenbanken */}
            <section className="group">
                <h2 className="group-title">Datenbanken</h2>
                <div className="cards">
                    {db.map((p) => (
                        <article key={p.name} className="card">
                            <h3 className="card-title">{p.name}</h3>
                            <p className="card-desc">{p.desc}</p>
                            <ul className="tags">
                                <li className="tag">PostgreSQL</li>
                                <li className="tag">Oracle</li>
                                <li className="tag">SQL</li>
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <footer className="projects-foot">
                <p>
                    Ich erweitere meine Projektsammlung laufend – neue Einträge
                    folgen.
                </p>
            </footer>
            {/* </div> */}
        </section>
    );
}
