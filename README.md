# 🌐 Personal Website  

A responsive portfolio website built using **React.js** to showcase my projects, experience, and skills. I wanted to build a small project that not only highlights my abilities through the website itself but also serves as a platform to showcase the other projects I've been working on. It also provides a way for people to reach out to me and learn a little more about who I am. This website features modern web design, animations, and interactive elements to enhance user engagement and provide a structured portfolio.

**🔗 Deployed Website**  
[View the live website](https://janny801.github.io/personal-website)

## 🧪 Local Development & Deployment

### Start Locally  
```bash
npm install      # Install all dependencies
npm start        # Runs the app in development mode at http://localhost:3000/
```

### Deploy to GitHub Pages  
```bash
npm run deploy
```

- This command automatically runs `npm run build` to create a production-ready build of the app.  
- Then it pushes the build output to the `gh-pages` branch for GitHub Pages deployment.  
- Make sure the `homepage` field in your `package.json` is correctly set:  
  - Example: `"homepage": "https://janny801.github.io/personal-website"`

## 📌 Sections & Features

- **Project Showcase:** Interactive carousel highlighting personal, academic, and hackathon projects with technical learnings, implementation background, and direct repository/demo links. Supports keyboard shortcuts (`J`/`K`) for swift navigation.
- **About Me:** Professional background, internship experiences (NASA Stennis Space Center, SASE Web Dev Officer), education, photos, and a downloadable resume.
- **Contact:** Direct contact options including location, email, phone, LinkedIn, GitHub, and a working contact form powered by **EmailJS**.

## 🛠️ Technologies Used  

- **Frontend:** React.js, JavaScript (ES6+), HTML5, CSS3  
- **Design & Styling:** Custom animations, responsive UI, media queries, keyframe animations  
- **Form Handling:** EmailJS (sends messages directly to my personal email: jred8069@gmail.com)  
- **Build Tools:** npm, Create React App  
- **Deployment:** GitHub Pages  
