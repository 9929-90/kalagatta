"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

type TestimonialsSliderProps = {
  items: Testimonial[];
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function RatingStars({ rating }: { rating: 4.5 | 5 }) {
  return (
    <div className="testimonial-stars" aria-label={`${rating} out of 5 star rating`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const isHalf = rating === 4.5 && index === 4;

        return (
          <span className="testimonial-star-wrap" key={index}>
            <Star className="testimonial-star" fill="currentColor" />
            {isHalf ? <span className="testimonial-star-mask" /> : null}
          </span>
        );
      })}
      <strong>{rating.toFixed(1)}</strong>
    </div>
  );
}

export function TestimonialsSlider({ items }: TestimonialsSliderProps) {
  const [active, setActive] = useState(0);
  const visibleItems = useMemo(() => items.filter((item) => item.quote.trim().length > 0), [items]);
  const total = visibleItems.length;

  if (!total) {
    return null;
  }

  const goPrevious = () => setActive((current) => (current - 1 + total) % total);
  const goNext = () => setActive((current) => (current + 1) % total);

  return (
    <div className="testimonial-slider" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="testimonial-slider-window">
        <motion.div
          className="testimonial-slider-track"
          animate={{ x: `calc(${active} * (var(--testimonial-card-width) + var(--testimonial-gap)) * -1)` }}
          transition={{ type: "spring", stiffness: 260, damping: 32, mass: 0.82 }}
        >
          {visibleItems.map((item, index) => (
            <article className="testimonial-card testimonial-slide-card" key={`${item.name}-${index}`}>
              <RatingStars rating={item.rating} />
              <p>&quot;{item.quote}&quot;</p>
              <div className="testimonial-person">
                <span className="testimonial-avatar">{initials(item.name)}</span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.location}</small>
                </span>
              </div>
              <Quote className="testimonial-quote-mark" aria-hidden="true" />
            </article>
          ))}
        </motion.div>
      </div>
      <div className="testimonial-controls">
        <button type="button" onClick={goPrevious} aria-label="Show previous testimonial">
          <ArrowLeft />
        </button>
        <span>
          {active + 1} / {total}
        </span>
        <button type="button" onClick={goNext} aria-label="Show next testimonial">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
