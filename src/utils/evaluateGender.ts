import { Answer, Gender, Question, QUESTIONS } from '../types';

export interface GenderResult {
    gender: Gender;
    confidence: number;
    funnyMessage: string;
}

const FUNNY_MESSAGES: Record<Gender, string[]> = {
    'Male': [
        "Congratulations, you're a certified bro! 🍺",
        "The council has decided: You are a dude.",
        "You probably leave the toilet seat up.",
        "Your dad is proud. Probably.",
        "You've never moisturized in your life, have you?",
    ],
    'Female': [
        "The algorithm has spoken: You're a queen! 👑",
        "Congratulations, you have good taste in everything.",
        "You probably remember everyone's birthdays.",
        "Your emotional intelligence is off the charts.",
        "You've never sent a 'K' text in your life.",
    ],
    'Attack Helicopter': [
        "You transcend mere mortal gender classifications. 🚁",
        "Your pronouns are apache/apache-self.",
        "The military-industrial complex approves.",
        "Gender? In THIS economy?",
        "You're built different. Literally.",
    ],
    'Certified Gamer': [
        "Your gender is: Mountain Dew and Doritos. 🎮",
        "Touch grass? Never heard of that game.",
        "You have a heated gaming moment every day.",
        "Your sleep schedule is a war crime.",
        "GG EZ, your gender is CRACKED.",
    ],
    'Discord Mod': [
        "Your gender is: Basement Dweller. 🖥️",
        "You definitely have an anime profile picture.",
        "Kitten, you need to touch grass immediately.",
        "Your power trip is showing.",
        "You peaked when you got mod in a server with 12 people.",
    ],
};

export function evaluateGender(answers: Answer[], questions: Question[] = QUESTIONS): GenderResult {
    let score = 0;

    // Calculate score based on answers
    for (const answer of answers) {
        const question = questions.find(q => q.id === answer.questionId);
        if (question) {
            if (answer.response) {
                score += question.maleWeight;
            } else {
                score -= question.maleWeight * 0.5; // Saying no has half the opposite effect
            }
        }
    }

    // Determine gender based on score
    let gender: Gender;
    let confidence: number;

    if (score > 100) {
        gender = 'Male';
        confidence = Math.min(99, 50 + score / 3);
    } else if (score < -50) {
        gender = 'Female';
        confidence = Math.min(99, 50 + Math.abs(score) / 3);
    } else if (score > 50) {
        // Edge cases for meme genders
        const random = Math.random();
        if (random < 0.3) {
            gender = 'Certified Gamer';
            confidence = 69;
        } else if (random < 0.5) {
            gender = 'Discord Mod';
            confidence = 42;
        } else {
            gender = 'Male';
            confidence = 50 + score / 4;
        }
    } else if (score < -20) {
        gender = 'Female';
        confidence = 50 + Math.abs(score) / 2;
    } else {
        // Near zero = Attack Helicopter
        gender = 'Attack Helicopter';
        confidence = 100;
    }

    // Pick a random funny message
    const messages = FUNNY_MESSAGES[gender];
    const funnyMessage = messages[Math.floor(Math.random() * messages.length)];

    return {
        gender,
        confidence: Math.round(confidence),
        funnyMessage,
    };
}