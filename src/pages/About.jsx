import { Container } from "../components";

function About() {
    return (
        <div className="w-full py-10">
            <Container>
                <div className="bg-white rounded-2xl border border-indigo-100 shadow-sm p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-indigo-900">About MegaBlog</h1>
                    <p className="mt-3 text-indigo-900/80 leading-relaxed">
                        MegaBlog is a platform designed for writers, thinkers, and storytellers. 
                        We provide a clean, distraction-free environment where your ideas can take center stage.
                        Whether you're sharing personal experiences, technical knowledge, or creative fiction, 
                        MegaBlog gives you the tools to reach your audience effectively.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-indigo-900">Our Mission</h2>
                        <p className="mt-3 text-indigo-900/80 leading-relaxed">
                            We believe in the power of storytelling. Our mission is to democratize publishing 
                            and connect readers with high-quality content from around the globe. We are committed 
                            of fostering a vibrant community where diversity of thought is celebrated.
                        </p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-indigo-900">Why MegaBlog?</h2>
                        <ul className="mt-3 space-y-2 text-indigo-900/80 list-disc pl-5">
                            <li><strong>Simplistic Design:</strong> Focus on what matters—your words.</li>
                            <li><strong>Community Driven:</strong> Engage with like-minded individuals.</li>
                            <li><strong>Secure & Fast:</strong> Built with modern technology for optimal performance.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;
