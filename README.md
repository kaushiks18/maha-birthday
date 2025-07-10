# Birthday Site - Maha

A beautiful Next.js birthday website with animations, photo gallery, and countdown features.

## Features

- 🎂 Birthday countdown timer
- 📸 Photo gallery with animations
- 💌 Personal message section
- 🎵 Background music player
- ✨ Floating animations and confetti
- 📱 Responsive design

## Deployment to GitHub Pages

This site is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Fork or upload this repository to your GitHub account**

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"

3. **Push your code**:
   - The GitHub Action will automatically trigger on push to the main/master branch
   - Wait for the build to complete (you can monitor this in the "Actions" tab)
   - Your site will be available at: `https://yourusername.github.io/repository-name`

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run build && npm run export
```

### Customization

1. **Update personal data** in `src/data.js`:
   - Change the birthday date
   - Update the author name
   - Modify the letter message
   - Replace photo URLs with your own

2. **Replace images** in the `public/` folder:
   - `img1.jpg` through `img5.jpg` - your photos
   - `bg.mp3` - background music (optional)

3. **Customize styling** by modifying the Tailwind CSS classes throughout the components

### File Structure

```
src/
├── app/
│   ├── page.jsx          # Main page component
│   ├── layout.js         # App layout
│   └── globals.css       # Global styles
├── components/
│   ├── Countdown.jsx     # Birthday countdown
│   ├── PhotoGallery.jsx  # Photo gallery
│   ├── Message.jsx       # Personal message
│   └── ...              # Other components
└── data.js              # Configuration data
```

## Technologies Used

- Next.js 15
- React 19
- Framer Motion (animations)
- Tailwind CSS (styling)
- Lucide React (icons)
- Canvas Confetti (celebration effects)

## License

This project is for personal use. Feel free to fork and customize for your own celebrations! 🎉
