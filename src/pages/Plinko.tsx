import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Plinko.css';

type Risk = 'low' | 'medium' | 'high';

// Real physics ball with velocity
interface Ball {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    bet: number;
    lastCollision: number;
    canEmitSound: boolean; // Limit how many balls can make collision sounds
}

// Peg with glow effect
interface Peg {
    x: number;
    y: number;
    glow: number;
}

// Bucket landing VFX
interface BucketVFX {
    x: number;
    y: number;
    color: string;
    life: number;
    particles: { x: number; y: number; vx: number; vy: number; size: number }[];
}

// Multipliers matching Stake.com
const MULTIPLIERS: Record<Risk, Record<number, number[]>> = {
    low: {
        8: [5.6, 2.1, 1.1, 1, 0.5, 1, 1.1, 2.1, 5.6],
        12: [8.9, 3, 1.4, 1.1, 1, 0.5, 0.3, 0.5, 1, 1.1, 1.4, 3, 8.9],
        16: [16, 9, 2, 1.4, 1.4, 1.2, 1.1, 1, 0.5, 1, 1.1, 1.2, 1.4, 1.4, 2, 9, 16],
    },
    medium: {
        8: [13, 3, 1.3, 0.7, 0.4, 0.7, 1.3, 3, 13],
        12: [33, 11, 4, 2, 1.1, 0.6, 0.3, 0.6, 1.1, 2, 4, 11, 33],
        16: [110, 41, 10, 5, 3, 1.5, 1, 0.5, 0.3, 0.5, 1, 1.5, 3, 5, 10, 41, 110],
    },
    high: {
        8: [29, 4, 1.5, 0.3, 0.2, 0.3, 1.5, 4, 29],
        12: [170, 24, 8.1, 2, 0.7, 0.2, 0.1, 0.2, 0.7, 2, 8.1, 24, 170],
        16: [1000, 130, 26, 9, 4, 2, 0.2, 0.2, 0.1, 0.2, 0.2, 2, 4, 9, 26, 130, 1000],
    },
};

// Canvas and layout constants
const PEG_SPACING = 32; // Fixed spacing like your Python code
const PEG_RADIUS = 5;
const BALL_RADIUS = 6; // Smaller ball to fit between pegs better
const BOTTOM_PADDING = 55;
const TOP_PADDING = 50;
const SIDE_PADDING = 50;
const ROW_SPACING = 28;

// Calculate dynamic canvas size based on rows
const getCanvasDimensions = (rows: number) => {
    const bottomRowPins = rows + 2;
    const totalWidth = (bottomRowPins - 1) * PEG_SPACING;
    const pyramidHeight = (rows - 1) * ROW_SPACING;
    
    return {
        width: totalWidth + SIDE_PADDING * 2 + PEG_SPACING,
        height: pyramidHeight + TOP_PADDING + BOTTOM_PADDING + 50
    };
};

// Physics constants (tuned for 60fps, based on your Python code)
const GRAVITY = 650;        // Pixels per second squared (slower fall)
const BOUNCE = 0.4;         // Bounce coefficient (bouncier)
const FRICTION = 0.995;     // Velocity damping (less friction)
const HORIZONTAL_BOOST = 35; // Random horizontal impulse on collision
const WALL_BOUNCE = 1;
const COLLISION_BUFFER = 2; // Extra buffer for collision detection

// Audio SFX - reuse single AudioContext to prevent browser limiting
let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
    try {
        if (!audioContext || audioContext.state === 'closed') {
            audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        }
        // Resume if suspended (browser autoplay policy)
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        return audioContext;
    } catch {
        return null;
    }
};

const playSound = (type: 'drop' | 'pin' | 'win' | 'lose' | 'land') => {
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        const now = ctx.currentTime;
        
        switch (type) {
            case 'drop': {
                // Soft whoosh down
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(300, now);
                oscillator.frequency.exponentialRampToValueAtTime(150, now + 0.1);
                gainNode.gain.setValueAtTime(0.06, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                oscillator.start(now);
                oscillator.stop(now + 0.1);
                break;
            }
            case 'pin': {
                // Soft marimba-like ping with random pitch
                const baseFreq = 800 + Math.random() * 600;
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(baseFreq, now);
                oscillator.frequency.exponentialRampToValueAtTime(baseFreq * 0.7, now + 0.08);
                gainNode.gain.setValueAtTime(0.03, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                oscillator.start(now);
                oscillator.stop(now + 0.08);
                
                // Add a subtle harmonic
                const osc2 = ctx.createOscillator();
                const gain2 = ctx.createGain();
                osc2.connect(gain2);
                gain2.connect(ctx.destination);
                osc2.type = 'sine';
                osc2.frequency.setValueAtTime(baseFreq * 2, now);
                gain2.gain.setValueAtTime(0.01, now);
                gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc2.start(now);
                osc2.stop(now + 0.05);
                break;
            }
            case 'land': {
                // Satisfying thud + chime for landing
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(200, now);
                oscillator.frequency.exponentialRampToValueAtTime(80, now + 0.15);
                gainNode.gain.setValueAtTime(0.12, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                oscillator.start(now);
                oscillator.stop(now + 0.15);
                
                // Add impact noise
                const noise = ctx.createOscillator();
                const noiseGain = ctx.createGain();
                noise.connect(noiseGain);
                noiseGain.connect(ctx.destination);
                noise.type = 'triangle';
                noise.frequency.setValueAtTime(100, now);
                noiseGain.gain.setValueAtTime(0.08, now);
                noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                noise.start(now);
                noise.stop(now + 0.1);
                break;
            }
            case 'win': {
                // Bright ascending arpeggio
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(523, now);
                oscillator.frequency.setValueAtTime(659, now + 0.08);
                oscillator.frequency.setValueAtTime(784, now + 0.16);
                oscillator.frequency.setValueAtTime(1047, now + 0.24);
                gainNode.gain.setValueAtTime(0.08, now);
                gainNode.gain.setValueAtTime(0.1, now + 0.08);
                gainNode.gain.setValueAtTime(0.08, now + 0.16);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                oscillator.start(now);
                oscillator.stop(now + 0.35);
                break;
            }
            case 'lose': {
                // Descending sad tone
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(300, now);
                oscillator.frequency.exponentialRampToValueAtTime(150, now + 0.2);
                gainNode.gain.setValueAtTime(0.06, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
                oscillator.start(now);
                oscillator.stop(now + 0.25);
                break;
            }
        }
    } catch {
        // Audio error - ignore
    }
};

function shadeColor(color: string, percent: number): string {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 +
        (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)
    ).toString(16).slice(1);
}

export default function Plinko() {
    const [balance, setBalance] = useState(() => {
        const saved = localStorage.getItem('plinko-balance');
        return saved ? parseFloat(saved) : 100;
    });
    const [betAmount, setBetAmount] = useState(1);
    const [rows, setRows] = useState<8 | 12 | 16>(16);
    const [risk, setRisk] = useState<Risk>('medium');
    const [lastWin, setLastWin] = useState<{ win: number; bet: number } | null>(null);
    const [isGameOver, setIsGameOver] = useState(balance <= 0);
    const [canvasScale, setCanvasScale] = useState(1);
    const [hasBallsInPlay, setHasBallsInPlay] = useState(false);
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasWrapperRef = useRef<HTMLDivElement>(null);
    const gameContainerRef = useRef<HTMLDivElement>(null);
    const ballsRef = useRef<Ball[]>([]);
    const pegsRef = useRef<Peg[]>([]);
    const bucketVFXRef = useRef<BucketVFX[]>([]);
    const ballIdRef = useRef(0);
    const lastTimeRef = useRef(0);
    const animationRef = useRef<number>();
    const soundEnabledCountRef = useRef(0);
    const MAX_SOUND_BALLS = 5;

    // Calculate canvas scale based on container size
    // Zoom in more on smaller maps so they appear similar size to 16 rows
    useEffect(() => {
        const updateScale = () => {
            const container = gameContainerRef.current;
            if (!container) return;
            
            const { width: canvasWidth, height: canvasHeight } = getCanvasDimensions(rows);
            const containerRect = container.getBoundingClientRect();
            const padding = 20;
            const availableWidth = containerRect.width - padding;
            const availableHeight = containerRect.height - padding;
            
            // Base scale to fit container
            const scaleX = availableWidth / canvasWidth;
            const scaleY = availableHeight / canvasHeight;
            const scale = Math.min(scaleX, scaleY, 1.5);
            
            setCanvasScale(Math.max(0.4, Math.min(scale, 1.8)));
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, [rows]);

    // Save balance
    useEffect(() => {
        localStorage.setItem('plinko-balance', balance.toString());
        if (balance <= 0 && ballsRef.current.length === 0) {
            setIsGameOver(true);
        }
    }, [balance]);

    // Generate pegs based on row count
    // Pyramid grows from bottom-center outward (bottom row anchored)
    const generatePegs = useCallback(() => {
        const { width: canvasWidth, height: canvasHeight } = getCanvasDimensions(rows);
        const pegs: Peg[] = [];
        const bottomRowPins = rows + 2;
        const totalWidth = (bottomRowPins - 1) * PEG_SPACING;
        const startX = (canvasWidth - totalWidth) / 2;
        
        const bottomY = canvasHeight - BOTTOM_PADDING - 10;

        for (let row = 0; row < rows; row++) {
            const pinsInRow = row + 3;
            const rowOffset = (bottomRowPins - pinsInRow) * PEG_SPACING / 2;
            // Build from bottom up: row 0 (top of pyramid) is highest, last row is at bottomY
            const y = bottomY - (rows - 1 - row) * ROW_SPACING;
            
            for (let col = 0; col < pinsInRow; col++) {
                pegs.push({
                    x: startX + rowOffset + col * PEG_SPACING,
                    y: y,
                    glow: 0,
                });
            }
        }
        return pegs;
    }, [rows]);

    // Initialize pegs when rows change
    useEffect(() => {
        pegsRef.current = generatePegs();
    }, [generatePegs]);

    // Get bucket info
    const getBuckets = useCallback(() => {
        const { width: canvasWidth } = getCanvasDimensions(rows);
        const multipliers = MULTIPLIERS[risk][rows];
        const bottomRowPins = rows + 2;
        const totalWidth = (bottomRowPins - 1) * PEG_SPACING;
        const startX = (canvasWidth - totalWidth) / 2;

        return multipliers.map((mult, i) => ({
            x: startX + i * PEG_SPACING,
            centerX: startX + i * PEG_SPACING + PEG_SPACING / 2,
            width: PEG_SPACING,
            multiplier: mult,
        }));
    }, [risk, rows]);

    // Drop a ball
    const dropBall = useCallback(() => {
        if (balance < betAmount || isGameOver) return;

        setBalance(prev => prev - betAmount);
        playSound('drop');

        const { width: canvasWidth } = getCanvasDimensions(rows);
        
        // Determine if this ball can emit sounds (max 5 at a time)
        const canEmitSound = soundEnabledCountRef.current < MAX_SOUND_BALLS;
        if (canEmitSound) {
            soundEnabledCountRef.current++;
        }
        
        const newBall: Ball = {
            id: ballIdRef.current++,
            x: canvasWidth / 2 + (Math.random() - 0.5) * 8,
            y: 15,
            vx: (Math.random() - 0.5) * 20,
            vy: 50, // Start with some downward velocity
            bet: betAmount,
            lastCollision: 0,
            canEmitSound,
        };

        ballsRef.current.push(newBall);
        setHasBallsInPlay(true);
    }, [balance, betAmount, isGameOver, rows]);

    // Physics and rendering loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Get dynamic canvas size based on rows
        const { width: CANVAS_WIDTH, height: CANVAS_HEIGHT } = getCanvasDimensions(rows);

        // High-DPI setup
        const dpr = window.devicePixelRatio || 1;
        canvas.width = CANVAS_WIDTH * dpr;
        canvas.height = CANVAS_HEIGHT * dpr;
        canvas.style.width = `${CANVAS_WIDTH}px`;
        canvas.style.height = `${CANVAS_HEIGHT}px`;

        const buckets = getBuckets();
        const slotY = CANVAS_HEIGHT - BOTTOM_PADDING + 5;

        const gameLoop = (timestamp: number) => {
            // Calculate delta time (cap at 50ms to prevent spiral of death)
            const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05);
            lastTimeRef.current = timestamp;

            // Update physics
            const completedBalls: { bet: number; multiplier: number }[] = [];
            
            for (let i = ballsRef.current.length - 1; i >= 0; i--) {
                const ball = ballsRef.current[i];
                
                // Apply gravity
                ball.vy += GRAVITY * dt;
                
                // Apply friction
                ball.vx *= FRICTION;
                ball.vy *= 0.999;
                
                // Update position
                ball.x += ball.vx * dt;
                ball.y += ball.vy * dt;
                
                // Track collision cooldown
                ball.lastCollision += dt;

                // Wall collisions - align with bottom row peg edges
                const bottomRowPins = rows + 2;
                const totalPegWidth = (bottomRowPins - 1) * PEG_SPACING;
                const pegStartX = (CANVAS_WIDTH - totalPegWidth) / 2;
                const leftWall = pegStartX - PEG_SPACING / 2;
                const rightWall = pegStartX + totalPegWidth + PEG_SPACING / 2;
                
                if (ball.x < leftWall + BALL_RADIUS) {
                    ball.x = leftWall + BALL_RADIUS + 1;
                    ball.vx = Math.abs(ball.vx) * WALL_BOUNCE;
                    if (ball.vx < 20) ball.vx = 20;
                } else if (ball.x > rightWall - BALL_RADIUS) {
                    ball.x = rightWall - BALL_RADIUS - 1;
                    ball.vx = -Math.abs(ball.vx) * WALL_BOUNCE;
                    if (ball.vx > -20) ball.vx = -20;
                }

                // Peg collisions
                for (const peg of pegsRef.current) {
                    if (ball.lastCollision < 0.025) continue;
                    
                    const dx = ball.x - peg.x;
                    const dy = ball.y - peg.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const minDist = BALL_RADIUS + PEG_RADIUS + COLLISION_BUFFER;

                    if (distance < minDist && distance > 0.01) {
                        // Trigger glow
                        peg.glow = 1.0;
                        
                        // Play sound only if this ball is allowed to emit sounds
                        if (ball.canEmitSound) {
                            playSound('pin');
                        }

                        // Normal vector
                        const nx = dx / distance;
                        const ny = dy / distance;
                        
                        // Push ball out of peg with extra margin
                        const overlap = minDist - distance + 1;
                        ball.x += nx * overlap * 1.5;
                        ball.y += ny * overlap * 1.5;

                        // Reflect velocity
                        const vDotN = ball.vx * nx + ball.vy * ny;
                        if (vDotN < 0) {
                            ball.vx -= 2.0 * vDotN * nx;
                            ball.vy -= 2.0 * vDotN * ny;

                            // Random angle perturbation (more variation)
                            const angle = (Math.random() - 0.5) * 0.8;
                            const cos = Math.cos(angle);
                            const sin = Math.sin(angle);
                            const newVx = ball.vx * cos - ball.vy * sin;
                            const newVy = ball.vx * sin + ball.vy * cos;

                            ball.vx = newVx * BOUNCE;
                            ball.vy = newVy * BOUNCE;

                            // Random horizontal boost
                            ball.vx += (Math.random() - 0.5) * HORIZONTAL_BOOST * 2;

                            // Ensure minimum horizontal movement
                            if (Math.abs(ball.vx) < 20) {
                                ball.vx = (Math.random() < 0.5 ? -1 : 1) * 40;
                            }
                            
                            // Allow upward bounce but cap maximum upward velocity
                            // This creates satisfying bounces while preventing balls from flying off
                            if (ball.vy < -150) ball.vy = -150;
                        }

                        ball.lastCollision = 0;
                    }
                }

                // Check if ball reached bottom
                if (ball.y >= slotY) {
                    // Find which bucket
                    let bucket = buckets.find(b => 
                        ball.x >= b.x && ball.x < b.x + b.width
                    );
                    
                    if (!bucket) {
                        // Edge case - pick closest bucket
                        bucket = buckets.reduce((prev, curr) => 
                            Math.abs(curr.centerX - ball.x) < Math.abs(prev.centerX - ball.x) ? curr : prev
                        );
                    }
                    
                    // Get bucket color for VFX
                    const mult = bucket.multiplier;
                    let color: string;
                    if (mult >= 100) color = '#ff0044';
                    else if (mult >= 20) color = '#ff2200';
                    else if (mult >= 5) color = '#ff6600';
                    else if (mult >= 2) color = '#ffaa00';
                    else if (mult >= 1) color = '#66cc00';
                    else if (mult >= 0.5) color = '#00aa55';
                    else color = '#008844';
                    
                    // Spawn VFX particles
                    const particles = [];
                    for (let p = 0; p < 12; p++) {
                        const angle = (Math.PI * 2 * p) / 12 + Math.random() * 0.3;
                        const speed = 80 + Math.random() * 60;
                        particles.push({
                            x: bucket.centerX,
                            y: slotY + 10,
                            vx: Math.cos(angle) * speed,
                            vy: Math.sin(angle) * speed - 50,
                            size: 3 + Math.random() * 3
                        });
                    }
                    bucketVFXRef.current.push({
                        x: bucket.centerX,
                        y: slotY,
                        color,
                        life: 1.0,
                        particles
                    });
                    
                    // Play landing sound
                    playSound('land');
                    
                    // If this ball was emitting sound, decrement count and potentially enable another ball
                    if (ball.canEmitSound) {
                        soundEnabledCountRef.current--;
                        
                        // Find a ball that can't emit sound and enable it
                        const silentBall = ballsRef.current.find(b => !b.canEmitSound && b.id !== ball.id);
                        if (silentBall && soundEnabledCountRef.current < MAX_SOUND_BALLS) {
                            silentBall.canEmitSound = true;
                            soundEnabledCountRef.current++;
                        }
                    }
                    
                    completedBalls.push({ bet: ball.bet, multiplier: bucket.multiplier });
                    ballsRef.current.splice(i, 1);
                }
            }
            
            // Update hasBallsInPlay state
            if (ballsRef.current.length === 0 && completedBalls.length > 0) {
                setHasBallsInPlay(false);
            }

            // Process completed balls - play win/lose sound after a short delay
            if (completedBalls.length > 0) {
                let totalWin = 0;
                let totalBet = 0;
                for (const { bet, multiplier } of completedBalls) {
                    totalWin += bet * multiplier;
                    totalBet += bet;
                }
                
                // Delayed win/lose sound so it doesn't overlap with land sound
                setTimeout(() => {
                    if (totalWin >= totalBet) {
                        playSound('win');
                    } else {
                        playSound('lose');
                    }
                }, 150);
                
                setBalance(prev => prev + totalWin);
                setLastWin({ win: totalWin, bet: totalBet });
            }

            // Update peg glows
            for (const peg of pegsRef.current) {
                if (peg.glow > 0) {
                    peg.glow = Math.max(0, peg.glow - dt * 3);
                }
            }
            
            // Update bucket VFX
            for (let i = bucketVFXRef.current.length - 1; i >= 0; i--) {
                const vfx = bucketVFXRef.current[i];
                vfx.life -= dt * 2;
                
                for (const p of vfx.particles) {
                    p.x += p.vx * dt;
                    p.y += p.vy * dt;
                    p.vy += 200 * dt; // gravity on particles
                    p.size *= 0.97;
                }
                
                if (vfx.life <= 0) {
                    bucketVFXRef.current.splice(i, 1);
                }
            }

            // === RENDERING ===
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            // Background
            const bgGrad = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
            bgGrad.addColorStop(0, '#0d1821');
            bgGrad.addColorStop(1, '#071015');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

            // Draw pegs
            for (const peg of pegsRef.current) {
                // Glow effect
                if (peg.glow > 0) {
                    const glowRadius = PEG_RADIUS + 8 * peg.glow;
                    const gradient = ctx.createRadialGradient(peg.x, peg.y, 0, peg.x, peg.y, glowRadius);
                    gradient.addColorStop(0, `rgba(255, 220, 100, ${0.6 * peg.glow})`);
                    gradient.addColorStop(1, 'rgba(255, 220, 100, 0)');
                    ctx.beginPath();
                    ctx.arc(peg.x, peg.y, glowRadius, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }

                // Peg shadow
                ctx.beginPath();
                ctx.arc(peg.x, peg.y, PEG_RADIUS + 1, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fill();

                // Peg body with gradient
                ctx.beginPath();
                ctx.arc(peg.x, peg.y, PEG_RADIUS, 0, Math.PI * 2);
                const pegGrad = ctx.createRadialGradient(peg.x - 1, peg.y - 1, 0, peg.x, peg.y, PEG_RADIUS);
                pegGrad.addColorStop(0, '#ffffff');
                pegGrad.addColorStop(0.5, '#d0d8e0');
                pegGrad.addColorStop(1, '#a0a8b0');
                ctx.fillStyle = pegGrad;
                ctx.fill();

                // Highlight
                ctx.beginPath();
                ctx.arc(peg.x - 1.5, peg.y - 1.5, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();
            }

            // Draw buckets
            const bucketHeight = 40;
            const gap = 1.5;
            const radius = 4;

            for (const bucket of buckets) {
                const mult = bucket.multiplier;
                
                let color: string;
                if (mult >= 100) color = '#ff0044';
                else if (mult >= 20) color = '#ff2200';
                else if (mult >= 5) color = '#ff6600';
                else if (mult >= 2) color = '#ffaa00';
                else if (mult >= 1) color = '#66cc00';
                else if (mult >= 0.5) color = '#00aa55';
                else color = '#008844';

                const bx = bucket.x + gap;
                const by = slotY;
                const bw = bucket.width - gap * 2;
                const bh = bucketHeight;

                // Rounded rect
                ctx.beginPath();
                ctx.moveTo(bx + radius, by);
                ctx.lineTo(bx + bw - radius, by);
                ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + radius);
                ctx.lineTo(bx + bw, by + bh - radius);
                ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw - radius, by + bh);
                ctx.lineTo(bx + radius, by + bh);
                ctx.quadraticCurveTo(bx, by + bh, bx, by + bh - radius);
                ctx.lineTo(bx, by + radius);
                ctx.quadraticCurveTo(bx, by, bx + radius, by);
                ctx.closePath();

                const bucketGrad = ctx.createLinearGradient(bx, by, bx, by + bh);
                bucketGrad.addColorStop(0, shadeColor(color, 20));
                bucketGrad.addColorStop(0.5, color);
                bucketGrad.addColorStop(1, shadeColor(color, -35));
                ctx.fillStyle = bucketGrad;
                ctx.fill();

                ctx.strokeStyle = shadeColor(color, 35);
                ctx.lineWidth = 1;
                ctx.stroke();

                // Text
                ctx.fillStyle = '#fff';
                ctx.font = `bold ${Math.max(8, Math.min(11, bw / 3))}px -apple-system, BlinkMacSystemFont, sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const text = mult >= 1000 ? '1Kx' : mult + 'x';
                ctx.fillText(text, bucket.centerX, slotY + bucketHeight / 2);
            }
            
            // Draw bucket VFX
            for (const vfx of bucketVFXRef.current) {
                // Glow burst
                const glowSize = 30 * vfx.life;
                const gradient = ctx.createRadialGradient(vfx.x, vfx.y + 20, 0, vfx.x, vfx.y + 20, glowSize);
                gradient.addColorStop(0, vfx.color + Math.floor(vfx.life * 80).toString(16).padStart(2, '0'));
                gradient.addColorStop(1, vfx.color + '00');
                ctx.beginPath();
                ctx.arc(vfx.x, vfx.y + 20, glowSize, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
                
                // Particles
                for (const p of vfx.particles) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * vfx.life, 0, Math.PI * 2);
                    ctx.fillStyle = vfx.color;
                    ctx.globalAlpha = vfx.life;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            }

            // Draw balls
            for (const ball of ballsRef.current) {
                // Shadow
                ctx.beginPath();
                ctx.arc(ball.x + 2, ball.y + 3, BALL_RADIUS, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
                ctx.fill();

                // Ball body
                ctx.beginPath();
                ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, Math.PI * 2);
                const ballGrad = ctx.createRadialGradient(ball.x - 2, ball.y - 2, 0, ball.x, ball.y, BALL_RADIUS);
                ballGrad.addColorStop(0, '#ffee88');
                ballGrad.addColorStop(0.4, '#ffcc00');
                ballGrad.addColorStop(1, '#cc8800');
                ctx.fillStyle = ballGrad;
                ctx.fill();

                // Border
                ctx.strokeStyle = '#aa6600';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Highlight
                ctx.beginPath();
                ctx.arc(ball.x - 2.5, ball.y - 2.5, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 240, 0.7)';
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(gameLoop);
        };

        lastTimeRef.current = performance.now();
        animationRef.current = requestAnimationFrame(gameLoop);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [getBuckets, rows]);

    const resetGame = () => {
        setBalance(100);
        ballsRef.current = [];
        setIsGameOver(false);
        setLastWin(null);
        localStorage.setItem('plinko-balance', '100');
    };

    const handleBetChange = (value: number) => {
        const rounded = Math.round(value * 100) / 100;
        setBetAmount(Math.max(0.1, Math.min(balance, rounded)));
    };

    return (
        <div className="plinko-page">
            <nav className="plinko-nav">
                <Link to="/" className="back-link">Back to Home</Link>
            </nav>
            <div className="plinko-layout">
                <div className="plinko-controls">
                    <h1 className="plinko-title">🎰 Plinko</h1>
                    
                    <div className="balance-display">
                        <span className="balance-label">Balance</span>
                        <span className="balance-amount">${balance.toFixed(2)}</span>
                        {lastWin !== null && (
                            <span className={`last-win ${lastWin.win >= lastWin.bet ? 'win' : 'loss'}`}>
                                {lastWin.win >= lastWin.bet ? '+' : ''}{(lastWin.win - lastWin.bet).toFixed(2)}
                            </span>
                        )}
                    </div>

                    {isGameOver ? (
                        <div className="game-over-panel">
                            <h2>💸 Broke!</h2>
                            <p>Classic gambling L.</p>
                            <button onClick={resetGame} className="reset-btn">
                                Restart ($100)
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="control-group">
                                <label>Bet Amount</label>
                                <div className="bet-controls">
                                    <button onClick={() => handleBetChange(betAmount / 2)}>½</button>
                                    <input
                                        type="number"
                                        value={betAmount}
                                        onChange={(e) => handleBetChange(parseFloat(e.target.value) || 0)}
                                        min={0.1}
                                        max={balance}
                                        step={0.1}
                                    />
                                    <button onClick={() => handleBetChange(betAmount * 2)}>2×</button>
                                    <button onClick={() => handleBetChange(balance)}>Max</button>
                                </div>
                            </div>

                            <div className="control-group">
                                <label>
                                    Risk 
                                    {hasBallsInPlay && (
                                        <span style={{
                                            color: '#ff8844', 
                                            fontSize: '0.65rem',
                                            background: 'rgba(255, 136, 68, 0.15)',
                                            padding: '2px 6px',
                                            borderRadius: '4px',
                                            marginLeft: '6px'
                                        }}>
                                            🔒 LOCKED
                                        </span>
                                    )}
                                </label>
                                <div className="option-buttons">
                                    {(['low', 'medium', 'high'] as Risk[]).map(r => (
                                        <button
                                            key={r}
                                            className={risk === r ? 'active' : ''}
                                            onClick={() => !hasBallsInPlay && setRisk(r)}
                                            disabled={hasBallsInPlay}
                                            style={hasBallsInPlay && risk !== r ? { opacity: 0.4 } : {}}
                                        >
                                            {r.charAt(0).toUpperCase() + r.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="control-group">
                                <label>
                                    Rows
                                    {hasBallsInPlay && (
                                        <span style={{
                                            color: '#ff8844', 
                                            fontSize: '0.65rem',
                                            background: 'rgba(255, 136, 68, 0.15)',
                                            padding: '2px 6px',
                                            borderRadius: '4px',
                                            marginLeft: '6px'
                                        }}>
                                            🔒 LOCKED
                                        </span>
                                    )}
                                </label>
                                <div className="option-buttons">
                                    {([8, 12, 16] as const).map(r => (
                                        <button
                                            key={r}
                                            className={rows === r ? 'active' : ''}
                                            onClick={() => !hasBallsInPlay && setRows(r)}
                                            disabled={hasBallsInPlay}
                                            style={hasBallsInPlay && rows !== r ? { opacity: 0.4 } : {}}
                                        >
                                            {r}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="drop-btn"
                                onClick={dropBall}
                                disabled={balance < betAmount}
                            >
                                🎱 Drop (${betAmount.toFixed(2)})
                            </button>

                            <button className="reset-small" onClick={resetGame}>
                                Reset Balance
                            </button>
                        </>
                    )}

                    <p className="disclaimer">⚠️ Fake money. Don't gamble IRL.</p>
                </div>

                <div className="plinko-game" ref={gameContainerRef}>
                    <div 
                        className="canvas-wrapper" 
                        ref={canvasWrapperRef}
                        style={{ transform: `scale(${canvasScale})` }}
                    >
                        <canvas ref={canvasRef} className="plinko-canvas" />
                    </div>
                </div>
            </div>
        </div>
    );
}
