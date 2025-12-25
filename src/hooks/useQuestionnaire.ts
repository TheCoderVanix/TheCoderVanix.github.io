import { useState, useCallback, useMemo } from 'react';
import { Answer, Question, QUESTIONS } from '../types';
import { evaluateGender, GenderResult } from '../utils/evaluateGender';

const QUESTIONS_TO_ASK = 15;

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function useQuestionnaire() {
    const [selectedQuestions] = useState<Question[]>(() => 
        shuffleArray(QUESTIONS).slice(0, QUESTIONS_TO_ASK)
    );
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [result, setResult] = useState<GenderResult | null>(null);
    const [isCompleted, setIsCompleted] = useState(false);

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / QUESTIONS_TO_ASK) * 100;

    const handleAnswer = useCallback((response: boolean) => {
        const newAnswer: Answer = {
            questionId: currentQuestion.id,
            response,
        };

        const newAnswers = [...answers, newAnswer];
        setAnswers(newAnswers);

        if (currentQuestionIndex < QUESTIONS_TO_ASK - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // All questions answered, calculate result
            const genderResult = evaluateGender(newAnswers, selectedQuestions);
            setResult(genderResult);
            setIsCompleted(true);
        }
    }, [answers, currentQuestion, currentQuestionIndex, selectedQuestions]);

    const restart = useCallback(() => {
        window.location.reload(); // Get new random questions
    }, []);

    return {
        currentQuestion,
        currentQuestionIndex,
        totalQuestions: QUESTIONS_TO_ASK,
        progress,
        isCompleted,
        result,
        handleAnswer,
        restart,
    };
}

export default useQuestionnaire;