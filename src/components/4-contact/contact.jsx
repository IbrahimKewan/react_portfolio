import "./contact.css";
const Contact = () => {
    return (
        <section className="contact-us">
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact us
            </h1>
            <p className="sub-title">
                Contact us for more information and Get notified when I publish
                something new.
            </p>
            <div className="flex">
                <form>
                    <div className="flex">
                        <label htmlFor="email">Email Adresse:</label>
                        <input required type="email" name="" id="email" />
                    </div>

                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="massage">Your message:</label>
                        <textarea required id="message" />
                    </div>

                    <button className="submit">Submit</button>
                </form>
                <div className="animation border">animation</div>
            </div>
        </section>
    );
};

export default Contact;
