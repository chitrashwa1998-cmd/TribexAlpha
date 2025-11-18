
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Users, Award, BarChart3, Brain, Shield, Zap, Rocket, Code2, TestTube } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Building next-generation AI-driven trading solutions with cutting-edge technology and research."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Transparency",
      description: "Developing with openness about our journey, challenges, and progress as we build the future of trading."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering superior results through meticulous development and continuous iteration."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Agility",
      description: "Moving fast, learning quickly, and adapting our approach based on real market feedback and data."
    }
  ];

  const milestones = [
    { phase: "Research", status: "Completed", description: "Market analysis and technology research" },
    { phase: "MVP Development", status: "Completed", description: "Core platform and AI models" },
    { phase: "Live Trading", status: "Active", description: "Operating live trading systems" },
    { phase: "Scaling Operations", status: "In Progress", description: "Expanding trading capabilities and volume" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Live Trading Operations
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="about-title">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Tribex Alpha
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="about-description">
                We are a dynamic trading firm operating advanced AI-powered proprietary trading technology. Our intelligent systems are actively trading in financial markets, revolutionizing how market analysis and trade execution are performed at institutional scale.
              </p>
            </div>

            {/* Current Operations Banner */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 mb-16 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Active Trading Operations</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our AI-powered trading platform is live and operating successfully in the markets. We've moved beyond the MVP stage and are now actively trading with our sophisticated algorithms, processing real-time market data, and executing trades at institutional scale.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <Card className="bg-card rounded-3xl border border-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Target className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To leverage sophisticated AI-powered trading technology to achieve superior market performance while continuously advancing our algorithmic capabilities. Our live trading systems analyze market patterns and execute trades with institutional-grade precision and efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card rounded-3xl border border-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <BarChart3 className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To establish ourselves as a premier AI-powered trading firm, continuously scaling our operations and refining our technology to achieve consistent market outperformance. We are actively shaping the future where intelligent automation delivers superior trading results.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Operations Roadmap */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Journey</h2>
              <div className="grid lg:grid-cols-4 gap-6">
                {milestones.map((milestone, index) => (
                  <Card key={index} className="bg-card rounded-3xl border border-border">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        milestone.status === 'Completed' ? 'bg-green-500/20 text-green-500' :
                        milestone.status === 'Active' ? 'bg-primary/20 text-primary' :
                        milestone.status === 'In Progress' ? 'bg-accent/20 text-accent' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{milestone.phase}</h3>
                      <div className={`text-sm font-medium mb-2 ${
                        milestone.status === 'Completed' ? 'text-green-500' :
                        milestone.status === 'Active' ? 'text-primary' :
                        milestone.status === 'In Progress' ? 'text-accent' :
                        'text-muted-foreground'
                      }`}>
                        {milestone.status}
                      </div>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Our Technology */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Live Technology Stack</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="bg-card rounded-3xl border border-border">
                  <CardContent className="p-8 text-center">
                    <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4">AI Trading Engine</h3>
                    <p className="text-muted-foreground">
                      Our live machine learning models actively process market data, identify profitable patterns, and generate trading signals with proven accuracy and ultra-low latency execution.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card rounded-3xl border border-border">
                  <CardContent className="p-8 text-center">
                    <Code2 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4">Trading Platform</h3>
                    <p className="text-muted-foreground">
                      Our operational trading platform provides real-time market analysis, continuous strategy optimization, and seamless automated trade execution across multiple markets.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card rounded-3xl border border-border">
                  <CardContent className="p-8 text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4">Risk Management</h3>
                    <p className="text-muted-foreground">
                      Advanced risk controls and portfolio management systems actively protect our capital while systematically identifying and capitalizing on profitable trading opportunities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Core Values</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="bg-card rounded-3xl border border-border">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        {value.icon}
                        <div>
                          <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Solo Founder & Technology */}
            <div className="bg-secondary rounded-3xl p-12 text-center">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Building with Purpose</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                As a solo founder, I combine deep expertise in financial markets, machine learning, and software engineering. I've successfully deployed this technology in live markets and continue to refine the systems for optimal performance. My passion drives me to push the boundaries of what's possible in algorithmic trading while maintaining the highest standards of execution and risk management.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
