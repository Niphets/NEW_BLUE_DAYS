import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & Michael",
      title: "Wedding - June 2024",
      content:
        "EventElegance made our wedding day absolutely perfect. Every detail was executed flawlessly, from the stunning stage decoration to the incredible catering. Our guests are still talking about it!",
      rating: 5,
      initials: "SM",
      color: "from-primary to-secondary",
    },
    {
      name: "Priya Sharma",
      title: "Corporate Event - May 2024",
      content:
        "Professional, creative, and incredibly reliable. They transformed our venue into something spectacular. The team's attention to detail and problem-solving abilities were outstanding.",
      rating: 5,
      initials: "PS",
      color: "from-secondary to-accent",
    },
    {
      name: "David & Emma",
      title: "Wedding Reception - April 2024",
      content:
        "From the initial consultation to the final moment of our reception, EventElegance demonstrated excellence. Their catering was world-class and the decorations were absolutely breathtaking.",
      rating: 5,
      initials: "DE",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from couples and event organizers who trusted us with their special moments
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Accent corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${testimonial.color} opacity-5 rounded-bl-full`} />

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground mt-2">Happy Couples</div>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-4xl font-bold text-secondary">98%</div>
            <div className="text-sm text-muted-foreground mt-2">Satisfaction Rate</div>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-4xl font-bold text-accent">1000+</div>
            <div className="text-sm text-muted-foreground mt-2">Guests Served</div>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-4xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground mt-2">Years Active</div>
          </div>
        </div>
      </div>
    </section>
  );
}
