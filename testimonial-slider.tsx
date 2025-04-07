"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Working with Nonprofit Marketing Pro transformed our outreach strategy. We saw a 40% increase in donations within the first quarter of implementing their recommendations.",
    name: "Sarah Johnson",
    role: "Executive Director, Community Health Initiative",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The strategic marketing plan we received was comprehensive, actionable, and perfectly aligned with our mission. It's rare to find a consultant who truly understands the nonprofit sector this well.",
    name: "Michael Rodriguez",
    role: "Development Director, Education Access Fund",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Our social media engagement has tripled since implementing the strategies recommended. The ROI on this consulting relationship has been exceptional.",
    name: "Amara Okafor",
    role: "Communications Manager, Global Clean Water Project",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
      <Card className="border-none shadow-none">
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <Quote className="h-12 w-12 text-secondary opacity-70" />
            <p className="text-xl md:text-2xl italic max-w-3xl">{testimonials[current].quote}</p>
            <div className="flex items-center gap-2 mt-4">
              <Avatar>
                <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="font-medium">{testimonials[current].name}</span>
                <span className="text-sm text-muted-foreground">{testimonials[current].role}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full pointer-events-auto" onClick={prev}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full pointer-events-auto" onClick={next}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
      <div className="flex justify-center gap-1 mt-4">
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`h-2 w-2 rounded-full p-0 ${index === current ? "bg-secondary" : "bg-muted"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
