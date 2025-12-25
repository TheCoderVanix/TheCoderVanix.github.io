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
        "You communicate through grunts and the occasional 'nice'.",
        "Your emotional range is: hungry, tired, and sports.",
    ],
    'Female': [
        "The algorithm has spoken: You're a queen! 👑",
        "Congratulations, you have good taste in everything.",
        "You probably remember everyone's birthdays.",
        "Your emotional intelligence is off the charts.",
        "You've never sent a 'K' text in your life.",
        "You've definitely said 'I'm not mad, I'm disappointed'.",
        "You own at least one item with 'live laugh love' on it.",
    ],
    'Attack Helicopter': [
        "You transcend mere mortal gender classifications. 🚁",
        "Your pronouns are apache/apache-self.",
        "The military-industrial complex approves.",
        "Gender? In THIS economy?",
        "You're built different. Literally.",
        "You answered so chaotically we gave up trying.",
        "The algorithm is having an existential crisis because of you.",
    ],
    'Certified Gamer': [
        "Your gender is: Mountain Dew and Doritos. 🎮",
        "Touch grass? Never heard of that game.",
        "You have a heated gaming moment every day.",
        "Your sleep schedule is a war crime.",
        "GG EZ, your gender is CRACKED.",
        "You've definitely said 'it's not that serious' about something very serious.",
        "Your chair has more structural integrity than your life choices.",
    ],
    'Discord Mod': [
        "Your gender is: Basement Dweller. 🖥️",
        "You definitely have an anime profile picture.",
        "Kitten, you need to touch grass immediately.",
        "Your power trip is showing.",
        "You peaked when you got mod in a server with 12 people.",
        "You've typed 'ratio' unironically at least 47 times.",
        "Your parasocial relationships are concerning.",
    ],
    'Incel': [
        "Your gender is: Involuntarily Maidenless. 🚫👩",
        "It's over. It never even began.",
        "You've definitely blamed your height at least once.",
        "The blackpill has consumed you.",
        "You think showering is a 'cope'.",
        "Your Reddit history is... concerning.",
        "You unironically use the word 'foid'.",
    ],
    'Femcel': [
        "Your gender is: Chronically Online Girlie. 💅😭",
        "You've cried to Phoebe Bridgers more than once today.",
        "Your Pinterest board is just red flags you'd ignore.",
        "You romanticize your own suffering.",
        "'He's not toxic, he's complex' - You, probably.",
        "You've written a Tumblr post about this.",
        "Your standards are impossibly high yet somehow also on the floor.",
    ],
    'NPC': [
        "Your gender is: Background Character. 🤖",
        "You have maybe 3 dialogue options.",
        "You probably say 'it is what it is' daily.",
        "The main character walked past you today.",
        "You follow trends 6 months late.",
        "Your opinions came pre-installed.",
        "You've never had an original thought and that's okay.",
    ],
    'Sigma Male': [
        "Your gender is: Lone Wolf Delusion. 🐺",
        "You watched one motivational edit and made it your personality.",
        "Patrick Bateman is NOT a role model.",
        "Your grindset is just untreated ADHD.",
        "You're not mysterious, you just have no friends.",
        "Andrew Tate blocked you for being too much.",
        "You think eye contact is a dominance move.",
    ],
    'E-Girl': [
        "Your gender is: Egirl/Eboy. 🖤⛓️",
        "Your eyeliner could cut glass.",
        "You've said 'rawr XD' unironically in 2024.",
        "Your entire personality is an aesthetic.",
        "You have at least 3 alt TikTok accounts.",
        "Monster Energy is a food group.",
        "You're one bad day away from a face tattoo.",
    ],
};

export function evaluateGender(answers: Answer[], questions: Question[] = QUESTIONS): GenderResult {
    let score = 0;
    let chaosScore = 0; // Track how unpredictable the answers are

    // Calculate score based on answers - now both yes AND no have specific weights
    for (const answer of answers) {
        const question = questions.find(q => q.id === answer.questionId);
        if (question) {
            if (answer.response) {
                score += question.yesWeight;
            } else {
                score += question.noWeight; // No longer just inverse - has its own weight!
            }
            
            // Track chaos: if yes and no weights have same sign, it's a chaotic question
            if ((question.yesWeight > 0 && question.noWeight > 0) || 
                (question.yesWeight < 0 && question.noWeight < 0)) {
                chaosScore += 10;
            }
        }
    }

    // Determine gender based on score
    let gender: Gender;
    let confidence: number;

    // High chaos = meme genders more likely
    const chaosFactor = chaosScore / answers.length;

    if (chaosFactor > 5 && Math.abs(score) < 100) {
        // Chaotic answering pattern - pick a random meme gender
        const memeGenders: { gender: Gender; confidence: number }[] = [
            { gender: 'Attack Helicopter', confidence: 100 },
            { gender: 'Certified Gamer', confidence: 69 },
            { gender: 'Discord Mod', confidence: 42 },
            { gender: 'NPC', confidence: 50 },
            { gender: 'E-Girl', confidence: 77 },
        ];
        const pick = memeGenders[Math.floor(Math.random() * memeGenders.length)];
        gender = pick.gender;
        confidence = pick.confidence;
    } else if (score > 200) {
        // Extremely high male score - might be Sigma or Incel
        const random = Math.random();
        if (random < 0.3) {
            gender = 'Sigma Male';
            confidence = 99;
        } else if (random < 0.5) {
            gender = 'Incel';
            confidence = 87;
        } else {
            gender = 'Male';
            confidence = Math.min(99, 60 + score / 5);
        }
    } else if (score < -200) {
        // Extremely low score - might be Femcel
        const random = Math.random();
        if (random < 0.35) {
            gender = 'Femcel';
            confidence = 85;
        } else {
            gender = 'Female';
            confidence = Math.min(99, 60 + Math.abs(score) / 5);
        }
    } else if (score > 150) {
        gender = 'Male';
        confidence = Math.min(99, 60 + score / 5);
    } else if (score < -150) {
        gender = 'Female';
        confidence = Math.min(99, 60 + Math.abs(score) / 5);
    } else if (score > 80) {
        const random = Math.random();
        if (random < 0.2) {
            gender = 'Certified Gamer';
            confidence = 69;
        } else if (random < 0.35) {
            gender = 'Sigma Male';
            confidence = 74;
        } else {
            gender = 'Male';
            confidence = 55 + score / 6;
        }
    } else if (score < -80) {
        const random = Math.random();
        if (random < 0.25) {
            gender = 'E-Girl';
            confidence = 77;
        } else {
            gender = 'Female';
            confidence = 55 + Math.abs(score) / 6;
        }
    } else if (score > 30) {
        const random = Math.random();
        if (random < 0.2) {
            gender = 'Discord Mod';
            confidence = 42;
        } else if (random < 0.35) {
            gender = 'Certified Gamer';
            confidence = 69;
        } else if (random < 0.45) {
            gender = 'Incel';
            confidence = 66;
        } else {
            gender = 'Male';
            confidence = 50 + score / 4;
        }
    } else if (score < -30) {
        const random = Math.random();
        if (random < 0.2) {
            gender = 'Femcel';
            confidence = 65;
        } else {
            gender = 'Female';
            confidence = 50 + Math.abs(score) / 4;
        }
    } else {
        // Near zero = NPC or Attack Helicopter
        const random = Math.random();
        if (random < 0.5) {
            gender = 'NPC';
            confidence = 100;
        } else {
            gender = 'Attack Helicopter';
            confidence = 100;
        }
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