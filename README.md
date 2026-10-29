# Moriam Chowdhury | Portfolio

A responsive personal portfolio website showcasing my skills, education, and projects. Built with Next.js and Tailwind CSS.

**Live Site:** https://portfolio-2sct.vercel.app/

## Features

- Sticky navbar with smooth scrolling and a mobile hamburger menu
- Hero section with a downloadable resume and social links (GitHub, LinkedIn, Facebook)
- About, Skills, and Education sections
- Project cards with a dedicated details page for each project
- Contact section with email, phone, and WhatsApp links
- Fully responsive on mobile, tablet, and desktop

## Projects

| Project | Description | Tech Stack |
|---|---|---|
| **Bazardor (বাজার দর)** | Price-tracking web app with authentication and a database | Next.js, Tailwind CSS, MongoDB, Better Auth |
| **FitLog** | Workout library to browse, filter, and view exercise details | Next.js, TypeScript, Tailwind CSS |
| **Movie Explorer** | Movie search app with cards and a details modal (TVMaze API) | React, Vite, Tailwind CSS, REST API |

Each project has its own details page (`/projects/[id]`) with the tech stack, description, live link, GitHub link, challenges faced, and future improvements.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Project Structure

```
app/
  page.tsx                 # Home page (all sections)
  projects/[id]/page.tsx   # Project details page
components/                # Navbar, Hero, About, Skills, Education,
                           # Experience, Projects, Contact, Footer
data/portfolio.ts          # All portfolio content in one file
public/                    # Images and resume.pdf
```

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Installation

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
npm start
```

## Customization

All content lives in `data/portfolio.ts`. Edit this file to update:

- Name, designation, email, phone, WhatsApp, and social links
- About text, skills, and education
- Projects (name, stack, live link, GitHub link, challenges, future plans)

To replace the resume, put your PDF at `public/resume.pdf`. To replace images, add them to `public/images/`.

## Deployment

1. Push the code to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import the repository and click **Deploy**.

## Contact


- **GitHub:** https://github.com/MoriamChowdhury


## License

This project is for personal and educational use.