# BlackRoth - Palantir Clone

A React-based clone of the Palantir website, featuring modern UI components and responsive design.

## Features

- **Modern React Components**: Built with functional components and hooks
- **Responsive Design**: Mobile-first approach with Bootstrap integration
- **Interactive Carousel**: Custom carousel with tab navigation
- **Animated Hero Section**: Typewriter effect for the main title
- **Fullscreen Navigation**: Overlay menus for mobile and desktop
- **Search Functionality**: Fullscreen search overlay
- **Video Integration**: Background videos and video cards
- **Services Grid**: Interactive grid showcasing different services

## Components

- `Navbar`: Navigation with search and mobile menu
- `Hero`: Hero section with video background and animated text
- `Carousel`: Interactive carousel with tab controls
- `CalloutSection`: Callout text section
- `ServicesGrid`: Grid layout for services
- `VideoCard`: Video card with content
- `Footer`: Comprehensive footer with multiple columns

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blackroth
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Carousel.js
│   ├── CalloutSection.js
│   ├── ServicesGrid.js
│   ├── VideoCard.js
│   └── Footer.js
├── App.js
├── App.css
└── index.js
```

## Dependencies

- React 19.1.1
- Bootstrap 5.3.7
- Font Awesome 6.5.1

## Customization

### Adding New Services
Edit the `services` array in `ServicesGrid.js` to add or modify services.

### Carousel Content
Modify the `carouselData` array in `Carousel.js` to change carousel slides.

### Styling
All styles are in `App.css`. The design uses CSS custom properties and modern CSS features.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes only.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
