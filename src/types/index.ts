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
    
    // === EXPANDED IQ BRAIN TEASERS & FACTS ===
    
    // Math Tricks
    { id: 161, text: "Is 0.999... (repeating forever) equal to 1?", yesWeight: 0, noWeight: 0, yesIQ: 15, noIQ: -10 },
    { id: 162, text: "If you have 3 quarters, 4 dimes, and 4 pennies, do you have $1.19?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 163, text: "Is a kilogram of steel heavier than a kilogram of feathers?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 12 },
    { id: 164, text: "Does 1 + 1 always equal 2?", yesWeight: 0, noWeight: 0, yesIQ: -8, noIQ: 12 },
    { id: 165, text: "Can you divide any number by zero?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 10 },
    { id: 166, text: "Is the square root of 2 a rational number?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 167, text: "If you flip a coin 99 times and get heads, is the 100th flip more likely to be tails?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 12 },
    { id: 168, text: "Is infinity a number?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 8 },
    
    // Science Facts & Misconceptions
    { id: 169, text: "Do humans have more than 5 senses?", yesWeight: 0, noWeight: 0, yesIQ: 12, noIQ: -10 },
    { id: 170, text: "Is glass a liquid that flows very slowly?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 171, text: "Do goldfish have a 3-second memory?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 172, text: "Does water conduct electricity?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 12 },
    { id: 173, text: "Is the tongue divided into taste zones?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 174, text: "Do we swallow 8 spiders a year in our sleep?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 10 },
    { id: 175, text: "Does hair and nails continue growing after death?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 176, text: "Is blood blue inside your body?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 10 },
    { id: 177, text: "Do chameleons change color to camouflage?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 12 },
    { id: 178, text: "Do bulls hate the color red?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 179, text: "Can you see the Great Wall of China from the moon?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 10 },
    { id: 180, text: "Is a penny dropped from the Empire State Building deadly?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    
    // Logic Puzzles
    { id: 181, text: "A doctor gives you 3 pills and says take one every 30 minutes. Do they last 1.5 hours?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 182, text: "Can a man living in New York be buried west of the Mississippi?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 12 },
    { id: 183, text: "If there are 12 fish and half of them drown, are there 6 fish left?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 12 },
    { id: 184, text: "Before Mt. Everest was discovered, was K2 the tallest mountain?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 185, text: "If a plane crashes on the border of US and Canada, do you bury survivors in Canada?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 12 },
    { id: 186, text: "Is it possible to end a sentence with the word 'the'?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 187, text: "Can you stand behind someone while they stand behind you?", yesWeight: 0, noWeight: 0, yesIQ: 12, noIQ: -10 },
    { id: 188, text: "If you overtake 2nd place in a race, are you now in 1st place?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    
    // Geography & History
    { id: 189, text: "Is Russia bigger than Pluto?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 190, text: "Did Napoleon Bonaparte die on an island?", yesWeight: 0, noWeight: 0, yesIQ: 8, noIQ: -5 },
    { id: 191, text: "Are there more trees on Earth than stars in the Milky Way?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 192, text: "Is Australia wider than the moon?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 193, text: "Did Vikings wear horned helmets?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 194, text: "Was the Egyptian Pyramids built by slaves?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 10 },
    { id: 195, text: "Did Einstein fail math in school?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 196, text: "Is Mount Everest the farthest point from Earth's center?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 12 },
    
    // Word Tricks & Language
    { id: 197, text: "Is 'dreamt' the only English word ending in 'mt'?", yesWeight: 0, noWeight: 0, yesIQ: -8, noIQ: 10 },
    { id: 198, text: "Does the word 'set' have the most definitions in English?", yesWeight: 0, noWeight: 0, yesIQ: 8, noIQ: -5 },
    { id: 199, text: "Is there a word that rhymes with 'orange'?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 200, text: "Can 'Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo' be a valid sentence?", yesWeight: 0, noWeight: 0, yesIQ: 12, noIQ: -8 },
    
    // Physics & Space
    { id: 201, text: "Is there sound in space?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 202, text: "Does hot water freeze faster than cold water?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 203, text: "Is the sun a planet?", yesWeight: 0, noWeight: 0, yesIQ: -20, noIQ: 10 },
    { id: 204, text: "Does a day on Venus last longer than a year on Venus?", yesWeight: 0, noWeight: 0, yesIQ: 12, noIQ: -8 },
    { id: 205, text: "Is there a dark side of the moon that never sees sunlight?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 206, text: "Do astronauts get taller in space?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 207, text: "Is Pluto a planet?", yesWeight: 5, noWeight: -5, yesIQ: -10, noIQ: 8 },
    { id: 208, text: "Can you cry in space?", yesWeight: 0, noWeight: 0, yesIQ: 8, noIQ: -5 },
    
    // Biology & Human Body
    { id: 209, text: "Do humans share 50% of their DNA with bananas?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 210, text: "Is your stomach acid strong enough to dissolve metal?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 211, text: "Do you get a new skeleton every 10 years?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 212, text: "Are there more bacteria in your body than human cells?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 213, text: "Can your brain feel pain?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 214, text: "Do we replace all our cells every 7 years?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 10 },
    { id: 215, text: "Is your liver the only organ that can regenerate?", yesWeight: 0, noWeight: 0, yesIQ: -8, noIQ: 8 },
    
    // Common Sense Traps
    { id: 216, text: "If you're running a race and pass the person in 2nd, are you now winning?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 217, text: "Can February have 5 Sundays?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 218, text: "If a brick weighs 1kg plus half a brick, does the brick weigh 1.5kg?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 219, text: "How many months have 28 days? Is it just February?", yesWeight: 0, noWeight: 0, yesIQ: -15, noIQ: 12 },
    { id: 220, text: "If you have a bowl with 6 apples and take 4, do you have 4 apples?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -10 },
    
    // Tech & Modern Facts
    { id: 221, text: "Was the first computer mouse made of wood?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -5 },
    { id: 222, text: "Is WiFi an abbreviation for 'Wireless Fidelity'?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 10 },
    { id: 223, text: "Did the first iPhone have copy and paste?", yesWeight: 0, noWeight: 0, yesIQ: -8, noIQ: 8 },
    { id: 224, text: "Is there more computing power in your phone than the Apollo 11 spacecraft?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 225, text: "Was YouTube originally a dating website?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -5 },
    
    // Animal Facts
    { id: 226, text: "Can cows walk upstairs but not downstairs?", yesWeight: 0, noWeight: 0, yesIQ: -8, noIQ: 8 },
    { id: 227, text: "Do octopuses have 3 hearts?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 228, text: "Are flamingos naturally pink?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 10 },
    { id: 229, text: "Can a snail sleep for 3 years?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -5 },
    { id: 230, text: "Do elephants really never forget?", yesWeight: 0, noWeight: 0, yesIQ: -8, noIQ: 8 },
    { id: 231, text: "Is a group of flamingos called a 'flamboyance'?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -5 },
    { id: 232, text: "Can pigeons do math?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 233, text: "Do sharks have bones?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 10 },
    
    // Weird But True
    { id: 234, text: "Is honey the only food that never spoils?", yesWeight: 0, noWeight: 0, yesIQ: -8, noIQ: 10 },
    { id: 235, text: "Can you hum while holding your nose?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 10 },
    { id: 236, text: "Is it impossible to lick your own elbow?", yesWeight: 0, noWeight: 0, yesIQ: -8, noIQ: 8 },
    { id: 237, text: "Are there more fake flamingos in the world than real ones?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -5 },
    { id: 238, text: "Did Oxford University exist before the Aztec Empire?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 239, text: "Are there more possible chess games than atoms in the observable universe?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -8 },
    { id: 240, text: "Is a jiffy an actual unit of time?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -5 },
    
    // Psychology Tricks
    { id: 241, text: "Do people with higher IQs dream more?", yesWeight: 0, noWeight: 0, yesIQ: 8, noIQ: -5 },
    { id: 242, text: "Is the fear of long words called 'hippopotomonstrosesquippedaliophobia'?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -5 },
    { id: 243, text: "Can your brain physically change when you learn something new?", yesWeight: 0, noWeight: 0, yesIQ: 10, noIQ: -10 },
    { id: 244, text: "Is left-brain vs right-brain thinking scientifically accurate?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 245, text: "Do humans only dream in faces they've seen before?", yesWeight: 0, noWeight: 0, yesIQ: 8, noIQ: -5 },
    
    // More Math & Numbers
    { id: 246, text: "Is there a smallest positive number?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 247, text: "Are there more even numbers than odd numbers?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 10 },
    { id: 248, text: "If you fold a paper 42 times, would it reach the moon?", yesWeight: 0, noWeight: 0, yesIQ: 12, noIQ: -8 },
    { id: 249, text: "Is 1 a prime number?", yesWeight: 0, noWeight: 0, yesIQ: -12, noIQ: 10 },
    { id: 250, text: "Can you have a negative probability?", yesWeight: 0, noWeight: 0, yesIQ: -10, noIQ: 10 },
    
    // === EDGY & DARK HUMOR PERSONALITY QUESTIONS ===
    
    // Peak Dark Humor
    { id: 251, text: "Do you laugh at funerals because you're uncomfortable?", yesWeight: 20, noWeight: -15, yesIQ: 5, noIQ: -3 },
    { id: 252, text: "Have you ever made a joke so dark even you felt bad?", yesWeight: 30, noWeight: -20, yesIQ: 3, noIQ: -2 },
    { id: 253, text: "Do you think 'too soon' is just a suggestion?", yesWeight: 35, noWeight: -25, yesIQ: -5, noIQ: 3 },
    { id: 254, text: "Have you ever been told your humor is 'concerning'?", yesWeight: 30, noWeight: -20, yesIQ: 5, noIQ: -3 },
    { id: 255, text: "Do you find comfort in existential dread memes?", yesWeight: 25, noWeight: -30, yesIQ: 5, noIQ: -3 },
    { id: 256, text: "Have you ever joked about your own death to cope?", yesWeight: 20, noWeight: -25, yesIQ: 3, noIQ: -2 },
    { id: 257, text: "Do you think therapy is just paid friendship?", yesWeight: 35, noWeight: -30, yesIQ: -10, noIQ: 5 },
    { id: 258, text: "Have you ever laughed at a 'you're going to hell' joke and agreed?", yesWeight: 30, noWeight: -20, yesIQ: 3, noIQ: -2 },
    
    // Edgy Internet Culture
    { id: 259, text: "Do you think cancel culture is just mob mentality with WiFi?", yesWeight: 40, noWeight: -35, yesIQ: 5, noIQ: -3 },
    { id: 260, text: "Have you ever said 'based' unironically?", yesWeight: 45, noWeight: -25, yesIQ: -5, noIQ: 3 },
    { id: 261, text: "Do you think Twitter/X was a mistake?", yesWeight: 25, noWeight: -20, yesIQ: 8, noIQ: -5 },
    { id: 262, text: "Have you ever been banned from an online platform?", yesWeight: 40, noWeight: -25, yesIQ: -5, noIQ: 3 },
    { id: 263, text: "Do you miss the 'old internet' before everything was sanitized?", yesWeight: 35, noWeight: -25, yesIQ: 3, noIQ: -2 },
    { id: 264, text: "Have you ever been in a comment section war you're not proud of?", yesWeight: 30, noWeight: -20, yesIQ: -5, noIQ: 3 },
    { id: 265, text: "Do you think most influencers are just professional liars?", yesWeight: 35, noWeight: -30, yesIQ: 5, noIQ: -5 },
    { id: 266, text: "Have you ever rage-followed someone just to hate-watch?", yesWeight: 25, noWeight: -20, yesIQ: -5, noIQ: 3 },
    
    // Unhinged Relationship Takes
    { id: 267, text: "Do you think love is just chemicals tricking you into reproduction?", yesWeight: 40, noWeight: -35, yesIQ: 5, noIQ: -5 },
    { id: 268, text: "Have you ever stayed in a relationship out of pure spite?", yesWeight: 30, noWeight: -25, yesIQ: -8, noIQ: 5 },
    { id: 269, text: "Do you believe exes can be friends? (without ulterior motives)", yesWeight: -25, noWeight: 30, yesIQ: 3, noIQ: -3 },
    { id: 270, text: "Have you ever ghosted someone and felt zero guilt?", yesWeight: 35, noWeight: -30, yesIQ: -5, noIQ: 3 },
    { id: 271, text: "Do you think 'the one' is just whoever you're too tired to leave?", yesWeight: 35, noWeight: -30, yesIQ: 5, noIQ: -5 },
    { id: 272, text: "Have you ever dated someone to prove a point?", yesWeight: 30, noWeight: -25, yesIQ: -8, noIQ: 5 },
    { id: 273, text: "Do you believe in love at first sight or is it just lust with good marketing?", yesWeight: -20, noWeight: 35, yesIQ: -5, noIQ: 5 },
    { id: 274, text: "Have you ever said 'I'm fine' while plotting revenge?", yesWeight: -35, noWeight: 30, yesIQ: 3, noIQ: -2 },
    
    // Chaotic Life Choices
    { id: 275, text: "Do you make major life decisions based on spite?", yesWeight: 30, noWeight: -25, yesIQ: -8, noIQ: 5 },
    { id: 276, text: "Have you ever bought something expensive just because someone said you couldn't afford it?", yesWeight: 35, noWeight: -25, yesIQ: -10, noIQ: 5 },
    { id: 277, text: "Do you believe in 'revenge body' as valid motivation?", yesWeight: 30, noWeight: -25, yesIQ: -3, noIQ: 2 },
    { id: 278, text: "Have you ever quit something just to prove you don't need it?", yesWeight: 35, noWeight: -30, yesIQ: 3, noIQ: -2 },
    { id: 279, text: "Do you sometimes do the opposite of what you're told just because?", yesWeight: 30, noWeight: -25, yesIQ: -5, noIQ: 3 },
    { id: 280, text: "Have you ever set a bridge on fire and watched it burn with satisfaction?", yesWeight: 40, noWeight: -30, yesIQ: -5, noIQ: 5 },
    { id: 281, text: "Do you believe 'living well' is the best revenge?", yesWeight: 25, noWeight: -20, yesIQ: 5, noIQ: -3 },
    { id: 282, text: "Have you ever successfully gaslit yourself into confidence?", yesWeight: 25, noWeight: -20, yesIQ: 5, noIQ: -3 },
    
    // Nihilistic Vibes
    { id: 283, text: "Do you find comfort in knowing nothing matters?", yesWeight: 30, noWeight: -35, yesIQ: 8, noIQ: -5 },
    { id: 284, text: "Have you ever had an existential crisis at 3 AM and just vibed with it?", yesWeight: 25, noWeight: -30, yesIQ: 5, noIQ: -3 },
    { id: 285, text: "Do you think the universe is indifferent and that's actually freeing?", yesWeight: 30, noWeight: -35, yesIQ: 10, noIQ: -5 },
    { id: 286, text: "Have you ever said 'we're all gonna die anyway' to justify something stupid?", yesWeight: 35, noWeight: -25, yesIQ: -8, noIQ: 5 },
    { id: 287, text: "Do you find 'memento mori' comforting rather than scary?", yesWeight: 25, noWeight: -30, yesIQ: 8, noIQ: -3 },
    { id: 288, text: "Have you embraced the void and found it cozy?", yesWeight: 25, noWeight: -30, yesIQ: 5, noIQ: -3 },
    { id: 289, text: "Do you think optimists are just poorly informed?", yesWeight: 35, noWeight: -30, yesIQ: 5, noIQ: -5 },
    { id: 290, text: "Have you ever felt more alive while thinking about death?", yesWeight: 25, noWeight: -30, yesIQ: 5, noIQ: -3 },
    
    // Savage Social Commentary
    { id: 291, text: "Do you think most people peaked in high school?", yesWeight: 35, noWeight: -30, yesIQ: 3, noIQ: -2 },
    { id: 292, text: "Have you ever looked at a couple and thought 'they settled'?", yesWeight: 30, noWeight: -25, yesIQ: -3, noIQ: 2 },
    { id: 293, text: "Do you believe hustle culture is just capitalism with extra steps?", yesWeight: -25, noWeight: 35, yesIQ: 8, noIQ: -5 },
    { id: 294, text: "Have you ever judged someone's entire life based on their music taste?", yesWeight: 25, noWeight: -20, yesIQ: -5, noIQ: 3 },
    { id: 295, text: "Do you think 'adulting' is just trauma with responsibilities?", yesWeight: 20, noWeight: -25, yesIQ: 5, noIQ: -3 },
    { id: 296, text: "Have you ever seen a baby and thought 'that's someone's whole personality now'?", yesWeight: 30, noWeight: -35, yesIQ: 3, noIQ: -2 },
    { id: 297, text: "Do you believe most 'self-made' people forgot who helped them?", yesWeight: 25, noWeight: -30, yesIQ: 8, noIQ: -5 },
    { id: 298, text: "Have you ever heard someone's life plan and thought 'good luck with that'?", yesWeight: 30, noWeight: -25, yesIQ: 3, noIQ: -2 },
    
    // Unfiltered Honesty
    { id: 299, text: "Do you tell people what they need to hear, not what they want?", yesWeight: 35, noWeight: -30, yesIQ: 5, noIQ: -3 },
    { id: 300, text: "Have you ever been called 'brutally honest' and took it as a compliment?", yesWeight: 40, noWeight: -30, yesIQ: 3, noIQ: -2 },
    { id: 301, text: "Do you think white lies are still lies?", yesWeight: 30, noWeight: -25, yesIQ: 5, noIQ: -3 },
    { id: 302, text: "Have you ever ruined someone's day with facts?", yesWeight: 35, noWeight: -25, yesIQ: 3, noIQ: -2 },
    { id: 303, text: "Do you believe 'being real' is an excuse people use to be mean?", yesWeight: -25, noWeight: 30, yesIQ: 5, noIQ: -5 },
    { id: 304, text: "Have you ever been told to 'read the room' and ignored it?", yesWeight: 35, noWeight: -25, yesIQ: -5, noIQ: 3 },
    { id: 305, text: "Do you think most compliments are performative?", yesWeight: 30, noWeight: -35, yesIQ: 3, noIQ: -2 },
    { id: 306, text: "Have you ever been the villain in someone's story and accepted it?", yesWeight: 35, noWeight: -30, yesIQ: 5, noIQ: -3 },
    
    // Chaotic Evil Energy
    { id: 307, text: "Do you leave one bite of food just to assert dominance?", yesWeight: 30, noWeight: -20, yesIQ: -8, noIQ: 3 },
    { id: 308, text: "Have you ever given someone bad advice on purpose?", yesWeight: 35, noWeight: -30, yesIQ: -10, noIQ: 5 },
    { id: 309, text: "Do you enjoy watching people dig their own graves (metaphorically)?", yesWeight: 35, noWeight: -30, yesIQ: 3, noIQ: -2 },
    { id: 310, text: "Have you ever pretended not to see someone to avoid talking to them?", yesWeight: 25, noWeight: -30, yesIQ: 3, noIQ: -2 },
    { id: 311, text: "Do you sometimes root for the villain because they're more interesting?", yesWeight: 30, noWeight: -25, yesIQ: 5, noIQ: -3 },
    { id: 312, text: "Have you ever corrected someone's grammar mid-argument to win?", yesWeight: 35, noWeight: -25, yesIQ: 5, noIQ: -3 },
    { id: 313, text: "Do you believe some people deserve what's coming to them?", yesWeight: 35, noWeight: -30, yesIQ: -3, noIQ: 2 },
    { id: 314, text: "Have you ever smiled while delivering bad news?", yesWeight: 30, noWeight: -25, yesIQ: -5, noIQ: 3 },
    
    // Emotionally Unavailable Arc
    { id: 315, text: "Do you think vulnerability is overrated?", yesWeight: 45, noWeight: -40, yesIQ: -5, noIQ: 5 },
    { id: 316, text: "Have you ever said 'I don't do feelings' and meant it?", yesWeight: 45, noWeight: -35, yesIQ: -5, noIQ: 5 },
    { id: 317, text: "Do you consider emotional detachment a survival skill?", yesWeight: 40, noWeight: -35, yesIQ: 5, noIQ: -3 },
    { id: 318, text: "Have you ever ghosted someone before they could ghost you?", yesWeight: 35, noWeight: -30, yesIQ: -5, noIQ: 3 },
    { id: 319, text: "Do you keep people at arm's length as a default?", yesWeight: 40, noWeight: -35, yesIQ: 3, noIQ: -2 },
    { id: 320, text: "Have you ever said 'I'm not looking for anything serious' as a lifestyle?", yesWeight: 40, noWeight: -35, yesIQ: -3, noIQ: 2 },
    { id: 321, text: "Do you think attachment is just future grief?", yesWeight: 35, noWeight: -40, yesIQ: 5, noIQ: -3 },
    { id: 322, text: "Have you mastered the art of being 'busy' to avoid people?", yesWeight: 30, noWeight: -25, yesIQ: 3, noIQ: -2 },
    
    // Spicy Hot Takes
    { id: 323, text: "Do you think most traditions are just peer pressure from dead people?", yesWeight: 30, noWeight: -35, yesIQ: 8, noIQ: -5 },
    { id: 324, text: "Have you ever said something controversial just to see reactions?", yesWeight: 35, noWeight: -25, yesIQ: -5, noIQ: 3 },
    { id: 325, text: "Do you believe age doesn't bring wisdom, just more trauma?", yesWeight: 30, noWeight: -35, yesIQ: 5, noIQ: -3 },
    { id: 326, text: "Have you ever played devil's advocate just for fun?", yesWeight: 35, noWeight: -25, yesIQ: 5, noIQ: -3 },
    { id: 327, text: "Do you think 'family is everything' is just guilt disguised as love?", yesWeight: 35, noWeight: -40, yesIQ: 5, noIQ: -5 },
    { id: 328, text: "Have you ever called something 'overrated' just to start drama?", yesWeight: 30, noWeight: -20, yesIQ: -5, noIQ: 3 },
    { id: 329, text: "Do you believe karma is just wishful thinking?", yesWeight: 35, noWeight: -30, yesIQ: 5, noIQ: -5 },
    { id: 330, text: "Have you ever had an opinion so spicy you kept it to yourself?", yesWeight: 25, noWeight: -20, yesIQ: 5, noIQ: -3 },
    
    // Self-Aware Chaos
    { id: 331, text: "Do you acknowledge you're a red flag but own it?", yesWeight: 35, noWeight: -30, yesIQ: 5, noIQ: -3 },
    { id: 332, text: "Have you ever introduced yourself as 'a lot' and meant it?", yesWeight: -30, noWeight: 25, yesIQ: 3, noIQ: -2 },
    { id: 333, text: "Do you think self-awareness without change is just bragging?", yesWeight: 25, noWeight: -30, yesIQ: 8, noIQ: -5 },
    { id: 334, text: "Have you ever warned people about yourself and they didn't listen?", yesWeight: 30, noWeight: -25, yesIQ: 3, noIQ: -2 },
    { id: 335, text: "Do you know you're toxic but think you're worth it?", yesWeight: 35, noWeight: -35, yesIQ: -5, noIQ: 5 },
    { id: 336, text: "Have you ever said 'I can't help the way I am' as an excuse?", yesWeight: 30, noWeight: -25, yesIQ: -8, noIQ: 5 },
    { id: 337, text: "Do you consider 'chaotic neutral' your default alignment?", yesWeight: 25, noWeight: -20, yesIQ: 5, noIQ: -3 },
    { id: 338, text: "Have you weaponized your personality and felt no shame?", yesWeight: 35, noWeight: -30, yesIQ: 3, noIQ: -2 },
    
    // Final Boss Dark Humor
    { id: 339, text: "Do you cope with trauma by making it everyone's problem?", yesWeight: 25, noWeight: -30, yesIQ: -3, noIQ: 3 },
    { id: 340, text: "Have you ever said 'it's fine, I'll just die' over minor inconveniences?", yesWeight: 20, noWeight: -25, yesIQ: -3, noIQ: 2 },
    { id: 341, text: "Do you think 'thoughts and prayers' is the most useless phrase ever?", yesWeight: 30, noWeight: -25, yesIQ: 5, noIQ: -3 },
    { id: 342, text: "Have you ever related to a villain's origin story a little too much?", yesWeight: 30, noWeight: -25, yesIQ: 5, noIQ: -3 },
    { id: 343, text: "Do you believe everyone is the hero of their own delusion?", yesWeight: 30, noWeight: -25, yesIQ: 8, noIQ: -5 },
    { id: 344, text: "Have you ever said 'I've made peace with it' about something completely unhinged?", yesWeight: 25, noWeight: -20, yesIQ: 3, noIQ: -2 },
    { id: 345, text: "Do you think your sense of humor is a cry for help disguised as comedy?", yesWeight: 25, noWeight: -30, yesIQ: 5, noIQ: -3 },
    { id: 346, text: "Have you ever been told 'you need help' and taken it as validation?", yesWeight: 30, noWeight: -25, yesIQ: -5, noIQ: 5 },
    { id: 347, text: "Do you think 'normal people' are just better at hiding their crazy?", yesWeight: 25, noWeight: -30, yesIQ: 8, noIQ: -5 },
    { id: 348, text: "Have you ever bonded with someone over mutual hatred?", yesWeight: 30, noWeight: -25, yesIQ: 3, noIQ: -2 },
    { id: 349, text: "Do you find 'we're all broken' weirdly comforting?", yesWeight: -25, noWeight: 30, yesIQ: 5, noIQ: -3 },
    { id: 350, text: "Have you accepted that you're the problem and decided to thrive anyway?", yesWeight: 30, noWeight: -25, yesIQ: 5, noIQ: -3 },
];