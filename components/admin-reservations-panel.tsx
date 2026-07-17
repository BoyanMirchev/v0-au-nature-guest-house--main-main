"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Mail,
  Phone,
  User,
  Calendar,
  Users,
  Trash2,
  CheckCircle,
  XCircle,
  RotateCcw,
  Lock,
  Eye,
  EyeOff,
  CalendarCheck,
} from "lucide-react"

type ReservationStatus = "new" | "confirmed" | "cancelled"

interface Reservation {
  id: number
  name: string
  email: string
  phone: string
  check_in: string
  check_out: string
  guests: string
  message: string | null
  status: ReservationStatus
  created_at: string
}

const ADMIN_PASSWORD = "aunature2024"

const translations = {
  bg: {
    adminPanel: "Админ панел - Резервации",
    password: "Парола",
    loginButton: "Влез",
    logout: "Изход",
    wrongPassword: "Грешна парола",
    noReservations: "Няма резервации",
    loading: "Зареждане...",
    total: "Общо",
    newCount: "Нови",
    checkIn: "Настаняване",
    checkOut: "Напускане",
    guests: "Гости",
    received: "Получена на",
    confirm: "Потвърди",
    cancel: "Откажи",
    reopen: "Възстанови",
    delete: "Изтрий",
    statusNew: "Нова",
    statusConfirmed: "Потвърдена",
    statusCancelled: "Отказана",
    confirmDelete: "Сигурни ли сте, че искате да изтриете тази резервация?",
  },
  en: {
    adminPanel: "Admin Panel - Reservations",
    password: "Password",
    loginButton: "Login",
    logout: "Logout",
    wrongPassword: "Wrong password",
    noReservations: "No reservations",
    loading: "Loading...",
    total: "Total",
    newCount: "New",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    received: "Received on",
    confirm: "Confirm",
    cancel: "Cancel",
    reopen: "Reopen",
    delete: "Delete",
    statusNew: "New",
    statusConfirmed: "Confirmed",
    statusCancelled: "Cancelled",
    confirmDelete: "Are you sure you want to delete this reservation?",
  },
}

export function AdminReservationsPanel() {
  const { language } = useLanguage()
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [authPassword, setAuthPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const t = translations[language]

  const fetchReservations = async (pwd: string) => {
    setLoading(true)
    try {
      const response = await fetch("/api/reservations", {
        headers: { "x-admin-password": pwd },
      })
      const data = await response.json()
      if (data.reservations) {
        setReservations(data.reservations)
      }
    } catch (err) {
      console.error("Error fetching reservations:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated && authPassword) {
      fetchReservations(authPassword)
    }
  }, [isAuthenticated, authPassword])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthPassword(password)
      setIsAuthenticated(true)
      setError("")
      setPassword("")
    } else {
      setError(t.wrongPassword)
    }
  }

  const handleStatusChange = async (id: number, status: ReservationStatus) => {
    try {
      await fetch("/api/reservations", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": authPassword,
        },
        body: JSON.stringify({ id, status }),
      })
      setReservations((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)))
    } catch (err) {
      console.error("Error updating reservation:", err)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm(t.confirmDelete)) return

    try {
      await fetch("/api/reservations", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": authPassword,
        },
        body: JSON.stringify({ id }),
      })
      setReservations((prev) => prev.filter((r) => r.id !== id))
    } catch (err) {
      console.error("Error deleting reservation:", err)
    }
  }

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(language === "bg" ? "bg-BG" : "en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })

  const formatDateTime = (dateString: string) =>
    new Date(dateString).toLocaleString(language === "bg" ? "bg-BG" : "en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

  const statusStyles: Record<ReservationStatus, string> = {
    new: "bg-amber-600 text-white",
    confirmed: "bg-emerald-600 text-white",
    cancelled: "bg-stone-600 text-stone-200",
  }

  const statusLabels: Record<ReservationStatus, string> = {
    new: t.statusNew,
    confirmed: t.statusConfirmed,
    cancelled: t.statusCancelled,
  }

  const newCount = reservations.filter((r) => r.status === "new").length

  if (!isAuthenticated) {
    return (
      <Card className="mt-4 border-stone-700 bg-stone-800/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-stone-100">
            <Lock className="h-5 w-5" />
            {t.adminPanel}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="flex max-w-sm flex-col gap-4">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={t.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-stone-600 bg-stone-700/50 pr-10 text-stone-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <Button type="submit" className="bg-[#8A3E36] text-white hover:bg-[#6d312b]">
              {t.loginButton}
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mt-4 border-stone-700 bg-stone-800/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2 text-stone-100">
            <CalendarCheck className="h-5 w-5" />
            {t.adminPanel}
          </CardTitle>
          <div className="mt-2 flex gap-4 text-sm text-stone-400">
            <span>
              {t.total}: {reservations.length}
            </span>
            <span className="text-amber-400">
              {t.newCount}: {newCount}
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setIsAuthenticated(false)
            setAuthPassword("")
            setReservations([])
          }}
          className="border-stone-600 text-stone-300 hover:bg-stone-700"
        >
          {t.logout}
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-stone-400">{t.loading}</p>
        ) : reservations.length === 0 ? (
          <p className="text-stone-400">{t.noReservations}</p>
        ) : (
          <div className="space-y-4">
            {reservations.map((reservation) => (
              <div
                key={reservation.id}
                className={`rounded-lg border p-4 transition-all ${
                  reservation.status === "new"
                    ? "border-amber-600/50 bg-stone-700/50"
                    : "border-stone-700 bg-stone-800/30"
                }`}
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <User className="h-4 w-4 flex-shrink-0 text-stone-400" />
                      <span className="font-medium text-stone-100">{reservation.name}</span>
                      <Badge className={statusStyles[reservation.status]}>
                        {statusLabels[reservation.status]}
                      </Badge>
                    </div>

                    <div className="mt-3 grid gap-1 text-sm text-stone-400 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 flex-shrink-0" />
                        <a href={`mailto:${reservation.email}`} className="truncate hover:text-stone-200">
                          {reservation.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 flex-shrink-0" />
                        <a href={`tel:${reservation.phone}`} className="hover:text-stone-200">
                          {reservation.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        <span>
                          {t.checkIn}: {formatDate(reservation.check_in)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        <span>
                          {t.checkOut}: {formatDate(reservation.check_out)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 flex-shrink-0" />
                        <span>
                          {t.guests}: {reservation.guests}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarCheck className="h-3 w-3 flex-shrink-0" />
                        <span>
                          {t.received}: {formatDateTime(reservation.created_at)}
                        </span>
                      </div>
                    </div>

                    {reservation.message && (
                      <p className="mt-3 whitespace-pre-wrap rounded bg-stone-900/50 p-3 text-sm text-stone-300">
                        {reservation.message}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 sm:flex-col">
                    {reservation.status !== "confirmed" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStatusChange(reservation.id, "confirmed")}
                        className="flex-1 border-emerald-800 text-emerald-400 hover:bg-emerald-900/30 sm:flex-none"
                        title={t.confirm}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    {reservation.status !== "cancelled" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStatusChange(reservation.id, "cancelled")}
                        className="flex-1 border-stone-600 text-stone-300 hover:bg-stone-700 sm:flex-none"
                        title={t.cancel}
                      >
                        <XCircle className="h-4 w-4" />
                      </Button>
                    )}
                    {reservation.status !== "new" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStatusChange(reservation.id, "new")}
                        className="flex-1 border-stone-600 text-stone-300 hover:bg-stone-700 sm:flex-none"
                        title={t.reopen}
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(reservation.id)}
                      className="flex-1 border-red-800 text-red-400 hover:bg-red-900/30 sm:flex-none"
                      title={t.delete}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
