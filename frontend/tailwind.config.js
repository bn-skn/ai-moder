/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#1049BD', // Main primary color
          600: '#0e3b99',
          700: '#0b2d73',
          800: '#071f4d',
          900: '#041026',
        },
        secondary: {
          50: '#e6f9ef',
          100: '#ccf3df',
          200: '#99e7bf',
          300: '#66db9f',
          400: '#33cf7f',
          500: '#22C55E', // Main secondary color
          600: '#1b9d4b',
          700: '#147538',
          800: '#0e4e25',
          900: '#072712',
        },
        accent: {
          50: '#fce6e6',
          100: '#f9cccc',
          200: '#f39999',
          300: '#ed6666',
          400: '#e73333',
          500: '#DC2626', // Main accent color
          600: '#b01e1e',
          700: '#851717',
          800: '#590f0f',
          900: '#2c0808',
        },
        dark: '#1a1c2a', // Dark neutral
        light: '#f0f2f5', // Light neutral
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backgroundImage: {
        'tech-pattern': "url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4')",
        'gradient-primary': 'linear-gradient(135deg, #1049BD, #3672DF)',
        'gradient-secondary': 'linear-gradient(135deg, #22C55E, #4ADE80)',
        'gradient-accent': 'linear-gradient(135deg, #DC2626, #EF4444)',
      },
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
};