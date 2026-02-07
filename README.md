# Valentine's Day Proposal Website 💙

A romantic, modern one-page website for asking your partner to be your Valentine. Built with React and Tailwind CSS, featuring a bold red grid layout with a centered glass card.

## Features ✨

- **Full-Screen Grid**: 8×6 card grid filling the background
- **Minimal Motion**: Subtle drift animation on cards
- **Randomized Card Text**: Some tiles omit text for visual rhythm
- **Glass Focus Card**: Main question sits on a glass panel
- **Centered CTA**: Two equal-sized buttons
- **Success Celebration**: Confetti animation and themed popout
- **Fully Responsive**: Grid scales to fit all screens

## Tech Stack 🛠️

- React 18
- Tailwind CSS 3
- CSS Animations
- Modern JavaScript

## Setup & Installation 📦

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory**:
```bash
cd valentine
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```

The website will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Customization 🎨

### Change the Colors

Update the background and grid card styling in [src/index.css](src/index.css):

- `body` background (currently #E1280B)
- `.grid-card` background/border
- `.glass-portal` blur/border/shadow

### Personalize the Content

Edit [src/components/MainSection.js](src/components/MainSection.js):

- `reasons` array for card titles/descriptions
- Main question text and buttons
- `rows`/`cols` for grid size
- `showText` randomness

### Change Fonts

Fonts are loaded from Google Fonts in [public/index.html](public/index.html). Modify the link to use different fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet" />
```

## Component Structure 📁

```
src/
├── components/
│   ├── MainSection.js               # Grid + main question overlay
│   ├── SuccessOverlay.js            # Confetti celebration
│   └── FloatingHearts.js            # (unused, optional)
├── App.js                            # Main app component
├── index.js                          # React entry point
└── index.css                         # Global styles
```

## Animation Highlights 🎬

- **Grid Drift**: Minimal motion for background tiles
- **Button Interactions**: Subtle scale and shadow on hover
- **Confetti**: Celebration on success
- **Glass Panel**: Frosted look for the main message

## Browser Support 🌐

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment 🚀

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build/`

### Traditional Hosting

```bash
npm run build
# Upload the 'build' folder to your web server
```

## Tips for Success 💕

1. **Test on mobile**: Ensure the 8×6 grid fits your device
2. **Personalize the reasons**: Update the `reasons` content
3. **Tune the glass**: Adjust `.glass-portal` blur/border to taste
4. **Capture the moment**: Screenshot or screen record

## License 📄

Free to use and modify for your proposal!

---

Made with 💙 by Jethro the uxpert
