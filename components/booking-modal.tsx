"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Calendar, Users, Mail, Phone, User } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const reservationResponse = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!reservationResponse.ok) {
        throw new Error("Failed to save reservation")
      }

      // Also notify by email (best-effort, does not block confirmation)
      try {
        await fetch("/api/send-booking-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            recipientEmail: "szp@abv.bg",
          }),
        })
      } catch (emailError) {
        console.error("[v0] Booking email notification error:", emailError)
      }

      alert("Благодарим за Вашата резервация! Ще се свържем с Вас скоро.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "2",
        message: "",
      })
      onClose()
    } catch (err) {
      setError("Възникна грешка при изпращане на резервацията. Моля, опитайте отново.")
      console.error("[v0] Booking submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
        <CardHeader className="relative bg-[#8A3E36] text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-[#F3B53F] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <CardTitle className="text-3xl font-serif font-normal tracking-wider text-center pr-8">Резервация</CardTitle>
          <p className="text-white/90 text-center text-sm font-light mt-2">
            Попълнете формата и ние ще се свържем с Вас
          </p>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif text-[#2C2C2C] font-medium flex items-center gap-2">
                <User className="w-5 h-5 text-[#8A3E36]" />
                Лични данни
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#2C2C2C] font-light">
                    Име и фамилия *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-[#2C2C2C]/20 focus:border-[#8A3E36]"
                    placeholder="Вашето име"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#2C2C2C] font-light flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-[#2C2C2C]/20 focus:border-[#8A3E36]"
                    placeholder="+359 ..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#2C2C2C] font-light flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Имейл *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-[#2C2C2C]/20 focus:border-[#8A3E36]"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif text-[#2C2C2C] font-medium flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#8A3E36]" />
                Детайли за резервацията
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkIn" className="text-[#2C2C2C] font-light">
                    Дата на настаняване *
                  </Label>
                  <Input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="border-[#2C2C2C]/20 focus:border-[#8A3E36]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkOut" className="text-[#2C2C2C] font-light">
                    Дата на напускане *
                  </Label>
                  <Input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="border-[#2C2C2C]/20 focus:border-[#8A3E36]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-[#2C2C2C] font-light flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Брой гости *
                </Label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#2C2C2C]/20 rounded-md focus:border-[#8A3E36] focus:outline-none focus:ring-1 focus:ring-[#8A3E36]"
                >
                  <option value="1">1 гост</option>
                  <option value="2">2 гости</option>
                  <option value="3">3 гости</option>
                  <option value="4">4 гости</option>
                  <option value="5">5 гости</option>
                  <option value="6">6 гости</option>
                  <option value="7">7 гости</option>
                  <option value="8">8 гости</option>
                  <option value="9">9 гости</option>
                  <option value="10+">10+ гости</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#2C2C2C] font-light">
                  Допълнителна информация
                </Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-[#2C2C2C]/20 rounded-md focus:border-[#8A3E36] focus:outline-none focus:ring-1 focus:ring-[#8A3E36]"
                  placeholder="Специални изисквания или въпроси..."
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">{error}</div>
            )}

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isLoading}
                className="flex-1 border-[#2C2C2C]/20 text-[#2C2C2C] hover:bg-[#F5F5F5] bg-transparent"
              >
                Отказ
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-[#8A3E36] hover:bg-[#8A3E36]/90 text-white font-bold tracking-wider disabled:opacity-50"
              >
                {isLoading ? "ИЗПРАЩАНЕ..." : "ИЗПРАТИ РЕЗЕРВАЦИЯ"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
