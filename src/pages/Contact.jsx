import { Container } from "../components";

function Contact() {
    return (
        <div className="w-full py-10">
            <Container>
                <div className="bg-white rounded-2xl border border-indigo-100 shadow-sm p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-indigo-900">Contact</h1>
                    <p className="mt-3 text-indigo-900/80 leading-relaxed">
                        If you need help with your account (including password issues), you can
                        reach out using the details below.
                    </p>

                    <div className="mt-6 space-y-2 text-indigo-900/80">
                        <p>
                            Email: {" "}
                            <a
                                href="mailto:contact@megablog.com"
                                className="text-indigo-700 hover:text-indigo-950 underline"
                            >
                                contact@megablog.com
                            </a>
                        </p>

                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
