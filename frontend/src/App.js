import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
    return (
        <div className="homepage">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">📰 NewsHub</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Categories</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Trending</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section text-center text-white d-flex align-items-center justify-content-center">
                <div>
                    <h1>Welcome to NewsHub</h1>
                    <p>Stay updated with the latest news from around the world</p>
                    <a href="/" className="btn btn-primary btn-lg mt-3">Explore News</a>
                </div>
            </header>

            {/* Features Section */}
            <section className="features-section py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="feature-box">
                                <h3>🔥 Trending News</h3>
                                <p>Get the hottest and most trending news updates instantly.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box">
                                <h3>🌍 Global Coverage</h3>
                                <p>Stay informed about global events from verified sources.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box">
                                <h3>⚡ Real-Time Updates</h3>
                                <p>News delivered to you in real-time with no delays.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Categories */}
            <section className="categories-section py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-4">Explore Categories</h2>
                    <div className="row">
                        <div className="col-md-3 mb-3"><button className="btn btn-outline-primary w-100">Politics</button></div>
                        <div className="col-md-3 mb-3"><button className="btn btn-outline-primary w-100">Technology</button></div>
                        <div className="col-md-3 mb-3"><button className="btn btn-outline-primary w-100">Sports</button></div>
                        <div className="col-md-3 mb-3"><button className="btn btn-outline-primary w-100">Health</button></div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; {new Date().getFullYear()} NewsHub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
