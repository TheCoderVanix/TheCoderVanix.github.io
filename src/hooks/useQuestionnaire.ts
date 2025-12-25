import { useState, useCallback } from 'react';
import { Answer, Question, QUESTIONS } from '../types';
import { evaluateGender, GenderResult } from '../utils/evaluateGender';

const QUESTIONS_TO_ASK = 20;

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Select questions with balanced distribution to avoid too many of one type
function selectBalancedQuestions(): Question[] {
    // IQ-heavy questions (should be limited)
    const iqQuestionIds = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 141, 142, 143, 144, 145];
    
    const iqQuestions = QUESTIONS.filter(q => iqQuestionIds.includes(q.id));
    const regularQuestions = QUESTIONS.filter(q => !iqQuestionIds.includes(q.id));
    
    // Shuffle both pools
    const shuffledIQ = shuffleArray(iqQuestions);
    const shuffledRegular = shuffleArray(regularQuestions);
    
    // Take at most 3-4 IQ questions, rest are regular personality questions
    const maxIQQuestions = Math.floor(Math.random() * 2) + 3; // 3-4 IQ questions
    const selectedIQ = shuffledIQ.slice(0, maxIQQuestions);
    const selectedRegular = shuffledRegular.slice(0, QUESTIONS_TO_ASK - selectedIQ.length);
    
    // Combine and shuffle the final selection
    return shuffleArray([...selectedIQ, ...selectedRegular]);
}

export function useQuestionnaire() {
    const [selectedQuestions] = useState<Question[]>(() => 
        selectBalancedQuestions()
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