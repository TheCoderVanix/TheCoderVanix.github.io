import React from 'react';
import QuestionCard from './QuestionCard';
import Results from './Results';
import { useQuestionnaire } from '../hooks/useQuestionnaire';

const Questionnaire: React.FC = () => {
    const { 
        currentQuestion, 
        currentQuestionIndex, 
        totalQuestions, 
        progress,
        isCompleted, 
        result,
        handleAnswer,
        restart 
    } = useQuestionnaire();

    if (isCompleted && result) {
        return <Results result={result} onRestart={restart} />;
    }

    return (
        <div className="questionnaire">
            <div className="progress-container">
                <div className="progress-bar">
                    <div 
                        className="progress-fill" 
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span className="progress-text">
                    {Math.round(progress)}% Complete
                </span>
            </div>
            <QuestionCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={totalQuestions}
                onAnswer={handleAnswer}
            />
        </div>
    );
};

export default Questionnaire;