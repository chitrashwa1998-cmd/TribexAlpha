
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Heart, Target, MapPin, Clock, TrendingUp } from "lucide-react";

export default function Career() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center py-20">
              <h1 className="text-5xl font-bold mb-6" data-testid="career-title">
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="career-description">
                Join our growing team of professionals operating live AI-powered trading systems. We're looking for talented individuals who want to be part of our success in the financial markets.
              </p>
            </div>

            {/* Active Trading Notice */}
            <div className="mb-16">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl border border-border">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Active Trading Operations</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    Our AI-powered trading platform is live and operating successfully in the markets. We're now scaling our operations and looking to expand our team with talented individuals who can help us reach the next level of trading excellence.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Company Culture */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Why Tribex Alpha?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-card rounded-3xl border border-border">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Mission-Driven</h3>
                    <p className="text-muted-foreground">
                      Work on technology that democratizes access to sophisticated trading tools and levels the playing field.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card rounded-3xl border border-border">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Rocket className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Innovation First</h3>
                    <p className="text-muted-foreground">
                      Be at the forefront of AI and machine learning applications in financial markets.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card rounded-3xl border border-border">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Work-Life Balance</h3>
                    <p className="text-muted-foreground">
                      We believe in sustainable growth and maintaining a healthy work environment for all team members.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Future Opportunities */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Future Opportunities</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                As we grow, we'll be looking for talented individuals in these areas:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card rounded-3xl border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Engineering</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Full-Stack Developers</li>
                      <li>• Machine Learning Engineers</li>
                      <li>• DevOps Engineers</li>
                      <li>• Backend Developers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card rounded-3xl border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Business & Research</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Quantitative Researchers</li>
                      <li>• Product Managers</li>
                      <li>• Business Development</li>
                      <li>• UX/UI Designers</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact for Interest */}
            <div className="py-16">
              <Card className="bg-gradient-to-r from-primary to-accent rounded-3xl text-white">
                <CardContent className="p-12 text-center">
                  <Users className="w-16 h-16 text-white mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success?</h2>
                  <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
                    We're actively expanding our team as our trading operations grow. If you're passionate about AI, trading, and financial technology, we'd love to hear from you. Send us your resume and let's discuss how you can contribute to our success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                    <div className="flex items-center gap-2 text-white/80">
                      <MapPin className="w-4 h-4" />
                      <span>Bangalore, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Clock className="w-4 h-4" />
                      <span>Full-time</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
