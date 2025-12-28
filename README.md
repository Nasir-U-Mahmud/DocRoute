# DocRoute - IRCC Document Preparation Platform

A Next.js landing page for DocRoute, an IRCC document preparation service helping Canadian immigration applicants organize their documents efficiently.

## 🚀 Features

- ✅ Fully responsive design with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Accessible forms with proper ARIA labels
- ✅ Loading states and error handling
- ✅ Google Analytics integration
- ✅ SEO optimized with metadata
- ✅ Success page after form submission
- ✅ Smooth scroll animations
- ✅ Security headers configured
- ✅ Free downloadable IRCC checklist

## 📋 Prerequisites

- Node.js 20.9.0 or higher
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ircc-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.local.example .env.local
```

4. Update the environment variables in `.env.local`:
```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🏃‍♂️ Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
ircc-landing/
├── app/
│   ├── components/
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── LeadForm.tsx
│   │   └── ProblemSection.tsx
│   ├── success/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── analytics.ts
├── public/
│   └── checklist.pdf
├── .env.local
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Colors
The color scheme is defined using Tailwind CSS. Main colors:
- Primary: Blue 600 (#2563eb)
- Background: Slate 900 (#0f172a)
- Text: White and Slate variants

### Content
Update content in individual components:
- Hero text: `app/components/Hero.tsx`
- Problems: `app/components/ProblemSection.tsx`
- Features: `app/components/Features.tsx`
- FAQ: `app/components/FAQ.tsx`

### Form
The form is integrated with Formspree. To change:
1. Update `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`
2. Modify form fields in `app/components/LeadForm.tsx`

## 📊 Analytics

Google Analytics is integrated via `lib/analytics.ts`. Events tracked:
- Page views
- Form submissions
- File downloads
- Outbound links

To enable:
1. Add your GA ID to `.env.local`
2. Uncomment tracking code in components

## 🔒 Security

Security headers are configured in `next.config.ts`:
- HSTS
- X-Frame-Options
- X-Content-Type-Options
- CSP (ready to be configured)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📄 License

This project is private and proprietary.

## 👥 Contact

For questions, contact: contact@docroute.app

## 🙏 Acknowledgments

- Next.js
- Tailwind CSS
- Formspree
- Vercel

---

**Note:** This is a landing page for early access signups. The full document preparation platform is under development.