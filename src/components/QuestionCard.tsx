import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
    question: Question;
    questionNumber: number;
    totalQuestions: number;
    onAnswer: (response: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
    question, 
    questionNumber, 
    totalQuestions, 
    onAnswer 
}) => {
    return (
        <div className="question-card">
            <div className="question-number">
                Question {questionNumber} of {totalQuestions}
            </div>
            <h2 className="question-text">{question.text}</h2>
            <div className="button-group">
                <button 
                    className="button button-yes" 
                    onClick={() => onAnswer(true)}
                >
                    Yes ✓
                </button>
                <button 
                    className="button button-no" 
                    onClick={() => onAnswer(false)}
                >
                    No ✗
                </button>
            </div>
        </div>
    );
};

export default QuestionCard;