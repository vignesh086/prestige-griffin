# Prestige Griffin

A modern React.js website for Prestige Griffin - a premier advisory firm providing strategic solutions in finance, banking, technology, defense, and commodities trading.

## Features

- **React 18** with modern hooks and functional components
- **React Router** for client-side navigation
- **Vite** for fast development and optimized production builds
- **AOS (Animate On Scroll)** for smooth scroll animations
- **EmailJS** integration for contact form functionality
- **Responsive Design** with elegant red and gold theme
- **Font Awesome** icons
- **Google Fonts** (Playfair Display & Open Sans)

## Project Structure

```
prestige-griffin/
├── public/           # Static assets
│   └── PG.png       # Company logo
├── src/
│   ├── components/   # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/        # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx       # Main app component with routing
│   ├── main.jsx      # Application entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Technologies Used

- **React** - UI library
- **React Router DOM** - Routing
- **Vite** - Build tool
- **AOS** - Scroll animations
- **EmailJS** - Email service for contact form
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## Pages

- **Home** - Overview of services with animated service boxes
- **About** - Company information and mission
- **Services** - Detailed view of all services offered
- **Contact** - Contact form with EmailJS integration

## Contact Form

The contact form uses EmailJS for email delivery. Make sure the EmailJS service is properly configured with:
- Service ID: `service_lhua6ns`
- Template ID: `template_z53lnqk`
- Public Key: `SMObHLtyNQbqvGQEU`

## License

© 2018 Prestige Griffin. All rights reserved.
