'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"

const slides = [
  {
    tag: "NFL",
    title: "THE GRIDIRON",
    subtitle: "Our bread and butter. Check out the NFL terminal for projections, data driven tools, and more.",
    bg: "/skipper.webp",
  },
  {
    tag: "PGA",
    title: "THE LINKS",
    subtitle: "Built for winners. Check out our projections, tools, and more in the PGA terminal.",
    bg: "/rory-win.jpeg"
  }
]

// Hero carousel component that shows the sports we offer
export default function HeroCarousel() {
  return (
    <Carousel
      className="w-full h-screen"
      plugins={[Autoplay({ delay: 7500 })]}
      opts={{ loop: true }}
    >
      <CarouselContent className="h-screen">
        {slides.map((slide, i) => (
          <CarouselItem key={i} className="relative h-screen">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-12 pb-24">
              <h1 className="text-white font-black italic text-6xl tracking-widest mb-4">
                {slide.title}
              </h1>
              <div className="border-l-2 border-white pl-4 mb-8">
                <p className="text-white/80 italic font-mono text-lg max-w-xl">
                  {slide.subtitle}
                </p>
              </div>
              <Button className="bg-primary border border-black text-black font-mono text-sm px-6 py-3 w-fit hover:bg-white hover:text-black transition-colors">
                {slide.tag} TERMINAL
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Custom dot indicators (bottom center) */}
      {/* You'll build these manually — see step 4 */}
    </Carousel>
  )
}