# Portfolio (Next.js + Tailwind CSS)

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
```

## Placeholder replace korbe jekhane
| Ki | Kothay |
|---|---|
| Naam, designation, email, phone, WhatsApp, social links | `data/portfolio.ts` → `profile` |
| About text, hobbies | `data/portfolio.ts` → `about` |
| Skills ar level (%) | `data/portfolio.ts` → `skills` |
| Education / Experience | `data/portfolio.ts` → `education`, `experience` (experience na thakle `[]` rakho) |
| Projects (naam, stack, live link, GitHub, challenges, future plans) | `data/portfolio.ts` → `projects` |
| Tomar photo | `public/images/photo.svg` bodle `photo.jpg` rakho, then `profile.photo` update koro |
| Project screenshot | `public/images/` e image rakho, `projects[].image` update koro |
| Resume | `public/resume.pdf` replace koro |

## Deploy (Vercel)
1. GitHub-e repo toiri kore code push koro
2. vercel.com → Add New Project → repo import → Deploy
3. Live link khule check koro (navbar, resume download, 3 ta project details page)
