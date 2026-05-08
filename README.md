# Harpreet Singh — Developer Portfolio

A modern, performant personal portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations, a responsive design, a working contact form, and showcases full-stack projects.

**Live Site →** [harpreet.vercel.app](https://harpreet.vercel.app) *(update with your actual URL)*

---

## ✨ Features

- **Smooth animations** powered by Framer Motion — section reveals, staggered entries, and hover effects
- **Fully responsive** — optimized for mobile, tablet, and desktop
- **Working contact form** via EmailJS — no backend required
- **Glass morphism UI** with a dark theme and custom accent palette
- **Resume download** linked directly from the navbar and hero section
- **Accessible** — semantic HTML, ARIA labels, and keyboard-navigable

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Build Tool | Vite 8 |
| Email | EmailJS |
| Icons | React Icons |
| Fonts | Inter, Space Grotesk |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── assets/              # Images, PDF resume
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/              # Button, Card, Badge (reusable components)
├── data/                # Content — projects.ts, skills.ts, experience.ts
├── styles/              # Global CSS & Tailwind layers
└── types/               # TypeScript interfaces
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 20`
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Harpreet-Singh413/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration

### Contact Form (EmailJS)

The contact form uses [EmailJS](https://emailjs.com) to send emails without a backend.

1. Create a free EmailJS account and set up a service + email template.
2. Open `src/components/sections/Contact.tsx` and replace the credentials:

```ts
const serviceId  = 'your_service_id';
const templateId = 'your_template_id';
const publicKey  = 'your_public_key';
```

### Resume

Drop your resume PDF into `src/assets/` and update the import in `Navbar.tsx` and `Hero.tsx`:

```ts
import RESUME from '../../assets/YOUR_RESUME.pdf';
```

### Content

All portfolio content lives in `src/data/` — no digging through component files needed:

| File | What it controls |
|---|---|
| `projects.ts` | Project cards (title, description, tech, links, image) |
| `skills.ts` | Skill categories and icons |
| `experience.ts` | Timeline entries |

---

## 🎨 Theming

Colors are defined in `tailwind.config.ts`. Swap out the accent palette to make the portfolio your own:

```ts
accent: {
  primary: '#6C63FF',   // purple — change me
  secondary: '#06B6D4', // cyan — change me
},
```

---

## 📦 Deployment

The easiest path is Vercel:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to fork it and build your own portfolio — a credit back is appreciated but not required.

---

*Built by [Harpreet Singh](https://github.com/Harpreet-Singh413)*