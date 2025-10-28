import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const waNumber = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.replace(/[^\d]/g, "");
      if (waNumber) {
        const lines = [
          `New enquiry from ${formData.name}`,
          formData.email ? `Email: ${formData.email}` : undefined,
          formData.phone ? `Phone: ${formData.phone}` : undefined,
          formData.eventDate ? `Event Date: ${formData.eventDate}` : undefined,
          formData.eventType ? `Event Type: ${formData.eventType}` : undefined,
          formData.message ? `Message: ${formData.message}` : undefined,
        ].filter(Boolean) as string[];
        const text = encodeURIComponent(lines.join("\n"));
        const waUrl = `https://wa.me/${waNumber}?text=${text}`;
        window.open(waUrl, "_blank");
      } else {
        const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
        if (endpoint) {
          const resp = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          if (!resp.ok) throw new Error(`Request failed: ${resp.status}`);
        } else {
          // Fallback: simulate form submission
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
      toast.success("Thank you! We'll be in touch shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "9715042917" +" 6385642082",
    },
    {
      icon: Mail,
      label: "Email",
      value: "bluedays@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Athencode, Padanthalmoodu, India",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's Plan Your Event
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to discuss your vision and booking details
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.label}</h3>
                {info.label === "Phone" ? (
                  <div className="space-y-1">
                    {(
                      Array.isArray(info.value)
                        ? info.value
                        : String(info.value)
                            .split(/[\s,]+/)
                            .filter(Boolean)
                    ).map((num, i) => (
                      <a
                        key={i}
                        href={`tel:${String(num).replace(/[^+\d]/g, "")}`}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Celebration</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tell us about your vision
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your event, ideas, budget, or any special requests..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </div>
          </form>

          {/* Form Note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            We'll get back to you within 24 hours with available consultation times.
          </p>
        </div>
      </div>
    </section>
  );
}
