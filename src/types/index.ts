export interface Question {
    id: number;
    text: string;
    yesWeight: number;  // Weight when answering YES
    noWeight: number;   // Weight when answering NO (makes it unpredictable!)
    yesIQ?: number;     // IQ points when answering YES
    noIQ?: number;      // IQ points when answering NO
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
    { id: 2, text: "Have you ever blamed your mood on 'being tired'?", yesWeight: -25, noWeight: 30, yesIQ: -2, noIQ: 3 },
    { id: 3, text: "Do you think you could take a goose in a fight?", yesWeight: 35, noWeight: -20, yesIQ: -5, noIQ: 3 },
    { id: 4, text: "Have you ever apologized for someone bumping into YOU?", yesWeight: -30, noWeight: 25 },
    { id: 5, text: "Do you own more than one screwdriver?", yesWeight: 30, noWeight: -15, yesIQ: 3, noIQ: -2 },
    
    // Dark humor territory
    { id: 6, text: "Would you survive a horror movie? (honestly)", yesWeight: 25, noWeight: -35, yesIQ: -8, noIQ: 5 },
    { id: 7, text: "Have you ever cried because you were 'frustrated, not sad'?", yesWeight: -40, noWeight: 20 },
    { id: 8, text: "Do you think cereal is soup?", yesWeight: 15, noWeight: -25, yesIQ: 5, noIQ: -3 },
    { id: 9, text: "Have you ever punched drywall and immediately regretted it?", yesWeight: 45, noWeight: -10, yesIQ: -10, noIQ: 3 },
    { id: 10, text: "Do you believe in astrology? (even a little bit)", yesWeight: -35, noWeight: 30, yesIQ: -8, noIQ: 5 },
    
    // Chaotic neutral questions
    { id: 11, text: "Have you ever eaten a meal standing over the sink like a rat?", yesWeight: 35, noWeight: -25 },
    { id: 12, text: "Do you remember what you did wrong in an argument from 2017?", yesWeight: -30, noWeight: 40, yesIQ: 3, noIQ: -2 },
    { id: 13, text: "Have you ever said 'I'm not crying, you're crying'?", yesWeight: -20, noWeight: 25 },
    { id: 14, text: "Do you use your check engine light as a mood indicator?", yesWeight: 30, noWeight: -35, yesIQ: -8, noIQ: 5 },
    { id: 15, text: "Have you ever mansplained something incorrectly?", yesWeight: 50, noWeight: -15, yesIQ: -10, noIQ: 5 },
    
    // Stereotype chaos
    { id: 16, text: "Can you name 5 makeup brands? (no googling)", yesWeight: -40, noWeight: 20, yesIQ: 2, noIQ: -1 },
    { id: 17, text: "Do you think you could change a tire faster than you could explain your feelings?", yesWeight: 45, noWeight: -30 },
    { id: 18, text: "Have you ever held a grudge for more than 5 years?", yesWeight: -25, noWeight: 35, yesIQ: -3, noIQ: 2 },
    { id: 19, text: "Do you consider 'nodding upward' a valid greeting?", yesWeight: 40, noWeight: -20 },
    { id: 20, text: "Have you ever bought something just because it was on sale?", yesWeight: -30, noWeight: 25, yesIQ: -5, noIQ: 5 },
    
    // Questionable life choices
    { id: 21, text: "Would you rather fight 100 duck-sized horses or 1 horse-sized duck?", yesWeight: 20, noWeight: -30, yesIQ: 5, noIQ: -3 },
    { id: 22, text: "Do you think Die Hard is a Christmas movie?", yesWeight: 35, noWeight: -25, yesIQ: 3, noIQ: -2 },
    { id: 23, text: "Have you ever used 'fine' to mean 'not fine at all'?", yesWeight: -45, noWeight: 30 },
    { id: 24, text: "Do you refuse to ask for directions even when lost for 30 minutes?", yesWeight: 50, noWeight: -20, yesIQ: -10, noIQ: 5 },
    { id: 25, text: "Have you ever bought a plant knowing damn well you'll kill it?", yesWeight: -35, noWeight: 25, yesIQ: -3, noIQ: 2 },
    
    // Internet brain damage
    { id: 26, text: "Do you know what 'the mitochondria is the powerhouse of the cell' means?", yesWeight: 15, noWeight: -15, yesIQ: 5, noIQ: -5 },
    { id: 27, text: "Have you ever trauma-dumped on someone you just met?", yesWeight: -30, noWeight: 40, yesIQ: -5, noIQ: 3 },
    { id: 28, text: "Do you think you could win an argument with your intrusive thoughts?", yesWeight: 25, noWeight: -35, yesIQ: -5, noIQ: 5 },
    { id: 29, text: "Have you ever said 'that's crazy' while not listening at all?", yesWeight: 40, noWeight: -25, yesIQ: -5, noIQ: 3 },
    { id: 30, text: "Do you have a parasocial relationship with a fictional character?", yesWeight: -35, noWeight: 30, yesIQ: -3, noIQ: 2 },
    
    // Peak stereotypes
    { id: 31, text: "Can you tell the difference between eggshell and ivory?", yesWeight: -45, noWeight: 35, yesIQ: 5, noIQ: -2 },
    { id: 32, text: "Have you ever called something 'mid' unironically?", yesWeight: 30, noWeight: -20, yesIQ: -3, noIQ: 2 },
    { id: 33, text: "Do you think emotional availability is a trap?", yesWeight: 45, noWeight: -40, yesIQ: -5, noIQ: 5 },
    { id: 34, text: "Have you ever watched a 4-hour video essay about a children's show?", yesWeight: 25, noWeight: -30, yesIQ: 5, noIQ: -3 },
    { id: 35, text: "Do you own more than 20 pairs of shoes?", yesWeight: -40, noWeight: 30 },
    
    // Unhinged questions
    { id: 36, text: "Have you ever threatened a printer with physical violence?", yesWeight: 35, noWeight: -25, yesIQ: 3, noIQ: -2 },
    { id: 37, text: "Do you believe pineapple belongs on pizza?", yesWeight: -20, noWeight: 25 },
    { id: 38, text: "Have you ever used 'lol' when you were actually dead inside?", yesWeight: -30, noWeight: 35 },
    { id: 39, text: "Do you have a specific way the dishwasher MUST be loaded?", yesWeight: -35, noWeight: 25, yesIQ: 5, noIQ: -3 },
    { id: 40, text: "Have you ever fixed electronics by hitting them?", yesWeight: 40, noWeight: -30, yesIQ: -5, noIQ: 3 },
    
    // Emotional damage
    { id: 41, text: "Do you bottle up your emotions until they explode at Ikea?", yesWeight: 35, noWeight: -40, yesIQ: -5, noIQ: 5 },
    { id: 42, text: "Have you ever said 'I'm fine' through gritted teeth?", yesWeight: -35, noWeight: 30 },
    { id: 43, text: "Do you think you could emotionally recover from a mean comment in 2009?", yesWeight: 25, noWeight: -45, yesIQ: 5, noIQ: -5 },
    { id: 44, text: "Have you ever cried in a parked car to 'get it out of your system'?", yesWeight: -40, noWeight: 35 },
    { id: 45, text: "Do you consider 'grunting' valid communication?", yesWeight: 45, noWeight: -25, yesIQ: -5, noIQ: 3 },
    
    // Big brain questions
    { id: 46, text: "Have you ever rage-quit a board game at a family gathering?", yesWeight: 30, noWeight: -35, yesIQ: -8, noIQ: 3 },
    { id: 47, text: "Do you think your music taste is superior to everyone else's?", yesWeight: 35, noWeight: -30 },
    { id: 48, text: "Have you ever pretended to understand something to avoid looking dumb?", yesWeight: 40, noWeight: -35, yesIQ: -5, noIQ: 5 },
    { id: 49, text: "Do you have trust issues with people who don't use turn signals?", yesWeight: 25, noWeight: -20, yesIQ: 5, noIQ: -3 },
    { id: 50, text: "Have you ever rehearsed a conversation that will never happen?", yesWeight: -35, noWeight: 30, yesIQ: 3, noIQ: -2 },
    
    // Final chaos
    { id: 51, text: "Do you think the thermostat should be treated like a democracy?", yesWeight: -25, noWeight: 45, yesIQ: 3, noIQ: -3 },
    { id: 52, text: "Have you ever said 'we have food at home' and meant it violently?", yesWeight: -30, noWeight: 35 },
    { id: 53, text: "Do you judge people who clap when the plane lands?", yesWeight: 20, noWeight: -25, yesIQ: 5, noIQ: -5 },
    { id: 54, text: "Have you ever weaponized the silent treatment?", yesWeight: -40, noWeight: 35, yesIQ: -3, noIQ: 2 },
    { id: 55, text: "Do you believe you could survive the zombie apocalypse?", yesWeight: 40, noWeight: -35, yesIQ: -8, noIQ: 5 },
    
    // Wildcard questions (nearly neutral but chaotic)
    { id: 56, text: "Have you ever had a parasocial breakup that hurt more than a real one?", yesWeight: -30, noWeight: 25, yesIQ: -5, noIQ: 3 },
    { id: 57, text: "Do you think water has a taste?", yesWeight: 15, noWeight: -20, yesIQ: 5, noIQ: -3 },
    { id: 58, text: "Have you ever been personally victimized by autocorrect?", yesWeight: -25, noWeight: 20 },
    { id: 59, text: "Do you have a 'chair' that's actually a clothes storage system?", yesWeight: 30, noWeight: -35 },
    { id: 60, text: "Have you ever said 'let me speak to the manager' unironically?", yesWeight: -35, noWeight: 30, yesIQ: -5, noIQ: 3 },
    
    // Spicy stereotype questions
    { id: 61, text: "Do you think you're an above-average driver? (statistically impossible)", yesWeight: 45, noWeight: -30, yesIQ: -10, noIQ: 8 },
    { id: 62, text: "Have you ever used your parents' disappointment as motivation?", yesWeight: 25, noWeight: -20, yesIQ: 5, noIQ: -2 },
    { id: 63, text: "Do you take off your shoes before entering the house?", yesWeight: -15, noWeight: 20 },
    { id: 64, text: "Have you ever been told to 'eat more' by a relative?", yesWeight: -20, noWeight: 25 },
    { id: 65, text: "Do you have a drawer full of plastic bags inside other plastic bags?", yesWeight: -25, noWeight: 20 },
    
    // Incel/Femcel indicators
    { id: 66, text: "Do you think the dating market is 'rigged'?", yesWeight: 35, noWeight: -40, yesIQ: -8, noIQ: 5 },
    { id: 67, text: "Have you ever unironically said 'all men/women are the same'?", yesWeight: -30, noWeight: 25, yesIQ: -10, noIQ: 5 },
    { id: 68, text: "Do you think your face is the reason for your problems?", yesWeight: 40, noWeight: -35, yesIQ: -8, noIQ: 5 },
    { id: 69, text: "Have you ever calculated your 'league' numerically?", yesWeight: 45, noWeight: -25, yesIQ: -5, noIQ: 3 },
    { id: 70, text: "Do you believe height/looks matter more than personality?", yesWeight: 50, noWeight: -40, yesIQ: -8, noIQ: 5 },
    
    // Sigma/Andrew Tate arc
    { id: 71, text: "Have you ever watched a 'day in my life' video of a CEO?", yesWeight: 35, noWeight: -20, yesIQ: 3, noIQ: -2 },
    { id: 72, text: "Do you think waking up at 4AM makes you superior?", yesWeight: 45, noWeight: -30, yesIQ: -5, noIQ: 5 },
    { id: 73, text: "Have you ever called something a 'high value' or 'low value' trait?", yesWeight: 40, noWeight: -35, yesIQ: -8, noIQ: 5 },
    { id: 74, text: "Do you think cold showers build character?", yesWeight: 40, noWeight: -25, yesIQ: -3, noIQ: 2 },
    { id: 75, text: "Have you ever said 'I'm not like other guys/girls'?", yesWeight: 35, noWeight: -30, yesIQ: -5, noIQ: 3 },
    
    // Discord Mod / Chronically Online
    { id: 76, text: "Have you ever moderated anything with more than 100 members?", yesWeight: 30, noWeight: -25, yesIQ: 3, noIQ: -2 },
    { id: 77, text: "Do you know what 'ratio' means without googling?", yesWeight: 25, noWeight: -30, yesIQ: -3, noIQ: 2 },
    { id: 78, text: "Have you ever been in a Discord call for more than 8 hours?", yesWeight: 35, noWeight: -40, yesIQ: -5, noIQ: 3 },
    { id: 79, text: "Do you have opinions about VTubers?", yesWeight: 30, noWeight: -25, yesIQ: -3, noIQ: 2 },
    { id: 80, text: "Have you ever typed 'skill issue' to someone genuinely struggling?", yesWeight: 40, noWeight: -30, yesIQ: -5, noIQ: 3 },
    
    // E-Girl / E-Boy arc
    { id: 81, text: "Have you ever dyed your hair an unnatural color?", yesWeight: -35, noWeight: 25 },
    { id: 82, text: "Do you own any clothing from Hot Topic or similar?", yesWeight: -30, noWeight: 20 },
    { id: 83, text: "Have you ever used a filter that made you look like an anime character?", yesWeight: -35, noWeight: 30, yesIQ: -3, noIQ: 2 },
    { id: 84, text: "Do you know more than 3 My Chemical Romance songs?", yesWeight: -30, noWeight: 25, yesIQ: 2, noIQ: -2 },
    { id: 85, text: "Have you ever said 'it's not a phase' about something that was definitely a phase?", yesWeight: -25, noWeight: 30, yesIQ: -5, noIQ: 3 },
    
    // Gamer moments
    { id: 86, text: "Have you ever blamed lag for losing when your ping was fine?", yesWeight: 40, noWeight: -30, yesIQ: -8, noIQ: 5 },
    { id: 87, text: "Do you have a gaming chair that costs more than your mattress?", yesWeight: 45, noWeight: -25, yesIQ: -5, noIQ: 3 },
    { id: 88, text: "Have you ever said 'one more game' and played for 4 more hours?", yesWeight: 35, noWeight: -30, yesIQ: -3, noIQ: 2 },
    { id: 89, text: "Do you get unreasonably angry at children in online games?", yesWeight: 45, noWeight: -35, yesIQ: -10, noIQ: 5 },
    { id: 90, text: "Have you ever called a game 'dead' while still playing it daily?", yesWeight: 35, noWeight: -25, yesIQ: -5, noIQ: 3 },
    
    // More classic stereotypes with edge
    { id: 91, text: "Do you think you could beat your dad in a fight now?", yesWeight: 40, noWeight: -30, yesIQ: -5, noIQ: 3 },
    { id: 92, text: "Have you ever cried during a Pixar movie and denied it?", yesWeight: 35, noWeight: -40, yesIQ: -3, noIQ: 3 },
    { id: 93, text: "Do you own a katana or want to own one?", yesWeight: 45, noWeight: -20, yesIQ: -8, noIQ: 3 },
    { id: 94, text: "Have you ever said 'I could fix them' about a fictional villain?", yesWeight: -45, noWeight: 35, yesIQ: -5, noIQ: 3 },
    { id: 95, text: "Do you think being mysterious is a personality trait?", yesWeight: 40, noWeight: -35, yesIQ: -5, noIQ: 3 },
    
    // Touch grass indicators
    { id: 96, text: "Do you know what grass feels like? (recently)", yesWeight: -20, noWeight: 35, yesIQ: 3, noIQ: -5 },
    { id: 97, text: "Have you ever seen the sun this week?", yesWeight: -15, noWeight: 40, yesIQ: 3, noIQ: -5 },
    { id: 98, text: "Do you have more online friends than IRL friends?", yesWeight: 30, noWeight: -35, yesIQ: -3, noIQ: 2 },
    { id: 99, text: "Have you ever explained a meme to someone and watched their soul leave their body?", yesWeight: 25, noWeight: -20, yesIQ: 3, noIQ: -2 },
    { id: 100, text: "Do you think 'touching grass' is an insult?", yesWeight: 35, noWeight: -40, yesIQ: -5, noIQ: 5 },
    
    // Unhinged final questions
    { id: 101, text: "Have you ever won an argument in your head 3 days later?", yesWeight: -30, noWeight: 25, yesIQ: 3, noIQ: -2 },
    { id: 102, text: "Do you think your Spotify Wrapped says too much about you?", yesWeight: -25, noWeight: 30, yesIQ: 3, noIQ: -2 },
    { id: 103, text: "Have you ever felt called out by a horoscope post?", yesWeight: -40, noWeight: 35, yesIQ: -8, noIQ: 5 },
    { id: 104, text: "Do you have a finsta/private account for unhinged thoughts?", yesWeight: -35, noWeight: 25, yesIQ: -3, noIQ: 2 },
    { id: 105, text: "Have you ever screenshot a text to send to the group chat for analysis?", yesWeight: -40, noWeight: 30, yesIQ: 3, noIQ: -2 },
    
    // IQ Test Questions (semi-hidden brain teasers - yes/no format)
    { id: 106, text: "If you take 2 apples from 3 apples, do YOU have 2 apples?", yesWeight: 0, noWeight: 0, yesIQ: 8, noIQ: -10 },
    { id: 107, text: "A farmer has 17 sheep. All but 9 die. Does he have 9 sheep left?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -12 },
    { id: 108, text: "Is it legal for a man to marry his widow's sister?", yesWeight: 5, noWeight: -5, yesIQ: -15, noIQ: 12 },
    { id: 109, text: "Do you think you're smarter than the average person?", yesWeight: 25, noWeight: -20, yesIQ: -8, noIQ: 8 },
    { id: 110, text: "Does 30 divided by 1/2 equal 60?", yesWeight: 0, noWeight: 0, yesIQ: 12, noIQ: -10 },
    { id: 111, text: "Should survivors of a plane crash be buried?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 12 },
    { id: 112, text: "Do you read the terms and conditions before clicking 'I agree'?", yesWeight: -20, noWeight: 30, yesIQ: 5, noIQ: -3 },
    { id: 113, text: "Have you ever Googled something embarrassingly simple?", yesWeight: -15, noWeight: 25, yesIQ: 5, noIQ: -8 },
    { id: 114, text: "Do you know how to do your own taxes?", yesWeight: 20, noWeight: -15, yesIQ: 8, noIQ: -5 },
    { id: 115, text: "Can you name all the planets in order?", yesWeight: 10, noWeight: -10, yesIQ: 8, noIQ: -5 },
    { id: 116, text: "Is a tomato a fruit?", yesWeight: -5, noWeight: 5, yesIQ: 10, noIQ: -8 },
    { id: 117, text: "Have you ever tried to push a door that says 'pull'?", yesWeight: 0, noWeight: 0, yesIQ: -5, noIQ: 3 },
    { id: 118, text: "Does correlation imply causation?", yesWeight: 15, noWeight: -10, yesIQ: -12, noIQ: 10 },
    { id: 119, text: "Is February the only month that can have exactly 4 weeks?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 8 },
    { id: 120, text: "Do you know the difference between 'your' and 'you're'?", yesWeight: -5, noWeight: 10, yesIQ: 8, noIQ: -10 },
    
    // Andrew Tate / Sigma Grindset Arc
    { id: 121, text: "Do you think women belong in the kitchen?", yesWeight: 55, noWeight: -40, yesIQ: -15, noIQ: 8 },
    { id: 122, text: "Have you ever said 'what color is your Bugatti'?", yesWeight: 50, noWeight: -30, yesIQ: -12, noIQ: 5 },
    { id: 123, text: "Do you think depression is just a mindset?", yesWeight: 45, noWeight: -35, yesIQ: -15, noIQ: 8 },
    { id: 124, text: "Have you ever called someone a 'beta male' seriously?", yesWeight: 50, noWeight: -35, yesIQ: -10, noIQ: 5 },
    { id: 125, text: "Do you think crying is a sign of weakness?", yesWeight: 45, noWeight: -40, yesIQ: -10, noIQ: 8 },
    { id: 126, text: "Have you ever said 'she belongs to the streets'?", yesWeight: 45, noWeight: -30, yesIQ: -8, noIQ: 3 },
    { id: 127, text: "Do you believe in the 'alpha/beta' hierarchy?", yesWeight: 50, noWeight: -35, yesIQ: -12, noIQ: 8 },
    { id: 128, text: "Have you ever unironically said 'escape the matrix'?", yesWeight: 45, noWeight: -25, yesIQ: -10, noIQ: 5 },
    
    // Edgy Cultural Stereotypes
    { id: 129, text: "Do you think pineapple on pizza is a crime against humanity?", yesWeight: 15, noWeight: -10, yesIQ: -3, noIQ: 3 },
    { id: 130, text: "Have you ever blamed Mercury retrograde for your problems?", yesWeight: -40, noWeight: 30, yesIQ: -12, noIQ: 8 },
    { id: 131, text: "Do you put the milk in before the cereal?", yesWeight: 20, noWeight: -15, yesIQ: -15, noIQ: 5 },
    { id: 132, text: "Have you ever said 'I'm not racist, but...'?", yesWeight: 35, noWeight: -25, yesIQ: -15, noIQ: 8 },
    { id: 133, text: "Do you think pumpkin spice lattes are a personality trait?", yesWeight: -35, noWeight: 25, yesIQ: 5, noIQ: -3 },
    { id: 134, text: "Have you ever ordered a drink with more than 5 modifications?", yesWeight: -40, noWeight: 25, yesIQ: -5, noIQ: 3 },
    { id: 135, text: "Do you clap when the plane lands?", yesWeight: -25, noWeight: 30, yesIQ: -8, noIQ: 5 },
    
    // Dark Humor / Unhinged
    { id: 136, text: "Do you make jokes at funerals to cope?", yesWeight: 25, noWeight: -20, yesIQ: 5, noIQ: -3 },
    { id: 137, text: "Have you ever laughed at something you definitely shouldn't have?", yesWeight: 20, noWeight: -25, yesIQ: 3, noIQ: -3 },
    { id: 138, text: "Do you think dark humor is the best humor?", yesWeight: 30, noWeight: -25, yesIQ: 5, noIQ: -5 },
    { id: 139, text: "Have you ever been told 'you're going to hell for that joke'?", yesWeight: 35, noWeight: -20, yesIQ: 3, noIQ: -2 },
    { id: 140, text: "Do you use humor as a defense mechanism?", yesWeight: 15, noWeight: -20, yesIQ: 5, noIQ: -3 },
    
    // More IQ Traps
    { id: 141, text: "Is the Earth flat?", yesWeight: 30, noWeight: -20, yesIQ: -25, noIQ: 10 },
    { id: 142, text: "Do vaccines cause autism?", yesWeight: 25, noWeight: -20, yesIQ: -25, noIQ: 10 },
    { id: 143, text: "Can you see the Great Wall of China from space?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 8 },
    { id: 144, text: "Do we only use 10% of our brain?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 8 },
    { id: 145, text: "Does lightning never strike the same place twice?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 8 },
    
    // Quirky / Internet Culture
    { id: 146, text: "Have you ever said 'bestie' to someone you just met?", yesWeight: -35, noWeight: 25, yesIQ: -5, noIQ: 3 },
    { id: 147, text: "Do you unironically use 'slay' in conversation?", yesWeight: -40, noWeight: 30, yesIQ: -3, noIQ: 2 },
    { id: 148, text: "Have you ever called something 'bussin'?", yesWeight: 25, noWeight: -20, yesIQ: -5, noIQ: 3 },
    { id: 149, text: "Do you know what 'no cap' means without looking it up?", yesWeight: 20, noWeight: -25, yesIQ: -3, noIQ: 2 },
    { id: 150, text: "Have you ever said 'it's giving...' unironically?", yesWeight: -40, noWeight: 30, yesIQ: -5, noIQ: 3 },
    
    // Spicy Stereotypes
    { id: 151, text: "Do you think you're a better driver than most people?", yesWeight: 40, noWeight: -30, yesIQ: -10, noIQ: 8 },
    { id: 152, text: "Have you ever used your ethnicity as an excuse?", yesWeight: 15, noWeight: -10, yesIQ: -5, noIQ: 3 },
    { id: 153, text: "Do you think stereotypes exist for a reason?", yesWeight: 30, noWeight: -25, yesIQ: -8, noIQ: 5 },
    { id: 154, text: "Have you ever made a 'that's what she said' joke?", yesWeight: 35, noWeight: -25, yesIQ: -3, noIQ: 2 },
    { id: 155, text: "Do you think you could survive in the wild for a week?", yesWeight: 40, noWeight: -30, yesIQ: -8, noIQ: 5 },
    
    // Final Unhinged Questions
    { id: 156, text: "Have you ever googled your own name?", yesWeight: -15, noWeight: 20, yesIQ: 0, noIQ: 0 },
    { id: 157, text: "Do you talk to yourself when alone?", yesWeight: -20, noWeight: 25, yesIQ: 5, noIQ: -3 },
    { id: 158, text: "Have you ever practiced a conversation in the mirror?", yesWeight: -25, noWeight: 30, yesIQ: 3, noIQ: -2 },
    { id: 159, text: "Do you have a 'main character' moment at least once a week?", yesWeight: -30, noWeight: 25, yesIQ: -5, noIQ: 3 },
    { id: 160, text: "Have you ever dramatically stared out a window while listening to sad music?", yesWeight: -35, noWeight: 25, yesIQ: 3, noIQ: -2 },
];