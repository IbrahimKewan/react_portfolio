import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
const Contact = () => {
    const [state, handleSubmit] = useForm("xqadvnvd");

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
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <label htmlFor="email">Email Adresse:</label>
                        <input
                            required
                            autoComplete="off"
                            type="email"
                            name="email"
                            id="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="massage">Your message:</label>
                        <textarea required id="message" name="message" />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button className="submit" disabled={state.submitting}>
                        {state.submitting ? "Submitting ..." : "Submit"}
                    </button>
                    {state.succeeded && (
                        <p style={{ fontSize: "18px", marginTop: "1.7rem" }}>
                            Nachricht wurde erfolgreich gesendet :)
                        </p>
                    )}
                </form>
                <div className="animation border">animation</div>
            </div>
        </section>
    );
};

export default Contact;
