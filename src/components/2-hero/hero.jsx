import React from "react";
const Lottie = React.lazy(() => import("lottie-react"));
import heroAnimation from "../../../src/animation/dev.json";
import { useRef } from "react";

import "./hero.css";
import { motion, scale } from "framer-motion";

const Hero = () => {
    const lottieRef = useRef(null);
    return (
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <motion.picture
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{
                            damping: 6,
                            type: "spring",
                            stiffness: 100,
                        }}>
                        <source
                            srcSet="../../../img/meinBild_2.webp"
                            type="image/webp"
                        />
                        <img
                            src="../../../img/meinBild_2.webp"
                            className="avatar"
                            alt="Ibrahim Kewan - Frontend & Backend Developer"
                            width="88"
                            height="88"
                            loading="eager"
                        />
                    </motion.picture>
                    <div className="icon-verified"></div>
                </div>
                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    className="title">
                    Frontend & Backend Developer
                </motion.h1>
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
            <div className="right-section animation">
                <Lottie
                    lottieRef={lottieRef}
                    onLoadedImages={() => {
                        // @ts-ignore
                        // https://lottiereact.com/
                        lottieRef.current.setSpeed(0.5);
                    }}
                    animationData={heroAnimation}
                />
            </div>
        </section>
    );
};

export default Hero;
