import React from 'react';
import { motion } from 'motion/react';

interface OneLineArtworkProps {
  type:
    | 'face'
    | 'hands'
    | 'infinity'
    | 'wave'
    | 'robotics'
    | 'legal'
    | 'generative'
    | 'vision'
    | 'editorial'
    | 'mobile'
    | 'analytics'
    | 'shield'
    | 'loop';
  className?: string;
  strokeWidth?: number;
  color?: string;
  animate?: boolean;
  delay?: number;
}

export const OneLineArtwork: React.FC<OneLineArtworkProps> = ({
  type,
  className = 'w-full h-auto',
  strokeWidth = 1.6,
  color = '#121212',
  animate = true,
  delay = 0.2
}) => {
  // Bespoke continuous single-line SVG path coordinates
  const paths: Record<string, { viewBox: string; d: string }> = {
    // Elegant Continuous Line Profile / Face Silhouette (Matisse/Cocteau style)
    face: {
      viewBox: '0 0 300 400',
      d: 'M 150,40 ' +
         'C 190,40 230,70 235,120 ' +
         'C 240,160 220,195 210,210 ' +
         'C 200,225 195,245 195,265 ' +
         'C 195,295 185,320 160,340 ' +
         'C 135,360 100,350 90,320 ' +
         'C 80,290 85,260 85,230 ' + // Jawline to chin
         'C 85,210 75,200 65,190 ' + // Ear curve
         'C 55,180 50,150 65,130 ' +
         'C 75,120 85,135 95,145 ' +
         'C 105,120 120,80 145,70 ' + // Forehead slope
         'C 155,65 170,75 165,95 ' + // Eyebrow arch
         'C 160,115 140,120 135,135 ' + // Eyelid curve
         'C 130,150 145,155 155,150 ' +
         'C 165,145 150,180 150,200 ' + // Nose bridge & tip
         'C 150,215 135,215 130,225 ' +
         'C 125,235 140,245 155,240 ' + // Upper lip
         'C 165,235 145,260 135,265 ' + // Lower lip & chin contour
         'C 120,270 125,300 130,340 ' +
         'C 135,370 160,380 190,380 ' + // Neck flowing base
         'C 230,380 270,360 290,330'
    },

    // Two Hands Handshaking Continuous Monoline
    hands: {
      viewBox: '0 0 600 240',
      d: 'M 25,105 ' +
         'C 70,108 115,110 155,102 ' +
         'C 180,96 205,75 232,68 ' +
         'C 255,62 276,72 285,88 ' +
         'C 292,100 284,114 268,120 ' +
         'C 250,126 232,122 218,132 ' +
         'C 240,126 265,116 295,108 ' +
         'C 330,98 365,88 395,95 ' +
         'C 425,102 445,112 485,108 ' +
         'C 525,104 555,102 575,102 ' +
         'C 582,102 582,152 575,152 ' +
         'C 545,154 515,158 480,152 ' +
         'C 450,146 430,138 405,148 ' +
         'C 385,156 360,172 342,166 ' +
         'C 328,160 326,144 338,134 ' +
         'C 352,124 378,124 395,135 ' +
         'C 375,148 350,178 330,178 ' +
         'C 315,178 305,162 318,150 ' +
         'C 330,140 355,144 370,154 ' +
         'C 350,166 325,195 305,194 ' +
         'C 290,193 282,178 295,166 ' +
         'C 308,156 332,160 348,170 ' +
         'C 328,182 300,212 280,210 ' +
         'C 265,208 258,194 270,182 ' +
         'C 282,172 305,176 322,186 ' +
         'C 290,198 255,208 225,202 ' +
         'C 195,196 170,178 145,162 ' +
         'C 105,155 65,154 25,154'
    },

    // Continuous Infinite Line & Geometric Metamorphosis
    infinity: {
      viewBox: '0 0 400 200',
      d: 'M 50,100 ' +
         'C 50,40 120,40 160,80 ' +
         'C 190,110 210,110 240,80 ' +
         'C 280,40 350,40 350,100 ' +
         'C 350,160 280,160 240,120 ' +
         'C 210,90 190,90 160,120 ' +
         'C 120,160 50,160 50,100 ' +
         'Z'
    },

    // Flowing Connecting Wave Thread
    wave: {
      viewBox: '0 0 800 150',
      d: 'M 0,75 ' +
         'C 100,20 180,130 280,75 ' +
         'C 380,20 460,130 560,75 ' +
         'C 660,20 730,120 800,75'
    },

    // Robotics / PromoBot motif: [P] square wrap + "romobot"
    robotics: {
      viewBox: '0 0 560 160',
      d:
        // Square wrapping around letter 'P'
        'M 42,25 L 108,25 A 15,15 0 0 1 123,40 L 123,120 A 15,15 0 0 1 108,135 L 42,135 A 15,15 0 0 1 27,120 L 27,40 A 15,15 0 0 1 42,25 Z ' +
        // Letter 'P' inside the square
        'M 56,112 L 56,48 L 82,48 C 96,48 102,57 102,68 C 102,79 96,88 82,88 L 56,88 ' +
        // 'r'
        'M 152,110 L 152,68 M 152,80 C 156,72 166,68 180,68 C 186,68 190,70 194,72 ' +
        // 'o'
        'M 224,68 C 236,68 245,77 245,89 C 245,101 236,110 224,110 C 212,110 203,101 203,89 C 203,77 212,68 224,68 Z ' +
        // 'm'
        'M 262,110 L 262,68 M 262,80 C 266,72 276,68 286,68 C 296,68 300,75 300,85 L 300,110 M 300,80 C 304,72 314,68 324,68 C 334,68 338,75 338,85 L 338,110 ' +
        // 'o'
        'M 368,68 C 380,68 389,77 389,89 C 389,101 380,110 368,110 C 356,110 347,101 347,89 C 347,77 356,68 368,68 Z ' +
        // 'b'
        'M 408,46 L 408,110 M 408,82 C 413,72 423,68 433,68 C 444,68 452,77 452,89 C 452,101 444,110 433,110 C 422,110 413,104 408,96 ' +
        // 'o'
        'M 478,68 C 490,68 499,77 499,89 C 499,101 490,110 478,110 C 466,110 457,101 457,89 C 457,77 466,68 478,68 Z ' +
        // 't'
        'M 524,54 L 524,102 C 524,108 528,110 536,110 M 516,68 L 534,68'
    },

    // Legal Scales / Node Symmetry Continuous Monoline (THEMIS motif)
    legal: {
      viewBox: '0 0 360 260',
      d: 'M 180,20 ' +
         'L 180,220 ' +
         'C 180,240 140,240 120,240 ' +
         'L 240,240 ' +
         'C 220,240 180,240 180,220 ' +
         'L 180,60 ' +
         'L 70,80 ' +
         'C 60,110 50,140 50,160 ' +
         'C 50,175 90,175 90,160 ' +
         'C 90,140 80,110 70,80 ' +
         'L 180,60 ' +
         'L 290,80 ' +
         'C 280,110 270,140 270,160 ' +
         'C 270,175 310,175 310,160 ' +
         'C 310,140 300,110 290,80 ' +
         'L 180,60'
    },

    // Generative Algorithm Spiral (Chronos motif)
    generative: {
      viewBox: '0 0 300 300',
      d: 'M 150,150 ' +
         'C 160,150 165,160 160,170 ' +
         'C 150,180 130,175 130,155 ' +
         'C 130,130 155,120 175,130 ' +
         'C 195,140 200,175 180,195 ' +
         'C 155,215 115,205 110,170 ' +
         'C 105,130 140,95 185,100 ' +
         'C 230,105 250,155 235,200 ' +
         'C 215,245 150,265 95,235 ' +
         'C 45,200 45,125 90,75 ' +
         'C 140,25 230,30 280,90'
    },

    // Vision / Eye / Gesture Landmark Monoline (NeuroVision motif)
    vision: {
      viewBox: '0 0 360 220',
      d: 'M 30,110 ' +
         'C 80,40 180,40 230,110 ' +
         'C 280,180 330,180 340,110 ' +
         'C 290,40 190,40 140,110 ' +
         'C 90,180 40,180 30,110 ' +
         'C 60,110 110,80 180,80 ' +
         'C 220,80 230,110 230,110 ' +
         'C 230,130 200,140 180,140 ' +
         'C 160,140 140,130 140,110 ' +
         'C 140,95 160,95 180,95 ' +
         'C 195,95 200,110 190,115'
    },

    // Editorial Monoline Minimal Vase & Flora (Aura Studio motif)
    editorial: {
      viewBox: '0 0 280 360',
      d: 'M 140,330 ' +
         'C 100,330 90,290 100,240 ' +
         'C 110,190 80,160 80,120 ' +
         'C 80,70 120,50 140,30 ' +
         'C 160,50 200,70 200,120 ' +
         'C 200,160 170,190 180,240 ' +
         'C 190,290 180,330 140,330 ' +
         'C 140,330 140,200 140,80 ' + // Center flower stem
         'C 120,60 100,60 100,40 ' + // Leaf left
         'C 120,40 140,60 140,80 ' +
         'C 160,60 180,60 180,40 ' + // Leaf right
         'C 160,40 140,60 140,30'
    },

    // Mobile & Megatrust motif: Phone frame with letter 'M' inside
    mobile: {
      viewBox: '0 0 280 340',
      d: 'M 100,25 ' +
         'L 180,25 ' +
         'C 195,25 205,35 205,50 ' +
         'L 205,290 ' +
         'C 205,305 195,315 180,315 ' +
         'L 100,315 ' +
         'C 85,315 75,305 75,290 ' +
         'L 75,50 ' +
         'C 75,35 85,25 100,25 Z ' +
         // Top speaker notch & bottom home bar
         'M 125,45 L 155,45 ' +
         'M 120,295 L 160,295 ' +
         // Letter 'M' centered inside the mobile screen
         'M 108,215 L 108,125 L 140,172 L 172,125 L 172,215'
    },

    // Business Intelligence & Strategic Analytics motif (Dr. Amro Khater)
    analytics: {
      viewBox: '0 0 320 260',
      d: 'M 40,40 ' +
         'L 280,40 ' +
         'C 290,40 295,46 295,56 ' +
         'L 295,210 ' +
         'C 295,220 290,225 280,225 ' +
         'L 40,225 ' +
         'C 30,225 25,220 25,210 ' +
         'L 25,56 ' +
         'C 25,46 30,40 40,40 Z ' +
         // Browser top bar divider
         'M 25,72 L 295,72 ' +
         // Browser top dots
         'M 45,56 L 50,56 M 60,56 L 65,56 M 75,56 L 80,56 ' +
         // Analytics Bar 1
         'M 60,195 L 60,150 C 60,146 64,142 68,142 L 80,142 C 84,142 88,146 88,150 L 88,195 ' +
         // Analytics Bar 2
         'M 110,195 L 110,120 C 110,116 114,112 118,112 L 130,112 C 134,112 138,116 138,120 L 138,195 ' +
         // Analytics Bar 3
         'M 160,195 L 160,95 C 160,91 164,87 168,87 L 180,87 C 184,87 188,91 188,95 L 188,195 ' +
         // Continuous Growth & Telemetry Vector Line
         'M 74,130 C 95,120 115,100 145,108 C 175,116 205,80 255,85 ' +
         'M 240,85 L 255,85 L 255,100'
    },

    // Continuous Loop Knot
    loop: {
      viewBox: '0 0 200 200',
      d: 'M 100,20 ' +
         'C 150,20 180,60 180,100 ' +
         'C 180,140 140,180 100,180 ' +
         'C 60,180 20,140 20,100 ' +
         'C 20,60 60,20 100,20 Z'
    },

    // ShieldOps — AI-Powered SOC Analysis Platform motif (Circuit Hexagon Shield)
    shield: {
      viewBox: '0 0 300 300',
      d: // Outer top hexagon circuit path
         'M 65,138 L 65,96 L 150,48 L 235,96 L 235,136 ' +
         // Top-right terminal node
         'M 242,136 A 7 7 0 1 1 228,136 A 7 7 0 1 1 242,136 ' +
         // Top inner chevron
         'M 104,132 L 150,105 L 196,132 ' +
         // Center hexagonal core
         'M 150,132 L 166,141 L 166,159 L 150,168 L 134,159 L 134,141 Z ' +
         // Bottom inner chevron
         'M 104,168 L 150,195 L 196,168 ' +
         // Bottom-left terminal node
         'M 72,164 A 7 7 0 1 1 58,164 A 7 7 0 1 1 72,164 ' +
         // Outer bottom hexagon circuit path
         'M 65,164 L 65,204 L 150,252 L 235,204 L 235,162'
    }
  };

  const selected = paths[type] || paths.wave;

  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox={selected.viewBox}
        className="w-full h-full overflow-visible pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle ghost trace */}
        <path
          d={selected.d}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeOpacity="0.12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Primary Animated Line */}
        <motion.path
          d={selected.d}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          whileInView={
            animate
              ? {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    pathLength: { duration: 1.8, delay, ease: [0.33, 1, 0.68, 1] },
                    opacity: { duration: 0.3, delay }
                  }
                }
              : undefined
          }
          viewport={{ once: true, margin: '-40px' }}
        />
      </svg>
    </div>
  );
};
