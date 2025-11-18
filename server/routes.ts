import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission - now just returns success without storing
  app.post("/api/contact", async (req, res) => {
    try {
      // Log the contact form data to console instead of storing in database
      console.log("Contact form submission received:", req.body);

      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully"
      });
    } catch (error: any) {
      console.error("Contact form submission error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}