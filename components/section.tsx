"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, children, className = "" }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    // More aggressive settings for mobile to ensure better visibility detection
    const observerOptions = {
      threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
      rootMargin: isMobile ? "50px 0px -20px 0px" : "20px 0px -10px 0px", // Start animation earlier on mobile
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      observerOptions,
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isMobile])

  // Special handling for content-heavy sections like course section
  const isContentHeavySection = id === 'course' || id === 'campus' || id === 'resources'
  const getMinHeight = () => {
    if (isMobile) {
      return isContentHeavySection ? 'min-h-[50vh]' : 'min-h-[70vh]'
    }
    return 'min-h-screen'
  }

  const getPadding = () => {
    if (isMobile) {
      return isContentHeavySection ? 'py-8' : 'py-12'
    }
    return 'py-20'
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${getMinHeight()} flex items-center justify-center ${getPadding()} transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  )
}
