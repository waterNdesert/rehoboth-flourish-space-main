import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "events", "families", "team", "missions"];
  const placeholders = Array(12).fill(null);

  const filteredImages =
    activeFilter === "all" ? placeholders : placeholders.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground fade-in-up">
            Gallery
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Moments of joy, connection, and community
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="capitalize transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50 group-hover:from-primary/20 group-hover:to-secondary/30 transition-all">
                  <Image className="h-12 w-12 text-muted-foreground group-hover:scale-125 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
