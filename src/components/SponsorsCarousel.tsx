import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Sponsor {
  name: string;
  image: string;
  tagline?: string;
}

interface SponsorsCarouselProps {
  sponsors: Sponsor[];
}

const SponsorsCarousel = ({ sponsors }: SponsorsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(sponsors.length / itemsPerSlide);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, totalSlides]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const startAutoPlay = () => {
    setIsAutoPlay(true);
  };

  const visibleSponsors = sponsors.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 transition-all duration-500 ease-out">
          {visibleSponsors.map((sponsor, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="flex-1 min-w-0 group"
            >
              {/* Sponsor Card */}
              <div
                className="relative h-32 rounded-2xl overflow-hidden backdrop-blur-sm bg-background/80 border border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Background Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-20 max-w-full object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                    {sponsor.name}
                  </p>
                  {sponsor.tagline && (
                    <p className="text-[10px] text-center text-muted-foreground/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {sponsor.tagline}
                    </p>
                  )}
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8">
        <Button
          onClick={handlePrev}
          variant="outline"
          size="sm"
          className="rounded-full p-2 h-10 w-10 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 w-2 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          variant="outline"
          size="sm"
          className="rounded-full p-2 h-10 w-10 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Auto-play Indicator */}
      <div className="mt-6 text-center">
        <button
          onClick={startAutoPlay}
          className={`text-xs font-medium transition-colors duration-300 ${
            isAutoPlay
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {isAutoPlay ? "▶ Auto-rotating" : "Click to auto-rotate"}
        </button>
      </div>
    </div>
  );
};

export default SponsorsCarousel;
