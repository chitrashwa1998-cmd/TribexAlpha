import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart3, Bot, Shield, Gauge, Smartphone, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Historical Data Training",
    description: "Train sophisticated ML models using extensive historical market data from Indian exchanges to identify patterns and optimize trading strategies.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: BarChart3,
    title: "Indian Market Analysis",
    description: "Specialized analysis for NSE and BSE instruments including Nifty, Bank Nifty, and sectoral indices with real-time tick data processing.",
    iconColor: "text-accent",
    bgColor: "bg-accent/10 group-hover:bg-accent/20",
  },
  {
    icon: Bot,
    title: "Live Predictions Module",
    description: "Real-time trading signals generated from trained ML models processing live tick data with high-frequency predictions.",
    iconColor: "text-yellow-400",
    bgColor: "bg-yellow-400/10 group-hover:bg-yellow-400/20",
  },
  {
    icon: Shield,
    title: "Black-Scholes Valuation",
    description: "Advanced options pricing using Black-Scholes models with real-time Greeks calculation for precise option valuation and strategy optimization.",
    iconColor: "text-red-400",
    bgColor: "bg-red-400/10 group-hover:bg-red-400/20",
  },
  {
    icon: Gauge,
    title: "ML Model Signals",
    description: "Multiple machine learning models working in parallel to generate buy/sell signals based on pattern recognition and market microstructure analysis.",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-400/10 group-hover:bg-purple-400/20",
  },
  {
    icon: Smartphone,
    title: "Order Book Flow",
    description: "Advanced order book analysis to identify institutional flow patterns and market sentiment shifts through real-time trading activity monitoring.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-400/10 group-hover:bg-blue-400/20",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="features-title">
            Advanced ML-Driven
            <span className="gradient-text-animate inline-block">
              {" "}Trading Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="features-description">
            Harness historical data training, real-time tick processing, and advanced options pricing
            to generate precise trading signals for Indian markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card rounded-2xl hover:border-primary/50 transition-all duration-300 group"
              data-testid={`feature-card-${index}`}
            >
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 transition-colors`}>
                  <feature.icon className={`${feature.iconColor} text-xl`} />
                </div>
                <h3 className="text-xl font-bold mb-4" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('technology');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="flex items-center text-primary font-medium text-sm cursor-pointer hover:underline transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
