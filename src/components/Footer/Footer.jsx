import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-transparent to-indigo-100 border-t border-indigo-200">
            <div className="mx-auto px-4 py-10 max-w-7xl">
                <div className="flex flex-col items-start">
                    <Link to="/" className="mb-4">
                        <Logo width="100px" />
                    </Link>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase text-indigo-600">Company</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-indigo-800 hover:text-indigo-950">About</Link></li>
                            <li><Link to="/all-posts" className="text-indigo-800 hover:text-indigo-950">All Posts</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase text-indigo-600">Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/contact" className="text-indigo-800 hover:text-indigo-950">Contact</Link></li>
                            <li><Link to="/login" className="text-indigo-800 hover:text-indigo-950">Login</Link></li>
                            <li><Link to="/signup" className="text-indigo-800 hover:text-indigo-950">Signup</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase text-indigo-600">Legals</h3>
                        <ul className="space-y-2">
                            <li><Link to="/terms" className="text-indigo-800 hover:text-indigo-950">Terms</Link></li>
                            <li><Link to="/privacy" className="text-indigo-800 hover:text-indigo-950">Privacy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-indigo-200"></div>
            <div className="mx-auto px-4 py-4 max-w-7xl">
                <span className="text-sm text-indigo-600">&copy; 2026 MegaBlog. All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
