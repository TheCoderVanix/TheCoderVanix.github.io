import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const tools = [
    {
        name: 'IdentityGPT™',
        description: 'The most scientifically accurate identity test on the internet*',
        path: '/IdentityGPT',
        emoji: '🤖'
    },
    {
        name: 'Plinko Simulator',
        description: 'Lose fake money like a real gambling addict',
        path: '/Plinko',
        emoji: '🎰'
    },
    // Add more tools here in the future
];

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="home-title">🛠️ Tools & Quizzes</h1>
                <p className="home-subtitle">A collection of totally useful and serious tools</p>
            </header>
            <main className="home-main">
                <div className="tools-grid">
                    {tools.map((tool) => (
                        <Link to={tool.path} key={tool.path} className="tool-card">
                            <span className="tool-emoji">{tool.emoji}</span>
                            <h2 className="tool-name">{tool.name}</h2>
                            <p className="tool-description">{tool.description}</p>
                        </Link>
                    ))}
                </div>
            </main>
            <footer className="home-footer">
                <p>*None of these are actually serious. Please don't take them seriously.</p>
            </footer>
        </div>
    );
};

export default Home;
