# Bright Future Academy - 3D School Website

A modern, interactive educational website featuring 3D animations and smooth scrolling effects built with HTML, CSS, and JavaScript.


## Overview

Bright Future Academy is a responsive school website showcasing modern web development techniques with 3D transformations, parallax effects, and smooth animations. The site includes sections for school information, academic programs, faculty profiles, and contact details.

## ✨ Features

### Interactive Elements
- **3D Animations**: Utilizes GSAP (GreenSock Animation Platform) for advanced animations
- **Parallax Effects**: Mouse movement creates subtle 3D perspective shifts
- **Scroll-triggered Animations**: Content animates as you scroll through the page
- **Hover Effects**: Interactive cards with 3D transformations on hover
- **Floating Background Elements**: Dynamic shapes that float in the background

### Sections
1. **Hero Section**: Eye-catching landing area with call-to-action button
2. **About Section**: School information and philosophy
3. **Programs Section**: Showcase of academic offerings (STEM, Arts, Athletics)
4. **Faculty Section**: Profiles of key staff members
5. **Contact Section**: Location details, contact information, and message form
6. **Navigation**: Fixed header with smooth scrolling to sections

### Design Elements
- Modern gradient color scheme
- Glassmorphism design principles
- Responsive layout for all device sizes
- Interactive buttons with ripple effects
- Smooth transitions and animations

## Live Demo
Wanna see it in action? Check out the live demo here (👇):

- **[Future Bright Academy]( https://haseebjaved4212.github.io/Modern-School-Website/)**
## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: 
  - Flexbox and Grid layouts
  - Custom properties (variables)
  - 3D Transforms and transitions
  - Responsive media queries
- **JavaScript**: 
  - GSAP library for animations
  - DOM manipulation
  - Event handling
- **External Libraries**:
  - [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
  - [GSAP ScrollTrigger Plugin](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

## Project Structure

```tree 
Future-Bright-Academy/
├── index.html # Main HTML file
├── style.css # Stylesheet with 3D effects
├── script.js # JavaScript for animations and interactions
└── README.md # This file
```

## Setup Instructions

1. Clone or download the repository
2. Open `index.html` in your web browser
3. No build process required - works directly in the browser
4. For development, you can use any local server (e.g., Live Server extension in VS Code)

### Dependencies
The project requires an internet connection to load external libraries:
- GSAP CDN: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
- ScrollTrigger CDN: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js`

## Customization

### Colors
Modify the CSS variables in `style.css` to change the color scheme:
```css
:root {
    --primary: #4a6fa5;
    --secondary: #ff6b6b;
    --accent: #ffd166;
    --dark: #2c3e50;
    --light: #f8f9fa;
}
```
## Content

Edit the `index.html` file to update:
- School name and tagline
- About section content
- Program descriptions
- Faculty information
- Contact details
- Animations
- Adjust animation parameters in script.js:
- Duration values
- Delay values
- Easing functions
- Trigger positions
- Parallax intensity
- Contributing
- Fork the repository
- Create a feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a pull request
## License
This project is open source and available for educational and non-commercial purposes.

## Acknowledgments

- **GSAP** for powerful animation capabilities.
- Inspiration from modern educational website designs.
- Icons from native emoji set for cross-platform compatibility.
--- 
