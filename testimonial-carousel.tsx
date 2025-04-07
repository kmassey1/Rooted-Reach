"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "The education program changed my life. I was able to get a scholarship and now I'm the first in my family to attend college.",
    name: "Sarah Johnson",
    role: "Scholarship Recipient",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The medical assistance we received saved my daughter's life. I will be forever grateful for the care and support.",
    name: "Michael Rodriguez",
    role: "Healthcare Program Beneficiary",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Our community has been transformed by the infrastructure projects. We now have clean water and reliable electricity.",
    name: "Amara Okafor",
    role: "Community Leader",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialCarousel() {
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
            <Quote className="h-12 w-12 text-primary opacity-50" />
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
            className={`h-2 w-2 rounded-full p-0 ${index === current ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
