export interface Question {
    id: number;
    text: string;
    yesWeight: number;  // Weight when answering YES
    noWeight: number;   // Weight when answering NO (makes it unpredictable!)
}

export interface Answer {
    questionId: number;
    response: boolean; // true = Yes, false = No
}

export type Gender = 'Male' | 'Female' | 'Attack Helicopter' | 'Certified Gamer' | 'Discord Mod' | 'Incel' | 'Femcel' | 'NPC' | 'Sigma Male' | 'E-Girl';

// Dark humor / stereotype questions - weights are intentionally chaotic
export const QUESTIONS: Question[] = [
    // Classic stereotypes with twists
    { id: 1, text: "Do you pee standing up? (be honest)", yesWeight: 40, noWeight: 15 },
    { id: 2, text: "Have you ever blamed your mood on 'being tired'?", yesWeight: -25, noWeight: 30 },
    { id: 3, text: "Do you think you could take a goose in a fight?", yesWeight: 35, noWeight: -20 },
    { id: 4, text: "Have you ever apologized for someone bumping into YOU?", yesWeight: -30, noWeight: 25 },
    { id: 5, text: "Do you own more than one screwdriver?", yesWeight: 30, noWeight: -15 },
    
    // Dark humor territory
    { id: 6, text: "Would you survive a horror movie? (honestly)", yesWeight: 25, noWeight: -35 },
    { id: 7, text: "Have you ever cried because you were 'frustrated, not sad'?", yesWeight: -40, noWeight: 20 },
    { id: 8, text: "Do you think cereal is soup?", yesWeight: 15, noWeight: -25 },
    { id: 9, text: "Have you ever punched drywall and immediately regretted it?", yesWeight: 45, noWeight: -10 },
    { id: 10, text: "Do you believe in astrology? (even a little bit)", yesWeight: -35, noWeight: 30 },
    
    // Chaotic neutral questions
    { id: 11, text: "Have you ever eaten a meal standing over the sink like a rat?", yesWeight: 35, noWeight: -25 },
    { id: 12, text: "Do you remember what you did wrong in an argument from 2017?", yesWeight: -30, noWeight: 40 },
    { id: 13, text: "Have you ever said 'I'm not crying, you're crying'?", yesWeight: -20, noWeight: 25 },
    { id: 14, text: "Do you use your check engine light as a mood indicator?", yesWeight: 30, noWeight: -35 },
    { id: 15, text: "Have you ever mansplained something incorrectly?", yesWeight: 50, noWeight: -15 },
    
    // Stereotype chaos
    { id: 16, text: "Can you name 5 makeup brands? (no googling)", yesWeight: -40, noWeight: 20 },
    { id: 17, text: "Do you think you could change a tire faster than you could explain your feelings?", yesWeight: 45, noWeight: -30 },
    { id: 18, text: "Have you ever held a grudge for more than 5 years?", yesWeight: -25, noWeight: 35 },
    { id: 19, text: "Do you consider 'nodding upward' a valid greeting?", yesWeight: 40, noWeight: -20 },
    { id: 20, text: "Have you ever bought something just because it was on sale?", yesWeight: -30, noWeight: 25 },
    
    // Questionable life choices
    { id: 21, text: "Would you rather fight 100 duck-sized horses or 1 horse-sized duck?", yesWeight: 20, noWeight: -30 },
    { id: 22, text: "Do you think Die Hard is a Christmas movie?", yesWeight: 35, noWeight: -25 },
    { id: 23, text: "Have you ever used 'fine' to mean 'not fine at all'?", yesWeight: -45, noWeight: 30 },
    { id: 24, text: "Do you refuse to ask for directions even when lost for 30 minutes?", yesWeight: 50, noWeight: -20 },
    { id: 25, text: "Have you ever bought a plant knowing damn well you'll kill it?", yesWeight: -35, noWeight: 25 },
    
    // Internet brain damage
    { id: 26, text: "Do you know what 'the mitochondria is the powerhouse of the cell' means?", yesWeight: 15, noWeight: -15 },
    { id: 27, text: "Have you ever trauma-dumped on someone you just met?", yesWeight: -30, noWeight: 40 },
    { id: 28, text: "Do you think you could win an argument with your intrusive thoughts?", yesWeight: 25, noWeight: -35 },
    { id: 29, text: "Have you ever said 'that's crazy' while not listening at all?", yesWeight: 40, noWeight: -25 },
    { id: 30, text: "Do you have a parasocial relationship with a fictional character?", yesWeight: -35, noWeight: 30 },
    
    // Peak stereotypes
    { id: 31, text: "Can you tell the difference between eggshell and ivory?", yesWeight: -45, noWeight: 35 },
    { id: 32, text: "Have you ever called something 'mid' unironically?", yesWeight: 30, noWeight: -20 },
    { id: 33, text: "Do you think emotional availability is a trap?", yesWeight: 45, noWeight: -40 },
    { id: 34, text: "Have you ever watched a 4-hour video essay about a children's show?", yesWeight: 25, noWeight: -30 },
    { id: 35, text: "Do you own more than 20 pairs of shoes?", yesWeight: -40, noWeight: 30 },
    
    // Unhinged questions
    { id: 36, text: "Have you ever threatened a printer with physical violence?", yesWeight: 35, noWeight: -25 },
    { id: 37, text: "Do you believe pineapple belongs on pizza?", yesWeight: -20, noWeight: 25 },
    { id: 38, text: "Have you ever used 'lol' when you were actually dead inside?", yesWeight: -30, noWeight: 35 },
    { id: 39, text: "Do you have a specific way the dishwasher MUST be loaded?", yesWeight: -35, noWeight: 25 },
    { id: 40, text: "Have you ever fixed electronics by hitting them?", yesWeight: 40, noWeight: -30 },
    
    // Emotional damage
    { id: 41, text: "Do you bottle up your emotions until they explode at Ikea?", yesWeight: 35, noWeight: -40 },
    { id: 42, text: "Have you ever said 'I'm fine' through gritted teeth?", yesWeight: -35, noWeight: 30 },
    { id: 43, text: "Do you think you could emotionally recover from a mean comment in 2009?", yesWeight: 25, noWeight: -45 },
    { id: 44, text: "Have you ever cried in a parked car to 'get it out of your system'?", yesWeight: -40, noWeight: 35 },
    { id: 45, text: "Do you consider 'grunting' valid communication?", yesWeight: 45, noWeight: -25 },
    
    // Big brain questions
    { id: 46, text: "Have you ever rage-quit a board game at a family gathering?", yesWeight: 30, noWeight: -35 },
    { id: 47, text: "Do you think your music taste is superior to everyone else's?", yesWeight: 35, noWeight: -30 },
    { id: 48, text: "Have you ever pretended to understand something to avoid looking dumb?", yesWeight: 40, noWeight: -35 },
    { id: 49, text: "Do you have trust issues with people who don't use turn signals?", yesWeight: 25, noWeight: -20 },
    { id: 50, text: "Have you ever rehearsed a conversation that will never happen?", yesWeight: -35, noWeight: 30 },
    
    // Final chaos
    { id: 51, text: "Do you think the thermostat should be treated like a democracy?", yesWeight: -25, noWeight: 45 },
    { id: 52, text: "Have you ever said 'we have food at home' and meant it violently?", yesWeight: -30, noWeight: 35 },
    { id: 53, text: "Do you judge people who clap when the plane lands?", yesWeight: 20, noWeight: -25 },
    { id: 54, text: "Have you ever weaponized the silent treatment?", yesWeight: -40, noWeight: 35 },
    { id: 55, text: "Do you believe you could survive the zombie apocalypse?", yesWeight: 40, noWeight: -35 },
    
    // Wildcard questions (nearly neutral but chaotic)
    { id: 56, text: "Have you ever had a parasocial breakup that hurt more than a real one?", yesWeight: -30, noWeight: 25 },
    { id: 57, text: "Do you think water has a taste?", yesWeight: 15, noWeight: -20 },
    { id: 58, text: "Have you ever been personally victimized by autocorrect?", yesWeight: -25, noWeight: 20 },
    { id: 59, text: "Do you have a 'chair' that's actually a clothes storage system?", yesWeight: 30, noWeight: -35 },
    { id: 60, text: "Have you ever said 'let me speak to the manager' unironically?", yesWeight: -35, noWeight: 30 },
];