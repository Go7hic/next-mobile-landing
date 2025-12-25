import { LucideIcon } from "lucide-react"
import { Star, Zap, Box } from "lucide-react"

export interface AppConfig {

  app: {
    name: string
    description: string
    logo: {
      image?: string 
      alt?: string
    }
  }

  downloadLinks: {
    appStore?: string
    googlePlay?: string
  }

  
  screenshots: {
    iphone: string[]
    ipad: string[]
  }

  features: Array<{
    icon: LucideIcon
    title: string
    description: string
  }>


  reviews: Array<{
    name: string
    initial: string
    review: string
  }>


  faqs: Array<{
    question: string
    answer: string
  }>


  footer: {
    socialLinks: {
      instagram?: string
      twitter?: string
      telegram?: string
    }
    copyright: string
    legalLinks: {
      privacy?: string
      terms?: string
    }
  }

  privacy: {
    lastUpdated: string
    sections: Array<{
      title: string
      content: string | string[]
    }>
    contact: {
      email?: string
      website?: string
    }
  }

  terms: {
    effectiveDate: string
    sections: Array<{
      title: string
      content: string | string[]
    }>
    contact: {
      email?: string
      address?: string
      phone?: string
    }
  }
}

export const appConfig: AppConfig = {
  app: {
    name: "Your App Name",
    description:
      "Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",
    logo: {
      image: "/app-icon-logo.jpg",
      alt: "App Logo",
    },
  },

  downloadLinks: {
    appStore: "#", 
    googlePlay: "#", 
  },

  screenshots: {
    iphone: ["/iphone-app-screenshot-1.jpg", "/iphone-app-screenshot-2.jpg", "/iphone-app-screenshot-3.jpg"],
    ipad: ["/ipad-app-screenshot-1.jpg", "/ipad-app-screenshot-2.jpg", "/ipad-app-screenshot-3.jpg"],
  },

  features: [
    {
      icon: Star,
      title: "Main Feature",
      description: "Describe your main feature here. What makes it special?",
    },
    {
      icon: Zap,
      title: "Another Feature",
      description: "What else can your app do? Tell users about it here.",
    },
    {
      icon: Box,
      title: "One More Feature",
      description: "Add another key feature of your application here.",
    },
  ],

  reviews: [
    {
      name: "Sarah K.",
      initial: "S",
      review:
        "This app has completely transformed how I manage my daily tasks. The interface is intuitive and the performance is outstanding!",
    },
    {
      name: "James M.",
      initial: "J",
      review:
        "I've tried dozens of similar apps, but this one stands out with its unique features and reliability. Highly recommended!",
    },
    {
      name: "Elena T.",
      initial: "E",
      review:
        "Great app with impressive functionality. The recent update made it even better. Just a few minor UI improvements would make it perfect.",
    },
    {
      name: "Michael R.",
      initial: "M",
      review:
        "Customer support is exceptional. Had an issue and they resolved it within hours. The app itself is fantastic too!",
    },
  ],

  faqs: [
    {
      question: "Question 1?",
      answer: "Answer to question 1 goes here.",
    },
    {
      question: "Question 2?",
      answer: "Answer to question 2 goes here.",
    },
  ],

  footer: {
    socialLinks: {
      instagram: "#",
      twitter: "https://x.com/Go7hic",
      telegram: "#",
    },
    copyright: "© 2025 All rights reserved.",
    legalLinks: {
      privacy: "/privacy",
      terms: "/terms",
    },
  },

  privacy: {
    lastUpdated: "February 1, 2025",
    sections: [
      {
        title: "Data Collection",
        content: [
          "Anonymous usage metrics",
          "App performance data",
          "Device information",
          "Error reports",
        ],
      },
      {
        title: "Data Usage",
        content: [
          "Improve app performance",
          "Fix technical issues",
          "Enhance features",
          "Optimize experience",
        ],
      },
      {
        title: "Security Measures",
        content: [
          "Encryption protocols",
          "Regular security checks",
          "Secure storage systems",
        ],
      },
      {
        title: "Data Sharing Policy",
        content: [
          "We do not sell your data. We share data only:",
          "With essential services",
          "When legally required",
          "When you request it",
        ],
      },
      {
        title: "User Rights",
        content: [
          "View your data",
          "Delete your data",
          "Stop analytics",
          "Download your data",
        ],
      },
      {
        title: "Policy Updates",
        content: "We will notify you of policy changes through our app or email.",
      },
    ],
    contact: {
      email: "privacy@example.com",
      website: "help.example.com",
    },
  },

  terms: {
    effectiveDate: "February 1, 2025",
    sections: [
      {
        title: "Acceptance",
        content: "By using this service, you agree to these terms.",
      },
      {
        title: "Account Rules",
        content: [
          "Provide accurate information",
          "Keep your account secure",
          "One account per person",
          "We may terminate accounts that violate terms",
        ],
      },
      {
        title: "Billing",
        content: [
          "Prices in USD",
          "Auto-renewal enabled",
          "Cancel anytime",
          "No partial refunds",
        ],
      },
      {
        title: "Usage Rules",
        content: [
          "Do not:",
          "Break laws",
          "Infringe copyrights",
          "Share harmful content",
          "Hack or disrupt service",
        ],
      },
      {
        title: "Content Policy",
        content: [
          "No uploading of:",
          "Illegal materials",
          "Harmful content",
          "Spam",
          "Malware",
        ],
      },
      {
        title: "Legal Notes",
        content: [
          "We own app content",
          "You own your content",
          "Service provided \"as is\"",
          "No uptime guarantee",
        ],
      },
    ],
    contact: {
      email: "legal@example.com",
      address: "123 Tech Street, Suite 100",
      phone: "(555) 123-4567",
    },
  },
}

