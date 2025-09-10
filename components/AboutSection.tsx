import { Target, Users, Award, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting partnerships.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description:
      "Rigorous testing and best practices ensure exceptional results.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We respect deadlines and deliver projects on time, every time.",
  },
];

const stats = [
  {
    number: "100+",
    label: "Successful Projects",
    description: "Delivered across various industries",
  },
  {
    number: "50+",
    label: "Happy Clients",
    description: "Trusted partnerships worldwide",
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Always here when you need us",
  },
  {
    number: "5+",
    label: "Years Experience",
    description: "Deep expertise in modern tech",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-jakarta font-bold">
                About{" "}
                <span className="gradient-primary text-gradient">Gotendia</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gotendia is a leading software development company dedicated to
                transforming businesses through innovative technology solutions.
                We specialize in web and mobile development, AI integration, and
                comprehensive digital services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower businesses with cutting-edge
                technology that drives growth, efficiency, and competitive
                advantage in today's digital landscape.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.title} className="space-y-3">
                  <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
                    <value.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className={`p-6 text-center shadow-soft hover:shadow-elegant transition-smooth ${
                    index % 2 === 1 ? "transform translate-y-4" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <div className="text-3xl font-bold gradient-primary text-gradient">
                      {stat.number}
                    </div>
                    <div>
                      <div className="font-jakarta font-semibold text-card-foreground">
                        {stat.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mission Statement Card */}
            <Card className="p-8 gradient-subtle border-0 shadow-soft">
              <div className="space-y-4">
                <h3 className="text-xl font-jakarta font-bold text-card-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  "To bridge the gap between innovative technology and business
                  success, creating digital solutions that not only meet today's
                  needs but anticipate tomorrow's opportunities."
                </p>
                <div className="flex items-center space-x-3 pt-2">
                  <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Gotendia Team
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
