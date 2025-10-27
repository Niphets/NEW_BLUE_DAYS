import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: ["Stage Decoration", "Stall Making", "Catering", "Full Planning"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Portfolio", "Testimonials", "Blog"],
    },
    {
      title: "Support",
      links: ["Contact Us", "FAQ", "Privacy Policy", "Terms of Service"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">EventElegance</span>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              Creating unforgettable moments with professional event management and elegant design solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/40 text-background transition-colors flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-background/70 text-sm flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-primary text-primary" />
            <span>for your special moments | © {currentYear} EventElegance</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
