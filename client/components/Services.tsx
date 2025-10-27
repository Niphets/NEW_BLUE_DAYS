import { Heart, Users, Utensils, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Stage Decoration",
      description: "Transform your venue with elegant stage designs that capture the essence of your special day.",
    },
    {
      icon: Sparkles,
      title: "Stall Making",
      description: "Creative booth designs and installations that enhance your event's interactive experience.",
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Exquisite culinary creations and professional service to delight your guests.",
    },
    {
      icon: Users,
      title: "Full Planning",
      description: "Complete event management from concept to execution with attention to every detail.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event management solutions tailored to make your wedding day unforgettable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Accent line on hover */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">On-Time Delivery</div>
            <p className="text-muted-foreground">We respect your schedule and deliver everything on time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">Budget Friendly</div>
            <p className="text-muted-foreground">Competitive pricing without compromising on quality</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">Custom Solutions</div>
            <p className="text-muted-foreground">Personalized services tailored to your unique vision</p>
          </div>
        </div>
      </div>
    </section>
  );
}
