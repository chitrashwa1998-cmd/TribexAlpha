import { TrendingUp, Instagram, Linkedin } from "lucide-react";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Career", href: "/career" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/tribex.alpha?igsh=NGdvcGwzZ3NxajBz", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const legalLinks: { label: string; href: string }[] = [];

export default function Footer() {
  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="text-primary-foreground text-sm" />
              </div>
              <span className="text-xl font-bold" data-testid="footer-brand">Tribex Alpha</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
              Advanced electronic trading software powered by machine learning
              for optimal trading performance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                    data-testid={`social-link-${index}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:col-span-2 lg:col-span-2 gap-8 md:gap-12 lg:justify-end">
            {footerSections.map((section, index) => (
              <div key={index} className="flex-1" data-testid={`footer-section-${index}`}>
                <h3 className="font-semibold mb-4" data-testid={`footer-section-title-${index}`}>
                  {section.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="hover:text-foreground transition-colors"
                        data-testid={`footer-link-${index}-${linkIndex}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
            © 2025 Tribex Alpha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
