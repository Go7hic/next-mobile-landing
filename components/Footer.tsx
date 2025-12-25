"use client"
import Link from "next/link"
import Image from "next/image"
import { Apple, Instagram, Send, Shield, FileText, Sun, Moon, Monitor } from "lucide-react"
import { appConfig } from "@/config/app.config"
import { useState, useEffect } from "react"

export function Footer() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light")

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

  return (
    <footer className="pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-border">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
        {/* Left side: App branding */}
        <div className="flex-1 w-full md:w-auto">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            {appConfig.app.logo.image ? (
              <Image
                src={appConfig.app.logo.image}
                alt={appConfig.app.logo.alt || appConfig.app.name}
                width={48}
                height={48}
                className="rounded-xl"
              />
            ) : (
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-black">
                <Apple className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-bold text-foreground">{appConfig.app.name}</h3>
          </div>
          <p className="text-xs sm:text-sm max-w-md text-muted-foreground">{appConfig.app.description}</p>
        </div>

        {/* Right side: Theme toggle */}
        <div className="flex gap-2 bg-muted rounded-xl p-1.5">
          <button
            onClick={() => setTheme("light")}
            className={`p-2.5 rounded-lg transition-colors ${
              theme === "light" ? "bg-card shadow-sm" : "hover:bg-card/50"
            }`}
          >
            <Sun className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`p-2.5 rounded-lg transition-colors ${
              theme === "dark" ? "bg-card shadow-sm" : "hover:bg-card/50"
            }`}
          >
            <Moon className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => setTheme("system")}
            className={`p-2.5 rounded-lg transition-colors ${
              theme === "system" ? "bg-card shadow-sm" : "hover:bg-card/50"
            }`}
          >
            <Monitor className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Social links */}
        <div className="flex items-center gap-2 order-1 md:order-none">
          {appConfig.footer.socialLinks.instagram && (
            <a
              href={appConfig.footer.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-muted rounded-lg hover:bg-accent transition-colors"
            >
              <Instagram className="h-5 w-5 text-foreground" />
            </a>
          )}
          {appConfig.footer.socialLinks.telegram && (
            <a
              href={appConfig.footer.socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-muted rounded-lg hover:bg-accent transition-colors"
            >
              <Send className="h-5 w-5 text-foreground" />
            </a>
          )}
          {appConfig.footer.socialLinks.twitter && (
            <a
              href={appConfig.footer.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-muted rounded-lg hover:bg-accent transition-colors"
            >
              <svg className="h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-muted-foreground order-3 md:order-none text-center md:text-left">{appConfig.footer.copyright}</div>

        {/* Legal links */}
        <div className="flex items-center gap-3 sm:gap-4 order-2 md:order-none">
          {appConfig.footer.legalLinks.privacy && (
            <>
              <Link
                href={appConfig.footer.legalLinks.privacy}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Shield className="h-4 w-4" />
                Privacy
              </Link>
              {appConfig.footer.legalLinks.terms && <span className="text-border">•</span>}
            </>
          )}
          {appConfig.footer.legalLinks.terms && (
            <Link
              href={appConfig.footer.legalLinks.terms}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="h-4 w-4" />
              Terms
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}

