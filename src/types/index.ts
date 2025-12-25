export interface Question {
    id: number;
    text: string;
    maleWeight: number; // positive = more male, negative = more female
}

export interface Answer {
    questionId: number;
    response: boolean; // true = Yes, false = No
}

export type Gender = 'Male' | 'Female' | 'Attack Helicopter' | 'Certified Gamer' | 'Discord Mod';

// The funny questions for our gender checker
export const QUESTIONS: Question[] = [
    { id: 1, text: "Do you have a penis?", maleWeight: 50 },
    { id: 2, text: "Are you racist?", maleWeight: 10 },
    { id: 3, text: "Do you play Call of Duty?", maleWeight: 15 },
    { id: 4, text: "Have you ever cried during a movie?", maleWeight: -20 },
    { id: 5, text: "Do you know what an Allen wrench is?", maleWeight: 25 },
    { id: 6, text: "Have you ever peed standing up?", maleWeight: 30 },
    { id: 7, text: "Do you enjoy pumpkin spice lattes?", maleWeight: -25 },
    { id: 8, text: "Can you name more than 3 car brands?", maleWeight: 15 },
    { id: 9, text: "Do you take more than 10 minutes to get ready?", maleWeight: -20 },
    { id: 10, text: "Have you ever punched drywall?", maleWeight: 35 },
    { id: 11, text: "Do you have a favorite dinosaur?", maleWeight: 20 },
    { id: 12, text: "Have you ever said 'that's what she said'?", maleWeight: 25 },
    { id: 13, text: "Do you reply 'K' to long texts?", maleWeight: 30 },
    { id: 14, text: "Have you ever watched a 3-hour video essay at 2am?", maleWeight: 20 },
    { id: 15, text: "Do you have more than 47 tabs open right now?", maleWeight: -15 },
    { id: 16, text: "Have you ever mansplained something?", maleWeight: 40 },
    { id: 17, text: "Do you own a candle that cost more than $20?", maleWeight: -30 },
    { id: 18, text: "Can you parallel park?", maleWeight: 20 },
    { id: 19, text: "Do you use the thermostat as a weapon?", maleWeight: 35 },
    { id: 20, text: "Have you ever said 'I'm not like other girls'?", maleWeight: -35 },
    { id: 21, text: "Do you sit in the shower?", maleWeight: -15 },
    { id: 22, text: "Have you ever grunted as a valid response?", maleWeight: 30 },
    { id: 23, text: "Do you remember your friends' birthdays without Facebook?", maleWeight: -25 },
    { id: 24, text: "Have you ever used duct tape as a permanent solution?", maleWeight: 35 },
    { id: 25, text: "Do you own more shoes than you need?", maleWeight: -30 },
    { id: 26, text: "Have you ever refused to ask for directions?", maleWeight: 40 },
    { id: 27, text: "Do you have a skincare routine?", maleWeight: -35 },
    { id: 28, text: "Have you ever nodded at another person as a greeting?", maleWeight: 25 },
    { id: 29, text: "Do you judge people's font choices?", maleWeight: -15 },
    { id: 30, text: "Have you ever called a pet 'buddy' or 'pal'?", maleWeight: 20 },
    { id: 31, text: "Do you use emojis unironically? 💅", maleWeight: -25 },
    { id: 32, text: "Have you ever referred to your car as 'she'?", maleWeight: 30 },
    { id: 33, text: "Do you have trust issues with gas station sushi?", maleWeight: -10 },
    { id: 34, text: "Have you ever fixed something with violence?", maleWeight: 35 },
    { id: 35, text: "Do you take bathroom breaks just to scroll your phone?", maleWeight: 25 },
    { id: 36, text: "Have you ever said 'we have food at home'?", maleWeight: -20 },
    { id: 37, text: "Do you know the difference between beige and cream?", maleWeight: -30 },
    { id: 38, text: "Have you ever fallen asleep during a movie you picked?", maleWeight: 30 },
    { id: 39, text: "Do you have a folder of memes saved on your phone?", maleWeight: 15 },
    { id: 40, text: "Have you ever said 'it's not that heavy' and hurt yourself?", maleWeight: 40 },
    { id: 41, text: "Do you have crippling student debt?", maleWeight: 0 },
    { id: 42, text: "Have you ever stared into the void and felt it stare back?", maleWeight: 15 },
    { id: 43, text: "Do you bottle up your emotions until you explode?", maleWeight: 35 },
    { id: 44, text: "Have you ever googled your symptoms and accepted death?", maleWeight: -20 },
    { id: 45, text: "Do you have a parasocial relationship with a streamer?", maleWeight: 25 },
    { id: 46, text: "Have you ever eaten shredded cheese at 3am over the sink?", maleWeight: 30 },
    { id: 47, text: "Do you laugh at your own texts before sending them?", maleWeight: -15 },
    { id: 48, text: "Have you ever had a mental breakdown in a Target?", maleWeight: -35 },
    { id: 49, text: "Do you use humor to mask your trauma?", maleWeight: 20 },
    { id: 50, text: "Have you ever rage quit life (temporarily)?", maleWeight: 25 },
    { id: 51, text: "Do you have unread messages you're scared to open?", maleWeight: -10 },
    { id: 52, text: "Have you ever cried in a Wendy's parking lot?", maleWeight: -25 },
    { id: 53, text: "Do you dissociate during important conversations?", maleWeight: 10 },
    { id: 54, text: "Have you ever threatened an inanimate object?", maleWeight: 30 },
    { id: 55, text: "Do you have beef with a random person from 7 years ago?", maleWeight: -20 },
    { id: 56, text: "Have you ever given your WiFi router a pep talk?", maleWeight: 25 },
    { id: 57, text: "Do you practice arguments in the shower that will never happen?", maleWeight: -15 },
    { id: 58, text: "Have you ever said 'I should get a therapist' and then didn't?", maleWeight: 30 },
    { id: 59, text: "Do you have a playlist for when you want to feel worse?", maleWeight: -25 },
    { id: 60, text: "Have you ever impulse bought something you can't afford?", maleWeight: -20 },
    { id: 61, text: "Do you have an energy drink addiction?", maleWeight: 35 },
    { id: 62, text: "Have you ever been emotionally damaged by a cartoon?", maleWeight: -15 },
    { id: 63, text: "Do you project your issues onto fictional characters?", maleWeight: -20 },
    { id: 64, text: "Have you ever ghosted someone and felt bad about it (but not that bad)?", maleWeight: 20 },
    { id: 65, text: "Do you have a toxic trait you're kind of proud of?", maleWeight: 15 },
];