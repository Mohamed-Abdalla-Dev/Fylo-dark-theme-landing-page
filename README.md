# Frontend Mentor - Fylo Dark Theme Landing Page

An atmospheric, responsive dark-theme landing page built as a portfolio project to showcase modern front-end workflow and component-driven architecture. This solution is cloned and optimized from the Frontend Mentor challenge.

---

## 📸 Preview
![preview](/src/assets/images/r2ntg9yanvjruk8rbdxn.webp)

## 🛠️ Tech Stack & Features

- **React (v19+)**: Component-driven architecture using functional components and modern hooks.
- **Tailwind CSS (v4.0)**: Utilizing the new config-free configuration via `@theme` directives directly inside CSS, CSS variables injection, and fluid responsiveness.
- **Vite**: Ultra-fast build tool and development server.
- **React Icons**: Standardized vector icons for scalable UI actions.
- **Google Fonts**: Smooth integration of the 'Raleway' typeface.

---

## 📂 Project Structure & Architecture

The application layout is highly modularized, strictly breaking down every UI segment into its own distinct React component for optimal reusability and scalability.

```text

fylo/
├── public/
│   ├── favicon.png
│   └── images/             
├── src/
│   ├── components/
│   │   ├── FeatureBox.jsx        
│   │   ├── Features.jsx          
│   │   ├── Footer.jsx            
│   │   ├── GetStarted.jsx        
│   │   ├── Header.jsx            
│   │   ├── Landing.jsx           
│   │   ├── StayProductive.jsx    
│   │   ├── Testimonials.jsx      
│   │   └── TestimonialsBox.jsx   
│   ├── pages/
│   │   └── Home.jsx              
│   ├── App.css
│   ├── App.jsx                   
│   ├── index.css                 
│   └── main.jsx                  
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js


```

---

## 💡 Key Learnings from this Project

- **Absolute Layering Layouts**: Perfected floating absolute structures to overlay the `GetStarted` CTA block squarely centered over the footer intersection natively responsive on viewport changes.
- **Tailwind CSS v4 Workflow**: Left behind legacy `tailwind.config.js` setups, learning to utilize pure CSS configuration blocks using custom utility definitions inside `@theme`.
- **Responsive Mobile-First UI**: Structured grids dynamically pivoting from a `grid-cols-1` structure up to standard desktop spacing grids smoothly.

## 🚀 Live Demo & Preview

- **Live Demo Link:** [Insert your hosted link here, e.g., Netlify/Vercel]
