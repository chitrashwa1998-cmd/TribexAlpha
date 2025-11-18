import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const chartData = [
  { time: "09:30", price: 150 },
  { time: "10:00", price: 120 },
  { time: "10:30", price: 140 },
  { time: "11:00", price: 100 },
  { time: "11:30", price: 80 },
  { time: "12:00", price: 60 },
  { time: "12:30", price: 40 },
  { time: "13:00", price: 20 },
  { time: "13:30", price: 30 },
];

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="plexus-bg"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="pulse-dot w-2 h-2 bg-accent rounded-full mr-2"></span>
                AI-Powered Trading Platform
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
                Advanced Electronic
                <span className="gradient-text-animate inline-block">
                  {" "}Trading Software
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="hero-description">
                Harness the power of machine learning and multi-instrument analysis to execute perfect trades.
                Tribex Alpha delivers institutional-grade trading technology for modern traders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const element = document.getElementById('features');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-glow"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('technology');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                variant="outline"
                className="glass-card text-foreground px-8 py-4 rounded-lg font-semibold btn-glow"
                data-testid="button-view-technology"
              >
                View Technology
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent" data-testid="stat-models">ML Models</div>
                <div className="text-sm text-muted-foreground">Trained Daily</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent" data-testid="stat-signals">Live Signals</div>
                <div className="text-sm text-muted-foreground">Real-time Predictions</div>
              </div>
            </div>
          </div>

          <div className="relative float-animation">
            <Card className="glass-card rounded-2xl glow-border shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold" data-testid="dashboard-title">Live Trading Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full pulse-dot" style={{ backgroundColor: '#00D9FF' }}></div>
                    <span className="text-sm neon-text" style={{ color: '#00D9FF' }}>Live</span>
                  </div>
                </div>

                <div className="trading-chart rounded-lg p-4 mb-4">
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={chartData}>
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={false} />
                      <YAxis hide />
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke="hsl(217, 91%, 60%)"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Live Predictions</div>
                    <div className="text-lg font-bold text-accent" data-testid="live-predictions">Active</div>
                    <div className="text-xs text-accent">ML + Orderflow</div>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Active Positions</div>
                    <div className="text-lg font-bold" data-testid="active-positions">24</div>
                    <div className="text-xs text-muted-foreground">Indian Markets</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
