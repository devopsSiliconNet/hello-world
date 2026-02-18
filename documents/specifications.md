# Technical Specifications: Hello World

## Architecture

### Static Export Strategy
Next.js configured with `output: 'export'` in `next.config.ts`. This generates a fully static `out/` directory containing HTML, CSS, JS, and assets. No server required — pure S3 hosting.

### Component Hierarchy
```
layout.tsx                    # Root: metadata, fonts, prefers-reduced-motion
└── page.tsx                  # Main composition layer
    ├── CursorGlow            # Mouse-following radial gradient
    ├── BackgroundLayers      # Gradient + grid + noise + vignette
    ├── ParticleField         # 80 ambient floating particles
    ├── OrbitalRings          # 4 concentric 3D-rotating rings
    ├── HeroText              # "Hello World" with letter animations
    │   ├── Hello letters     # 3D flip + fade (staggered 80ms)
    │   ├── Divider line      # Scale-X reveal
    │   ├── World letters     # 3D flip + shimmer gradient
    │   ├── Subtitle          # Fade up
    │   └── PulsingDots       # Looping scale/opacity
    └── CornerAccents         # Decorative L-brackets + version
```

### Animation Timeline
| Time (s) | Element | Animation Type |
|-----------|---------|---------------|
| 0.0 | Background gradient | Continuous drift (10s loop) |
| 0.0–2.0 | Orbital rings | Staggered fade-in + continuous rotation |
| 0.0+ | Particles | Continuous float upward (6–14s per cycle) |
| 0.5–1.3 | "Hello" letters (5) | 3D rotateX(-90°→0°) + opacity + translateY |
| 1.5–2.3 | "World" letters (5) | Same reveal + shimmer gradient loop |
| 1.8–3.0 | Divider line | scaleX(0→1) with gradient |
| 2.4–3.4 | Subtitle | Fade + translateY(20→0) |
| 3.0+ | Corner accents | Slide in from edges |
| 3.0+ | Pulsing dots | Infinite scale/opacity pulse |
| 0.0+ | Cursor glow | Real-time mouse tracking |

### Color System
```
Background:       #000000 (pure black)
Text primary:     #FFFFFF
Text muted:       rgba(255,255,255,0.3)
Accent purple:    rgba(120, 60, 255)     — primary glow
Accent blue:      rgba(0, 180, 255)      — secondary glow
Accent pink:      rgba(255, 60, 120)     — tertiary glow
Ring border:      rgba(140, 120, 255, 0.06–0.1)
Particle colors:  White/purple/blue variants at 10–50% opacity
Grid lines:       rgba(255,255,255,0.03)
Cursor glow:      rgba(120, 80, 255, 0.15)
```

### Typography Scale
| Element | Font | Weight | Size (Desktop) | Size (Tablet) | Size (Mobile) | Style |
|---------|------|--------|---------------|--------------|--------------|-------|
| Hello | Inter | 100 (Thin) | 14rem | 8rem | 4.5rem | Glow text-shadow |
| World | Inter | 700 (Bold) | 10rem | 6rem | 3.5rem | Shimmer gradient, uppercase, 0.2em tracking |
| Subtitle | Inter | 300 (Light) | 1rem | 0.875rem | 0.75rem | Uppercase, 0.5em tracking, 30% white |
| Version | Inter | 300 | 0.625rem | 0.625rem | 0.5rem | 15% white |

### Animation Easings
- **Letter reveal:** `[0.22, 1, 0.36, 1]` — custom spring (fast attack, gentle settle)
- **Particles:** `linear` — constant speed
- **Orbital rings rotation:** `linear` — continuous
- **Orbital rings tilt:** `easeInOut` — gentle wobble
- **Background gradient:** `linear` — imperceptible shift
- **Cursor glow:** `spring { stiffness: 150, damping: 15 }` — responsive follow

### Responsive Breakpoints
```
xs:  320px   — minimum supported
sm:  480px   — large phones
md:  768px   — tablets
lg:  1024px  — small desktops
xl:  1440px  — standard desktops
2xl: 1920px+ — ultrawide
```

### Performance Budget
| Metric | Target |
|--------|--------|
| HTML | < 5KB gzipped |
| CSS | < 15KB gzipped |
| JS | < 200KB gzipped |
| Total transfer | < 250KB |
| LCP | < 2.0s |
| FCP | < 1.5s |
| CLS | 0 |

## File Structure
```
hello-world/
├── documents/
│   ├── project-requirements.md
│   ├── specifications.md
│   ├── implementation-plan.md
│   └── deployment.md
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── BackgroundLayers.tsx
│       ├── CursorGlow.tsx
│       ├── HeroText.tsx
│       ├── OrbitalRings.tsx
│       ├── ParticleField.tsx
│       └── CornerAccents.tsx
├── public/
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── package.json
└── README.md
```
