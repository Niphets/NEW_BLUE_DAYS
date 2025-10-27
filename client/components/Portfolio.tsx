import { useState } from "react";
import { Eye, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Events" },
    { id: "wedding", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "decor", label: "Decoration" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Grand Wedding Reception",
      category: "wedding",
      image: "🎊",
      description: "Elegant stage setup with floral decorations",
    },
    {
      id: 2,
      title: "Corporate Gala Event",
      category: "corporate",
      image: "🎭",
      description: "Professional booth installations and setup",
    },
    {
      id: 3,
      title: "Outdoor Wedding Ceremony",
      category: "wedding",
      image: "💐",
      description: "Beautiful natural backdrop with decorations",
    },
    {
      id: 4,
      title: "Stage Decoration Showcase",
      category: "decor",
      image: "✨",
      description: "Stunning LED and floral stage design",
    },
    {
      id: 5,
      title: "Catering Setup",
      category: "corporate",
      image: "🍽️",
      description: "Professional food service stations",
    },
    {
      id: 6,
      title: "Premium Stall Design",
      category: "decor",
      image: "🎪",
      description: "Creative booth with interactive elements",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and event setups that showcase our expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                  : "bg-card border border-border text-foreground hover:border-primary/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card h-64 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-primary/50 animate-fade-in"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-300" />

              {/* Large emoji/icon representation */}
              <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>

              {/* Overlay content - appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4">{item.description}</p>

                <div className="flex items-center gap-2 text-accent font-semibold group-hover:translate-x-1 transition-transform">
                  <Eye className="w-4 h-4" />
                  View Details
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Want to see more of our work? Let's start planning your event today!
          </p>
          <button className="bg-gradient-to-r from-primary via-secondary to-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1">
            Schedule Consultation
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
