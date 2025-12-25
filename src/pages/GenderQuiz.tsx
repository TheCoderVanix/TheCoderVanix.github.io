import React from 'react';
import { Link } from 'react-router-dom';
import Questionnaire from '../components/Questionnaire';
import './GenderQuiz.css';

const GenderQuiz: React.FC = () => {
    return (
        <div className="app-container">
            <nav className="quiz-nav">
                <Link to="/" className="back-link">← Back to Home</Link>
            </nav>
            <header className="app-header">
                <h1 className="app-title">🔬 Gender Checker™</h1>
                <p className="app-subtitle">The most scientifically accurate gender test on the internet*</p>
            </header>
            <main className="app-main">
                <Questionnaire />
            </main>
            <footer className="app-footer">
                <p>*Not actually scientific. This is a joke. Please don't take it seriously.</p>
            </footer>
        </div>
    );
};

export default GenderQuiz;
