import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Database, Cloud, Lock, TrendingUp, DollarSign, Coins, Wheat } from "lucide-react";

const technologyFeatures = [
  {
    icon: Cpu,
    title: "Machine Learning Pipeline",
    description: "Powered by XGBoost ensemble models and scikit-learn with 4 specialized models: Price Movement, Volatility Forecasting, Profit Probability, and Market Reversal detection.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Database,
    title: "Real-Time Data Processing",
    description: "Upstox WebSocket V3 integration with protobuf processing, delivering live tick data with 200-500ms prediction latency and 30-level market depth analysis.",
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Cloud,
    title: "Database Infrastructure",
    description: "PostgreSQL row-based architecture with automatic data recovery, real-time OHLC streaming, and multi-dataset support with connection pooling.",
    iconColor: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Lock,
    title: "Advanced Analytics",
    description: "Orderbook flow confirmation analysis, 25+ technical indicators, Black-Scholes fair value pricing, and real-time volatility forecasting with market depth analysis.",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
];

const financialInstruments = [
  {
    icon: TrendingUp,
    title: "NSE Equities",
    description: "Nifty 50, Nifty Bank, Mid & Small Cap",
    iconColor: "text-primary",
    bgColor: "bg-secondary",
  },
  {
    icon: DollarSign,
    title: "F&O Instruments",
    description: "Index & Stock Futures & Options",
    iconColor: "text-accent",
    bgColor: "bg-secondary",
  },
  {
    icon: Coins,
    title: "Sectoral Indices",
    description: "IT, Pharma, FMCG, Auto Sectors",
    iconColor: "text-yellow-400",
    bgColor: "bg-secondary",
  },
  {
    icon: Wheat,
    title: "BSE Instruments",
    description: "BSE 500, Sensex, BSE Mid Cap",
    iconColor: "text-green-400",
    bgColor: "bg-secondary",
  },
];

const platformStats = [
  { label: "Prediction Models", value: "4", color: "text-accent" },
  { label: "Technical Indicators", value: "25+", color: "text-accent" },
  { label: "Prediction Latency", value: "200-500ms", color: "text-accent" },
  { label: "Market Coverage", value: "NSE & BSE", color: "text-accent" },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="technology-title">
            Cutting-Edge
            <span className="gradient-text-animate inline-block">
              {" "}Technology Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="technology-description">
            Built on enterprise-grade PostgreSQL infrastructure with advanced machine learning models
            and real-time market data integrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Features */}
          <div className="space-y-8">
            {technologyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4" data-testid={`tech-feature-${index}`}>
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className={`${feature.iconColor} text-xl`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`tech-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`tech-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Financial Instruments */}
          <Card className="glass-card rounded-3xl glow-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center" data-testid="instruments-title">
                Supported Financial Instruments
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {financialInstruments.map((instrument, index) => (
                  <Card key={index} className={`text-center p-4 ${instrument.bgColor} rounded-xl`} data-testid={`instrument-${index}`}>
                    <CardContent className="p-0">
                      <instrument.icon className={`${instrument.iconColor} text-3xl mb-3 mx-auto`} />
                      <h4 className="font-semibold mb-2" data-testid={`instrument-title-${index}`}>
                        {instrument.title}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`instrument-description-${index}`}>
                        {instrument.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                {platformStats.map((stat, index) => (
                  <Card key={index} className="bg-secondary rounded-lg" data-testid={`platform-stat-${index}`}>
                    <CardContent className="flex items-center justify-between p-3">
                      <span className="font-medium" data-testid={`stat-label-${index}`}>
                        {stat.label}
                      </span>
                      <span className={`${stat.color} font-bold`} data-testid={`stat-value-${index}`}>
                        {stat.value}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>NSE & BSE Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time Tick Data</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}