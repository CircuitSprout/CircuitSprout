# Circuit Sprout - Portfolio Website
The following is a personal project depicting my growing knowledge of full stack applications and understanding, as well as hands-on practice with Vite + React to create a personalized website with access to a portfolio (i.e. my GitHub) as well as my email for contact. 

## Project Overview

Circuit Sprout is a personal portfolio website that blends the aesthetics of the cyber frontier and the renewable, eco-focused technology. 

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Google Fonts (Oxanium, Kode Mono)

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CircuitSprout_1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`


## 🌿 Customization

### Colors
The color scheme is defined in CSS variables in `src/index.css`. Key colors include:
- `--tech-green`: Primary accent color
- `--forest-green`: Main text color
- `--moss-green`: Secondary nature color
- `--fairy-pink`: Magical accent color

### Content
- Update the text in each component to reflect your personal story
- Replace placeholder logo in `Header.tsx` with your actual logo
- Modify the skills list in `About.tsx` to match your expertise
- Update contact information in `Contact.tsx`

## 📱 Features in Detail

### Particle Background
- Interactive particles representing technology (circuits), nature (organic shapes), and magic (sparkles)
- Responsive particle count based on screen size
- Smooth animations with reduced motion support

### Navigation
- Fixed header with smooth scroll navigation
- Hover effects with fairycore sparkle animations
- Mobile-responsive design

### Hero Section
- Three main value propositions with animated cards
- Icons from Lucide React for consistency
- Hover effects with 3D transformations

### About Section
- Personal story and driving force
- Skills showcase with interactive language cards
- Philosophy section emphasizing the tech-nature harmony

### Contact Section
- Animated circuit tree visualization
- Social links with hover effects
- Footer with sustainable messaging

## 🚀 Deployment

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌱 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

*Built with 💚 and sustainable code practices*
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# CircuitSprout
