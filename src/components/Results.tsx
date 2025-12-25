import React from 'react';
import { GenderResult } from '../utils/evaluateGender';

interface ResultsProps {
    result: GenderResult;
    onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, onRestart }) => {
    const getGenderEmoji = () => {
        switch (result.gender) {
            case 'Male': return '👨';
            case 'Female': return '👩';
            case 'Attack Helicopter': return '🚁';
            case 'Certified Gamer': return '🎮';
            case 'Discord Mod': return '🖥️';
            default: return '🤔';
        }
    };

    return (
        <div className="results-container">
            <div className="result-emoji">{getGenderEmoji()}</div>
            <h2 className="result-title">Analysis Complete!</h2>
            <div className="result-gender">
                You are: <span className="gender-text">{result.gender}</span>
            </div>
            <div className="result-confidence">
                Confidence: <span className="confidence-value">{result.confidence}%</span>
            </div>
            <p className="result-message">{result.funnyMessage}</p>
            <button className="button restart-button" onClick={onRestart}>
                🔄 Try Again
            </button>
            <p className="disclaimer">
                * This is 100% scientifically accurate and definitely not a joke
            </p>
        </div>
    );
};

export default Results;