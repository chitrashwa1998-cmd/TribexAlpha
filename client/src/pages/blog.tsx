
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center py-20">
              <h1 className="text-5xl font-bold mb-6" data-testid="blog-title">
                Tribex Alpha Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="blog-description">
                Insights, updates, and thought leadership from our team. Stay updated with the latest in AI-powered trading technology.
              </p>
            </div>

            {/* Coming Soon Section */}
            <div className="py-20">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl border border-border">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4" data-testid="coming-soon-title">
                    Blog Coming Soon
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8" data-testid="coming-soon-description">
                    We're currently working on our MVP and will be sharing insights about our development journey, AI/ML innovations, and market analysis. Stay tuned for exciting content!
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="p-6 bg-background rounded-2xl border border-border">
                      <h3 className="font-semibold mb-2">Development Updates</h3>
                      <p className="text-sm text-muted-foreground">Follow our MVP development progress and technical insights</p>
                    </div>
                    <div className="p-6 bg-background rounded-2xl border border-border">
                      <h3 className="font-semibold mb-2">AI & Trading</h3>
                      <p className="text-sm text-muted-foreground">Deep dives into machine learning applications in financial markets</p>
                    </div>
                    <div className="p-6 bg-background rounded-2xl border border-border">
                      <h3 className="font-semibold mb-2">Industry Analysis</h3>
                      <p className="text-sm text-muted-foreground">Market trends and insights from our research team</p>
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
