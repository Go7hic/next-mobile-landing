import Link from "next/link"
import { appConfig } from "@/config/app.config"
import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="mx-auto max-w-4xl bg-card text-card-foreground rounded-3xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">
            <strong>Last updated:</strong> {appConfig.privacy.lastUpdated}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 mb-12">
          {appConfig.privacy.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-2 text-muted-foreground">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">{section.content}</p>
              )}
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground mb-2">Questions? Reach us at:</p>
          <ul className="space-y-1 text-muted-foreground">
            {appConfig.privacy.contact.email && (
              <li>
                <a
                  href={`mailto:${appConfig.privacy.contact.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {appConfig.privacy.contact.email}
                </a>
              </li>
            )}
            {appConfig.privacy.contact.website && (
              <li>
                <a
                  href={`https://${appConfig.privacy.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {appConfig.privacy.contact.website}
                </a>
              </li>
            )}
          </ul>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

