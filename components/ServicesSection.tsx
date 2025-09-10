import { Code, Smartphone, Brain, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development Solutions",
    description:
      "From responsive websites to complex web applications, we deliver cutting-edge solutions that drive your business forward.",
    features: [
      "React & Next.js",
      "Full-stack Development",
      "E-commerce Solutions",
      "Performance Optimization",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Create engaging mobile experiences with our expert team. iOS, Android, and cross-platform development.",
    features: [
      "Native iOS & Android",
      "React Native",
      "Flutter Development",
      "App Store Optimization",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & IoT Integration",
    description:
      "Transform your business with intelligent IoT solutions and AI-powered automation.",
    features: [
      "Machine Learning",
      "IoT Development",
      "AI Automation",
      "Data Analytics",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Brand & Design",
    description:
      "From brand identity to event execution, we create memorable experiences that resonate with your audience.",
    features: [
      "Brand Identity",
      "UI/UX Design",
      "Event Management",
      "Digital Marketing",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-jakarta font-bold">
            Our <span className="gradient-primary text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
            and digital transformation goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 shadow-soft hover:shadow-elegant transition-smooth group cursor-pointer border-0"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <service.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-jakarta font-bold text-card-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent-foreground hover:bg-accent group p-0"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
