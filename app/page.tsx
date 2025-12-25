"use client"
import {
  Apple,
  Star,
  Smartphone,
  Tablet,
  ChevronDown,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { appConfig } from "@/config/app.config"
import { Footer } from "@/components/Footer"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"iphone" | "ipad">("iphone")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light")
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  // Handle screenshot scroll for mobile
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const itemWidth = container.querySelector("div")?.offsetWidth || 0
      const gap = 16 // gap-4 = 16px
      const index = Math.round(scrollLeft / (itemWidth + gap))
      setCurrentScreenshotIndex(Math.min(index, appConfig.screenshots[activeTab].length - 1))
    }

    container.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation
    setCurrentScreenshotIndex(0) // Reset when tab changes
    return () => container.removeEventListener("scroll", handleScroll)
  }, [activeTab])

  const renderLogo = () => {
    if (appConfig.app.logo.image) {
      return (
        <Image
          src={appConfig.app.logo.image}
          alt={appConfig.app.logo.alt || appConfig.app.name}
          width={176}
          height={176}
          className="rounded-3xl"
        />
      )
    }
    // 默认使用 Apple 图标
    return <Apple className="h-28 w-28 text-white" />
  }

  return (
    <div className="min-h-screen bg-background py-4 sm:py-8 px-4">
      <div className="mx-auto max-w-5xl bg-card text-card-foreground rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-8 md:p-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Left side: App Icon */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="flex h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 items-center justify-center rounded-2xl sm:rounded-3xl shadow-md">
                {renderLogo()}
              </div>
            </div>

            {/* Right side: Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{appConfig.app.name}</h1>
              <p className="mb-6 text-base sm:text-lg leading-relaxed text-muted-foreground">{appConfig.app.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                {appConfig.downloadLinks.appStore && (
                  <a
                    href={appConfig.downloadLinks.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-4 py-2 bg-card border border-border rounded-xl hover:bg-accent transition-colors"
                  >
                    <svg className="h-6 w-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Download on the</div>
                      <div className="text-base font-semibold text-foreground">App Store</div>
                    </div>
                  </a>
                )}
                {appConfig.downloadLinks.googlePlay && (
                  <a
                    href={appConfig.downloadLinks.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-4 py-2 bg-card border border-border rounded-xl hover:bg-accent transition-colors"
                  >
                    <svg className="h-6 w-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Get it on</div>
                      <div className="text-base font-semibold text-foreground">Google Play</div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold text-foreground">Screenshots</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("iphone")}
                className={`flex items-center gap-2 px-3 py-2 sm:px-4 rounded-lg border transition-colors ${
                  activeTab === "iphone"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:border-foreground/40"
                }`}
              >
                <Smartphone className="h-4 w-4" />
                <span className="text-sm font-medium">iPhone</span>
              </button>
              <button
                onClick={() => setActiveTab("ipad")}
                className={`flex items-center gap-2 px-3 py-2 sm:px-4 rounded-lg border transition-colors ${
                  activeTab === "ipad"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:border-foreground/40"
                }`}
              >
                <Tablet className="h-4 w-4" />
                <span className="text-sm font-medium">iPad</span>
              </button>
            </div>
          </div>
          {/* Mobile: Horizontal scrollable carousel */}
          <div className="sm:hidden mb-4">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {appConfig.screenshots[activeTab].map((src, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 snap-center ${
                    activeTab === "iphone" ? "w-[280px] aspect-[9/19]" : "w-[360px] aspect-[4/3]"
                  }`}
                >
                  <Image src={src} alt={`Screenshot ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            {/* Scroll indicators */}
            <div className="flex gap-1.5 justify-center mt-4">
              {appConfig.screenshots[activeTab].map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentScreenshotIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Desktop: Grid layout */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-4 mb-4">
            {appConfig.screenshots[activeTab].map((src, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 transition-all ${
                  activeTab === "iphone" ? "aspect-[9/19]" : "aspect-[4/3]"
                }`}
              >
                <Image src={src} alt={`Screenshot ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          {/* Desktop indicators */}
          <div className="hidden sm:flex gap-1 justify-center">
            {appConfig.screenshots[activeTab].map((_, index) => (
              <div key={index} className="h-1 w-24 bg-border rounded-full" />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-foreground">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {appConfig.features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="p-6 bg-card border border-border rounded-2xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    <IconComponent className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-foreground">User Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appConfig.reviews.map((review, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-2xl">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-base font-semibold text-foreground">
                      {review.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.review}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-foreground">FAQ</h2>
          <div className="space-y-3">
            {appConfig.faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent transition-colors"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-foreground transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  )
}
