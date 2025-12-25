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
            case 'Incel': return '🚫👩';
            case 'Femcel': return '💔';
            case 'NPC': return '🤖';
            case 'Sigma Male': return '🐺';
            case 'E-Girl': return '🖤';
            default: return '🤔';
        }
    };

    const getIQColor = () => {
        if (result.iq >= 145) return '#FFD700'; // Gold
        if (result.iq >= 130) return '#4CAF50'; // Green
        if (result.iq >= 115) return '#8BC34A'; // Light green
        if (result.iq >= 100) return '#667eea'; // Theme purple
        if (result.iq >= 85) return '#FF9800'; // Orange
        if (result.iq >= 70) return '#FF5722'; // Deep orange
        return '#F44336'; // Red
    };

    const getIQEmoji = () => {
        if (result.iq >= 145) return '🧠✨';
        if (result.iq >= 130) return '🧠';
        if (result.iq >= 115) return '📚';
        if (result.iq >= 100) return '😐';
        if (result.iq >= 85) return '🤔';
        if (result.iq >= 70) return '😅';
        return '🥴';
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
            
            {/* IQ Section - integrated into the card */}
            <div style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid #dee2e6',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{getIQEmoji()}</span>
                    <div>
                        <div style={{ 
                            fontSize: '0.7rem', 
                            color: '#666',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            fontWeight: '600'
                        }}>
                            IQ Score
                        </div>
                        <div style={{ 
                            fontSize: '0.75rem', 
                            color: '#888',
                        }}>
                            {result.iqMessage}
                        </div>
                    </div>
                </div>
                <div style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: 'bold', 
                    color: getIQColor(),
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                }}>
                    {result.iq}
                </div>
            </div>
            
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