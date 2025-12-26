import { Answer, Gender, Question, QUESTIONS } from '../types';

export interface GenderResult {
    gender: Gender;
    confidence: number;
    funnyMessage: string;
    iq: number;
    iqMessage: string;
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
    let iqScore = 100; // Start at average IQ of 100
    
    // Track specific personality markers for meme genders
    let bitternessScore = 0;      // Incel/Femcel indicator
    let onlineScore = 0;          // Discord Mod/E-Girl indicator  
    let sigmaScore = 0;           // Sigma Male indicator
    let gamerScore = 0;           // Certified Gamer indicator
    let touchGrassScore = 0;      // How chronically online are you
    let chaosEnergy = 0;          // Attack Helicopter / NPC indicator

    // Questions that indicate specific personality types (by ID) - EXPANDED for more meme gender hits
    const bitternessQuestions = [33, 43, 44, 50, 56, 66, 67, 68, 69, 70, 94, 101, 123, 125, 268, 270, 271, 272, 274, 315, 316, 317, 318, 319, 321]; // Dating/relationship trauma, emotional unavailability
    const onlineQuestions = [30, 32, 34, 38, 58, 76, 77, 78, 79, 80, 98, 99, 100, 146, 147, 148, 149, 150, 259, 260, 261, 262, 263, 264, 265, 266];  // Discord, ratio, VTubers, internet culture
    const sigmaQuestions = [3, 6, 17, 24, 55, 71, 72, 73, 74, 75, 91, 93, 95, 121, 122, 123, 124, 125, 126, 127, 128, 155, 257, 275, 276, 278, 299, 300, 302, 304];  // CEO videos, cold showers, high value, grindset, brutal honesty
    const gamerQuestions = [9, 36, 40, 46, 47, 86, 87, 88, 89, 90, 262, 307, 308];   // Lag blame, gaming chair, rage, banned from platforms
    const egirlQuestions = [81, 82, 83, 84, 85, 94, 102, 103, 104, 105, 133, 134, 146, 147, 150, 159, 160, 255, 256, 284, 288, 290, 331, 332, 339, 340, 345];  // Dyed hair, aesthetic, existential vibes, dramatic
    const touchGrassQuestions = [96, 97, 98, 100, 78, 80, 34, 30];                   // Sun, grass, online vs IRL friends, Discord calls
    const chaosQuestions = [253, 258, 275, 279, 280, 282, 286, 307, 324, 326, 328, 334, 337, 338, 346]; // Pure chaotic energy questions

    // Calculate score based on answers - now both yes AND no have specific weights
    for (const answer of answers) {
        const question = questions.find(q => q.id === answer.questionId);
        if (question) {
            if (answer.response) {
                score += question.yesWeight;
                // Add IQ points if the question has IQ weights
                if (question.yesIQ !== undefined) iqScore += question.yesIQ;
            } else {
                score += question.noWeight; // No longer just inverse - has its own weight!
                if (question.noIQ !== undefined) iqScore += question.noIQ;
            }
            
            // Track chaos: if yes and no weights have same sign, it's a chaotic question
            if ((question.yesWeight > 0 && question.noWeight > 0) || 
                (question.yesWeight < 0 && question.noWeight < 0)) {
                chaosScore += 10;
            }
            
            // Track personality markers based on specific answers
            if (bitternessQuestions.includes(question.id)) {
                // Bitterness: saying yes to emotional damage questions OR no to recovery questions
                if (answer.response && [33, 50, 56, 66, 68, 69, 70, 123, 125, 268, 270, 315, 316, 318].includes(question.id)) bitternessScore += 18;
                if (!answer.response && [43, 269, 271].includes(question.id)) bitternessScore += 22; // Can't recover, cynical about love
                if (answer.response && [44, 67, 101, 272, 274, 317, 319, 321].includes(question.id)) bitternessScore += 15;
            }
            
            if (onlineQuestions.includes(question.id)) {
                if (answer.response) onlineScore += 15; // Increased from 12
                // Extra points for the really chronically online stuff
                if (answer.response && [78, 80, 100, 146, 147, 150, 260, 262, 263, 266].includes(question.id)) onlineScore += 12; // Increased from 8
            }
            
            if (sigmaQuestions.includes(question.id)) {
                if (answer.response) sigmaScore += 15; // Increased from 12
                // Extra points for peak sigma / Andrew Tate behavior
                if (answer.response && [72, 73, 74, 93, 95, 121, 122, 124, 126, 127, 128, 257, 275, 299, 300, 304].includes(question.id)) sigmaScore += 12; // Increased from 10
            }
            
            if (gamerQuestions.includes(question.id)) {
                if (answer.response) gamerScore += 18; // Increased from 15
                // Extra points for heated gamer moments
                if (answer.response && [86, 89, 90, 307, 308].includes(question.id)) gamerScore += 14; // Increased from 10
            }
            
            if (egirlQuestions.includes(question.id)) {
                if (answer.response) onlineScore += 14; // Increased from 10, E-girl feeds into online score
            }
            
            if (touchGrassQuestions.includes(question.id)) {
                // Saying NO to touching grass = more chronically online
                if (!answer.response) touchGrassScore += 25; // Increased from 20
            }
            
            if (chaosQuestions.includes(question.id)) {
                // Track chaotic energy for Attack Helicopter / NPC results
                if (answer.response) chaosEnergy += 18;
                // Some questions add chaos regardless of answer
                if ([279, 337].includes(question.id)) chaosEnergy += 10;
            }
        }
    }

    // Determine gender based on score
    let gender: Gender;
    let confidence: number;

    // High chaos = meme genders more likely
    const chaosFactor = chaosScore / answers.length;
    
    // Calculate the maximum possible score to normalize confidence
    const maxPossibleScore = questions.reduce((sum, q) => sum + Math.max(Math.abs(q.yesWeight), Math.abs(q.noWeight)), 0);
    
    // Helper function to calculate genuine confidence
    // Based on: how extreme the score is, how consistent answers were, distance from boundaries
    const calculateConfidence = (currentScore: number, lowerBound: number, upperBound: number): number => {
        const absScore = Math.abs(currentScore);
        const range = upperBound - lowerBound;
        
        // How far into this category are we? (0 = at boundary, 1 = at next threshold)
        const distanceFromLowerBound = absScore - lowerBound;
        const positionInRange = range > 0 ? distanceFromLowerBound / range : 1;
        
        // Base confidence from position in range (40-70%)
        const positionConfidence = 40 + (positionInRange * 30);
        
        // Bonus from overall score strength relative to max possible (0-20%)
        const scoreStrength = Math.min(absScore / (maxPossibleScore * 0.5), 1);
        const strengthBonus = scoreStrength * 20;
        
        // Penalty for chaotic/inconsistent answers (0-15% penalty)
        const chaosPenalty = Math.min(chaosFactor * 3, 15);
        
        // Final confidence, clamped between 35% and 99%
        return Math.min(99, Math.max(35, positionConfidence + strengthBonus - chaosPenalty));
    };

    // NEW: Check for chaos energy first - high chaos = Attack Helicopter
    if (chaosEnergy >= 40 || (chaosFactor > 3 && Math.abs(score) < 80)) {
        // Chaotic answering pattern or high chaos energy
        if (chaosEnergy >= 60 || Math.random() < 0.6) {
            gender = 'Attack Helicopter';
        } else {
            const memeGenders: Gender[] = ['Certified Gamer', 'Discord Mod', 'NPC', 'E-Girl'];
            gender = memeGenders[Math.floor(Math.random() * memeGenders.length)];
        }
        // Confidence based on how chaotic + how indeterminate the score is
        const chaosConfidence = Math.min(chaosFactor / 8, 1) * 45; // Up to 45% from chaos
        const indeterminacyConfidence = (1 - Math.abs(score) / 80) * 35; // Up to 35% from low score
        confidence = 25 + chaosConfidence + indeterminacyConfidence; // Base 25% + bonuses
    } 
    // Check for personality-specific genders (LOWERED THRESHOLDS)
    else if (bitternessScore >= 35 && score > 25) {
        // High bitterness + male-leaning = Incel (lowered from 50/40)
        gender = 'Incel';
        confidence = calculateConfidence(bitternessScore, 35, 80);
    } else if (bitternessScore >= 35 && score < -25) {
        // High bitterness + female-leaning = Femcel (lowered from 50/-40)
        gender = 'Femcel';
        confidence = calculateConfidence(bitternessScore, 35, 80);
    } else if (sigmaScore >= 40 && score > 50) {
        // High sigma indicators + male = Sigma Male (lowered from 60/80)
        gender = 'Sigma Male';
        confidence = calculateConfidence(sigmaScore, 40, 100);
    } else if (gamerScore >= 35 && score > 10) {
        // High gamer indicators = Certified Gamer (lowered from 50/20)
        gender = 'Certified Gamer';
        confidence = calculateConfidence(gamerScore, 35, 80);
    } else if (onlineScore >= 40 && score < -10) {
        // High online score + female-leaning = E-Girl (lowered from 60/-20)
        gender = 'E-Girl';
        confidence = calculateConfidence(onlineScore, 40, 80);
    } else if (onlineScore >= 50 && touchGrassScore >= 25) {
        // Very online + doesn't touch grass = Discord Mod (lowered from 70/40)
        gender = 'Discord Mod';
        confidence = calculateConfidence(onlineScore, 50, 100);
    } else if (touchGrassScore >= 40 && Math.abs(score) < 50) {
        // Chronically online + neutral gender = NPC or Discord Mod (lowered from 60/60)
        if (onlineScore > 30) {
            gender = 'Discord Mod';
        } else {
            gender = 'NPC';
        }
        confidence = calculateConfidence(touchGrassScore, 40, 70);
    }
    // Fall back to score-based determination (INCREASED meme gender chances)
    else if (score > 150) {
        // High male score - decent chance of Sigma/Incel based on personality
        if (sigmaScore >= 25 && Math.random() < 0.45) {
            gender = 'Sigma Male';
        } else if (bitternessScore >= 25 && Math.random() < 0.4) {
            gender = 'Incel';
        } else if (gamerScore >= 20 && Math.random() < 0.35) {
            gender = 'Certified Gamer';
        } else {
            gender = 'Male';
        }
        confidence = calculateConfidence(score, 150, maxPossibleScore * 0.5);
    } else if (score < -150) {
        // High female score - chance of Femcel/E-Girl based on personality
        if (bitternessScore >= 25 && Math.random() < 0.45) {
            gender = 'Femcel';
        } else if (onlineScore >= 25 && Math.random() < 0.4) {
            gender = 'E-Girl';
        } else {
            gender = 'Female';
        }
        confidence = calculateConfidence(score, 150, maxPossibleScore * 0.5);
    } else if (score > 80) {
        if (gamerScore >= 25 && Math.random() < 0.45) {
            gender = 'Certified Gamer';
        } else if (sigmaScore >= 25 && Math.random() < 0.4) {
            gender = 'Sigma Male';
        } else if (onlineScore >= 25 && Math.random() < 0.3) {
            gender = 'Discord Mod';
        } else {
            gender = 'Male';
        }
        confidence = calculateConfidence(score, 80, 150);
    } else if (score < -80) {
        if (onlineScore >= 25 && Math.random() < 0.45) {
            gender = 'E-Girl';
        } else if (bitternessScore >= 25 && Math.random() < 0.35) {
            gender = 'Femcel';
        } else {
            gender = 'Female';
        }
        confidence = calculateConfidence(score, 80, 150);
    } else if (score > 30) {
        if (gamerScore >= 20 && Math.random() < 0.4) {
            gender = 'Certified Gamer';
        } else if (onlineScore >= 25 && Math.random() < 0.35) {
            gender = 'Discord Mod';
        } else if (sigmaScore >= 20 && Math.random() < 0.35) {
            gender = 'Sigma Male';
        } else if (bitternessScore >= 20 && Math.random() < 0.3) {
            gender = 'Incel';
        } else {
            gender = 'Male';
        }
        confidence = calculateConfidence(score, 30, 80);
    } else if (score < -30) {
        if (bitternessScore >= 20 && Math.random() < 0.4) {
            gender = 'Femcel';
        } else if (onlineScore >= 20 && Math.random() < 0.4) {
            gender = 'E-Girl';
        } else if (touchGrassScore >= 15 && Math.random() < 0.25) {
            gender = 'Discord Mod';
        } else {
            gender = 'Female';
        }
        confidence = calculateConfidence(score, 30, 80);
    } else {
        // Near zero = FUN MEME GENDERS TIME! 🎉
        // This is the zone where we give meme genders more often
        const random = Math.random();
        if (gamerScore >= 15 && random < 0.25) {
            gender = 'Certified Gamer';
        } else if (onlineScore >= 20 && random < 0.25) {
            gender = 'Discord Mod';
        } else if (random < 0.35) {
            gender = 'NPC';
        } else if (random < 0.65) {
            gender = 'Attack Helicopter';
        } else if (chaosEnergy >= 20) {
            gender = 'Attack Helicopter';
        } else {
            // Even in neutral zone, slight lean toward meme genders
            const memeGenders: Gender[] = ['NPC', 'Attack Helicopter', 'Discord Mod', 'Certified Gamer'];
            gender = memeGenders[Math.floor(Math.random() * memeGenders.length)];
        }
        // For scores near zero, confidence is based on how close to zero we are
        // Closer to zero = MORE confident it's truly indeterminate (which is funny)
        const zeroProximity = 1 - (Math.abs(score) / 30);
        confidence = 40 + (zeroProximity * 40) - Math.min(chaosFactor * 2, 10);
    }

    // Pick a random funny message
    const messages = FUNNY_MESSAGES[gender];
    const funnyMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Clamp IQ to reasonable range and add some randomness for realism
    const finalIQ = Math.max(45, Math.min(180, iqScore + Math.floor(Math.random() * 10) - 5));
    
    // Get IQ message based on range (separate from gender!)
    const getIQMessage = (iq: number): string => {
        if (iq >= 145) return "Certified genius";
        if (iq >= 130) return "Big brain energy";
        if (iq >= 115) return "Above average";
        if (iq >= 100) return "Average";
        if (iq >= 85) return "Below average";
        if (iq >= 70) return "Room temperature IQ";
        return "Smooth brain";
    };

    return {
        gender,
        confidence: Math.round(confidence),
        funnyMessage,
        iq: finalIQ,
        iqMessage: getIQMessage(finalIQ),
    };
}