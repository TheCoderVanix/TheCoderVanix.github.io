import { useState, useCallback } from 'react';
import { Answer, Question, QUESTIONS } from '../types';
import { evaluateGender, GenderResult } from '../utils/evaluateGender';

const QUESTIONS_TO_ASK = 25;

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
    // IQ-heavy questions (brain teasers, facts, logic puzzles) - should be limited per quiz
    const iqQuestionIds = [
        // Original IQ questions
        106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
        141, 142, 143, 144, 145,
        // New expanded IQ questions (161-250)
        ...Array.from({ length: 90 }, (_, i) => 161 + i)
    ];
    
    const iqQuestions = QUESTIONS.filter(q => iqQuestionIds.includes(q.id));
    const regularQuestions = QUESTIONS.filter(q => !iqQuestionIds.includes(q.id));
    
    // Shuffle both pools
    const shuffledIQ = shuffleArray(iqQuestions);
    const shuffledRegular = shuffleArray(regularQuestions);
    
    // Take exactly 5 IQ questions + 20 personality/meme questions = 25 total
    const numIQQuestions = 5;
    const numPersonalityQuestions = 20;
    const selectedIQ = shuffledIQ.slice(0, numIQQuestions);
    const selectedRegular = shuffledRegular.slice(0, numPersonalityQuestions);
    
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