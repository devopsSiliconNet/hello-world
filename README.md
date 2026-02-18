# Hello World ✨

A visually stunning, fully responsive Hello World web app with professional-grade animations. Deployed as a static site on AWS S3 behind CloudFront CDN.

## Features

- **Cinematic letter-by-letter 3D reveal** with blur-to-focus transitions
- **80-particle ambient field** with color variety and glow effects
- **4 concentric 3D orbital rings** with multi-axis rotation
- **Interactive cursor glow** that follows mouse with spring physics
- **Shimmer gradient text** on "WORLD" with continuous animation
- **Animated gradient background** with slow color drift
- **Grid pattern + noise texture + vignette** for cinematic depth
- **Corner bracket accents** with staggered slide-in
- **Fully responsive** — optimized for mobile (320px) through ultrawide (2560px+)
- **Accessibility** — respects `prefers-reduced-motion`

## Tech Stack

- Next.js 15 (App Router, TypeScript, Static Export)
- Tailwind CSS 4
- Framer Motion 11

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build          # Static export to out/
aws s3 sync out/ s3://BUCKET/ --delete
```

## Infrastructure

- **S3:** Static file hosting
- **CloudFront:** Global CDN with HTTPS
- **Region:** us-east-1

## License

MIT
