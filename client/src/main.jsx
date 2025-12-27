import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        
        :root {
          --color-white: #FFFFFF;
          --color-charcoal: #1A1A1A;
          --color-red: #DC2626;
          --color-gray: #6B7280;
          
          --primary: 0 84.2% 60.2%;
          --accent: 0 84.2% 60.2%;
          --charcoal: 0 0% 10%;
          --gray: 220 9% 46%;
          
          --gradient-primary: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
          --gradient-dark: linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%);
          --gradient-red-radial: radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 50%);
          
          --shadow-red: 0 10px 40px rgba(220, 38, 38, 0.3);
          --shadow-glow: 0 0 30px rgba(220, 38, 38, 0.5);
          --shadow-glass: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          
          --font-heading: 'Montserrat', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }
        
        * {
          font-family: var(--font-body);
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-heading);
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .glass-white {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .glow-red:hover {
          box-shadow: var(--shadow-glow);
          transition: box-shadow 0.3s ease;
        }
      `}</style>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  </>
  
)
