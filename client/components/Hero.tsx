import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Perfect Event,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  {" "}Flawlessly Executed
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Transform your wedding dreams into reality with our comprehensive event management services. From stunning stage decoration to exquisite catering, we handle every detail.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => scrollToSection("#contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-2xl flex items-center justify-center gap-2 group">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection("#portfolio")} className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Events Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-96 md:h-full md:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20" />
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
              {/* Elegant decoration pattern */}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "rgb(232, 121, 73)", stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: "rgb(139, 70, 134)", stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>
              
              {/* Center composition - elegant floral elements */}
              <circle cx="300" cy="300" r="200" fill="url(#grad1)" />
              
              {/* Decorative elements */}
              <g opacity="0.4" stroke="rgb(232, 121, 73)" strokeWidth="2" fill="none">
                <path d="M 300 100 Q 350 150 300 200 Q 250 150 300 100" />
                <path d="M 500 300 Q 450 350 400 300 Q 450 250 500 300" />
                <path d="M 100 300 Q 150 250 200 300 Q 150 350 100 300" />
                <path d="M 300 500 Q 250 450 300 400 Q 350 450 300 500" />
              </g>
              
              {/* Center decorative elements */}
              <circle cx="300" cy="300" r="120" fill="none" stroke="rgb(232, 121, 73)" strokeWidth="1.5" opacity="0.3" />
              <circle cx="300" cy="300" r="80" fill="none" stroke="rgb(139, 70, 134)" strokeWidth="1.5" opacity="0.4" />
              
              {/* Corner accents */}
              <rect x="20" y="20" width="60" height="60" fill="none" stroke="rgb(255, 193, 7)" strokeWidth="2" opacity="0.3" />
              <rect x="520" y="20" width="60" height="60" fill="none" stroke="rgb(255, 193, 7)" strokeWidth="2" opacity="0.3" />
            </svg>

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-2">Elegantly Designed</h3>
              <p className="text-sm opacity-90">Professional event planning at its finest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
