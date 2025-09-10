import { ArrowRight, Code, Smartphone, Brain, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroPattern from "@/assets/hero-pattern.jpg";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, scalable applications",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native & cross-platform",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent automation",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Complete digital identity",
  },
];

export function HeroSection() {
  // handle different bundlers: string or object (Next.js often returns { src, width, height })
  const heroPatternUrl =
    typeof heroPattern === "string" ? heroPattern : heroPattern?.src ?? "";

  // quick dev console (remove later)
  // console.log("heroPattern import:", typeof heroPattern, heroPattern);
  // console.log("resolved heroPatternUrl:", heroPatternUrl);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10 dark:opacity-20 z-0 pointer-events-none"
        style={{
          // make sure the URL is quoted — safer across environments
          backgroundImage: heroPatternUrl
            ? `url("${heroPatternUrl}")`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content (stack above background) */}
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-accent font-medium text-sm">
                  🚀 Modern Development Solutions
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-jakarta font-bold leading-tight">
                Transform Your
                <span className="block gradient-primary text-gradient">
                  Digital Vision
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We craft cutting-edge software solutions that drive innovation,
                enhance user experiences, and accelerate business growth in the
                digital age.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary text-white font-medium group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`p-6 shadow-soft hover:shadow-elegant transition-smooth cursor-pointer group ${
                  index % 2 === 0 ? "transform translate-y-4" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
