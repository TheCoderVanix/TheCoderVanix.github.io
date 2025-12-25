import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GenderQuiz from './pages/GenderQuiz';
import Plinko from './pages/Plinko';
import './index.css';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/IdentityGPT" element={<GenderQuiz />} />
                <Route path="/Plinko" element={<Plinko />} />
            </Routes>
        </HashRouter>
    );
};

export default App;