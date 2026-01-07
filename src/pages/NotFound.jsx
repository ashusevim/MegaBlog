import { Link } from "react-router-dom";
import { Container, Button } from "../components";

function NotFound() {
    return (
        <div className="w-full py-10">
            <Container>
                <div className="bg-white rounded-2xl border border-indigo-100 shadow-sm p-6 md:p-10 text-center">
                    <h1 className="text-3xl font-bold text-indigo-900">Page not found</h1>
                    <p className="mt-3 text-indigo-900/80">
                        The page you’re looking for doesn’t exist.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <Link to="/">
                            <Button variant="default">Go to Home</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default NotFound;
