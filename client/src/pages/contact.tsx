import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="contact-title">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
                Have questions about our trading operations or technology? 
                Contact our team for inquiries about Tribex Alpha.
              </p>
            </div>

            {/* Contact Info */}
            <Card className="bg-secondary rounded-3xl">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-8 text-center" data-testid="contact-info-title">
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Email</p>
                      <p className="text-muted-foreground" data-testid="contact-email">
                        Tribex@tribexgroup.in
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Phone</p>
                      <p className="text-muted-foreground" data-testid="contact-phone">
                        +91 7892002478
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Address</p>
                      <p className="text-muted-foreground" data-testid="contact-address">
                        826, MEI Layout<br />
                        Bangalore 560073
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Business Hours</p>
                      <p className="text-muted-foreground" data-testid="contact-hours">
                        Mon - Fri: 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}