import "./hero.css";
const Hero = () => {
    return (
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <img
                        src="../../../img/meinBild_2.jpg"
                        className="avatar"
                        alt=""
                    />
                    <div className="icon-verified"></div>
                </div>
                <h1 className="title">Frontend & Backend Developer</h1>
                <p className="sub-title">
                    Ich entwickle moderne Webseiten mit JavaScript, React und
                    Node.js – schnell, performant und benutzerfreundlich.
                </p>
                <div className="all-icons flex">
                    <div className="icon icon-github "></div>
                    <div className="icon icon-linkedin "></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-twitter"></div>
                </div>
            </div>
            <div className="right-section animation border">animation</div>
        </section>
    );
};

export default Hero;
