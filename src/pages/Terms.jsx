import { Container } from "../components";

function Terms() {
    return (
        <div className="w-full py-10">
            <Container>
                <div className="bg-white rounded-2xl border border-indigo-100 shadow-sm p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-indigo-900">Terms & Conditions</h1>
                    <p className="mt-3 text-indigo-900/80 leading-relaxed">
                        Welcome to MegaBlog. By accessing or using our website, you agree to be bound by these terms and conditions.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-indigo-900">Acceptable use</h2>
                        <p className="mt-3 text-indigo-900/80 leading-relaxed">
                            Please do not post sensitive personal data. Content posted is subject
                            to the configured backend rules and permissions.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Terms;
