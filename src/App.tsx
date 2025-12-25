import React from 'react';
import Questionnaire from './components/Questionnaire';
import './index.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
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

export default App;