# Next.js Mobile App Landing Page

A modern, customizable landing page template for mobile applications built with Next.js, TypeScript, and Tailwind CSS. This template provides a complete solution for showcasing your mobile app with a beautiful, responsive design and easy configuration.


## Features

- 🎨 **Modern UI Design** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🌓 **Theme Support** - Light, dark, and system theme modes
- ⚙️ **Configuration-Based** - All content managed through a single config file
- 🚀 **Next.js 16** - Built with the latest Next.js features
- 💎 **TypeScript** - Full type safety throughout the project
- 🎯 **SEO Ready** - Optimized for search engines
- 📄 **Legal Pages** - Built-in Privacy Policy and Terms of Service pages

## Project Structure

```
next-mobile-landing/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   ├── privacy/           # Privacy Policy page
│   └── terms/             # Terms of Service page
├── components/            # React components
│   ├── Footer.tsx         # Shared footer component
│   └── ui/                # UI component library
├── config/                # Configuration files
│   └── app.config.ts      # Main app configuration
├── public/                # Static assets
│   ├── app-icon-logo.jpg  # App logo
│   └── *-screenshot-*.jpg  # App screenshots
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd next-mobile-landing
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

All content is managed through the `config/app.config.ts` file. Simply edit this file to customize your landing page.

### Basic App Information

```typescript
app: {
  name: "Your App Name",
  description: "Your app description here...",
  logo: {
    image: "/app-icon-logo.jpg",  // Path to your logo image
    alt: "App Logo",
  },
}
```

### Download Links

```typescript
downloadLinks: {
  appStore: "https://apps.apple.com/app/your-app",     // App Store URL
  googlePlay: "https://play.google.com/store/apps/...", // Google Play URL
}
```

### Screenshots

Add your app screenshots to the `public/` directory and reference them:

```typescript
screenshots: {
  iphone: [
    "/iphone-app-screenshot-1.jpg",
    "/iphone-app-screenshot-2.jpg",
    "/iphone-app-screenshot-3.jpg",
  ],
  ipad: [
    "/ipad-app-screenshot-1.jpg",
    "/ipad-app-screenshot-2.jpg",
    "/ipad-app-screenshot-3.jpg",
  ],
}
```

### Features

Customize your app features with icons from [Lucide React](https://lucide.dev):

```typescript
features: [
  {
    icon: Star,  // Import from lucide-react
    title: "Feature Title",
    description: "Feature description...",
  },
  // Add more features...
]
```

### User Reviews

```typescript
reviews: [
  {
    name: "John Doe",
    initial: "J",
    review: "Great app! Highly recommended.",
  },
  // Add more reviews...
]
```

### FAQ

```typescript
faqs: [
  {
    question: "How do I get started?",
    answer: "Simply download the app and follow the setup instructions.",
  },
  // Add more FAQs...
]
```

### Footer & Social Links

```typescript
footer: {
  socialLinks: {
    instagram: "https://instagram.com/yourhandle",
    twitter: "https://twitter.com/yourhandle",
    telegram: "https://t.me/yourchannel",
  },
  copyright: "© 2025 Your Company. All rights reserved.",
  legalLinks: {
    privacy: "/privacy",
    terms: "/terms",
  },
}
```

### Privacy Policy & Terms

The Privacy Policy and Terms of Service pages are also configurable:

```typescript
privacy: {
  lastUpdated: "February 1, 2025",
  sections: [
    {
      title: "Data Collection",
      content: [
        "Anonymous usage metrics",
        "App performance data",
        // ...
      ],
    },
    // Add more sections...
  ],
  contact: {
    email: "privacy@example.com",
    website: "help.example.com",
  },
}

terms: {
  effectiveDate: "February 1, 2025",
  sections: [
    {
      title: "Acceptance",
      content: "By using this service, you agree to these terms.",
    },
    // Add more sections...
  ],
  contact: {
    email: "legal@example.com",
    address: "123 Tech Street, Suite 100",
    phone: "(555) 123-4567",
  },
}
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize colors, fonts, and other design tokens in `app/globals.css` or by modifying the Tailwind configuration.

### Adding New Sections

To add new sections to the landing page:

1. Add the section configuration to `config/app.config.ts`
2. Update the interface in `config/app.config.ts`
3. Add the section component to `app/page.tsx`

### Icons

Icons are provided by [Lucide React](https://lucide.dev). Browse available icons and import them as needed:

```typescript
import { IconName } from "lucide-react"
```

## Building for Production

```bash
pnpm build
# or
npm run build
```

Start the production server:

```bash
pnpm start
# or
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Or any Node.js hosting service

## Pages

- `/` - Main landing page
- `/privacy` - Privacy Policy page
- `/terms` - Terms of Service page

## Technologies Used

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Radix UI](https://www.radix-ui.com/) - UI primitives

## License

This project is open source and available under the [MIT License](LICENSE).


## Acknowledgments

This project is a Next.js port of the original [mobile-landing](https://github.com/bohd4nx/mobile-landing) project created by [@bohd4nx](https://github.com/bohd4nx). The original project was built with Astro and served as the design inspiration and foundation for this Next.js version.

