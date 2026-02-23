"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function Footer() {
  const [reunidas, setReunidas] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setReunidas(data.mascotasAdoptadas ?? 0))
      .catch(() => setReunidas(0))
  }, [])

  return (
    <footer className="border-t border-border">
      <div className="bg-[#4CAF50]/10 py-4">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <p className="text-sm text-foreground flex items-center gap-2">
            <span className="text-2xl font-bold text-[#4CAF50] leading-none">
              {reunidas !== null ? reunidas : "..."}
            </span>
            <span>mascotas que encontraron un hogar</span>
          </p>
        </div>
      </div>
      <div className="py-6 bg-background">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-foreground/60">
          <p>
            Adopta Tu Mascota |{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0agQbhdhT339ZVmKneUQvFNWzXLGTKhfmpLoFZChIohs8aA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline italic"
            >
              Feedback
            </a>
            {" "}|{" "}
            <a
              href="https://eugeniosaintemarie.github.io?ref=adoptatumascota"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ∃ugenio © {new Date().getFullYear()}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
