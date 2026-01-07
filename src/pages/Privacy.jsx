import { Container } from "../components";

function Privacy() {
    return (
        <div className="w-full py-10">
            <Container>
                <div className="bg-white rounded-2xl border border-indigo-100 shadow-sm p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-indigo-900">Privacy Policy</h1>
                    <p className="mt-3 text-indigo-900/80 leading-relaxed">
                        At MegaBlog, we take your privacy seriously. This policy describes how we handle potential user data and content transparency.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-indigo-900">Data usage</h2>
                        <p className="mt-3 text-indigo-900/80 leading-relaxed">
                            We utilize secure backend services for authentication and data management to ensure reliability and security.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Privacy;
