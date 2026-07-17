"use client"

import React from "react"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Mail, Phone, User, Calendar, Trash2, CheckCircle, Circle, Lock, Eye, EyeOff, X } from "lucide-react"

interface Contact {
  id: number
  name: string
  email: string
  phone: string
  message: string
  is_read: boolean
  created_at: string
}

const ADMIN_PASSWORD = "aunature2024"

export function AdminContactsPanel() {
  const { language } = useLanguage()
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const translations = {
    bg: {
      adminPanel: "Админ панел - Съобщения",
      login: "Вход",
      password: "Парола",
      loginButton: "Влез",
      logout: "Изход",
      wrongPassword: "Грешна парола",
      noMessages: "Няма съобщения",
      markAsRead: "Маркирай като прочетено",
      markAsUnread: "Маркирай като непрочетено",
      delete: "Изтрий",
      unread: "Непрочетено",
      read: "Прочетено",
      loading: "Зареждане...",
      total: "Общо",
      unreadCount: "Непрочетени",
    },
    en: {
      adminPanel: "Admin Panel - Messages",
      login: "Login",
      password: "Password",
      loginButton: "Login",
      logout: "Logout",
      wrongPassword: "Wrong password",
      noMessages: "No messages",
      markAsRead: "Mark as read",
      markAsUnread: "Mark as unread",
      delete: "Delete",
      unread: "Unread",
      read: "Read",
      loading: "Loading...",
      total: "Total",
      unreadCount: "Unread",
    },
  }

  const t = translations[language]

  const fetchContacts = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/contacts")
      const data = await response.json()
      if (data.contacts) {
        setContacts(data.contacts)
      }
    } catch (error) {
      console.error("Error fetching contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts()
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError("")
      setPassword("")
    } else {
      setError(t.wrongPassword)
    }
  }

  const handleToggleRead = async (id: number, currentStatus: boolean) => {
    try {
      await fetch("/api/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, is_read: !currentStatus }),
      })
      setContacts(contacts.map(c => 
        c.id === id ? { ...c, is_read: !currentStatus } : c
      ))
    } catch (error) {
      console.error("Error updating contact:", error)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm(language === "bg" ? "Сигурни ли сте?" : "Are you sure?")) return
    
    try {
      await fetch("/api/contacts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      setContacts(contacts.filter(c => c.id !== id))
    } catch (error) {
      console.error("Error deleting contact:", error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString(language === "bg" ? "bg-BG" : "en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const unreadCount = contacts.filter(c => !c.is_read).length

  if (!isAuthenticated) {
    return (
      <Card className="bg-stone-800/50 border-stone-700 mt-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-stone-100">
            <Lock className="h-5 w-5" />
            {t.adminPanel}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={t.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-stone-700/50 border-stone-600 text-stone-100 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <Button type="submit" className="bg-[#8A3E36] hover:bg-[#6d312b] text-white">
              {t.loginButton}
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-stone-800/50 border-stone-700 mt-12">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2 text-stone-100">
            <Mail className="h-5 w-5" />
            {t.adminPanel}
          </CardTitle>
          <div className="flex gap-4 mt-2 text-sm text-stone-400">
            <span>{t.total}: {contacts.length}</span>
            <span className="text-amber-400">{t.unreadCount}: {unreadCount}</span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAuthenticated(false)}
          className="border-stone-600 text-stone-300 hover:bg-stone-700"
        >
          {t.logout}
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-stone-400">{t.loading}</p>
        ) : contacts.length === 0 ? (
          <p className="text-stone-400">{t.noMessages}</p>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`p-4 rounded-lg border transition-all ${
                  contact.is_read 
                    ? "bg-stone-800/30 border-stone-700" 
                    : "bg-stone-700/50 border-amber-600/50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <User className="h-4 w-4 text-stone-400 flex-shrink-0" />
                      <span className="font-medium text-stone-100">{contact.name}</span>
                      <Badge 
                        variant={contact.is_read ? "secondary" : "default"}
                        className={contact.is_read 
                          ? "bg-stone-600 text-stone-300" 
                          : "bg-amber-600 text-white"
                        }
                      >
                        {contact.is_read ? t.read : t.unread}
                      </Badge>
                    </div>
                    
                    <div className="mt-2 space-y-1 text-sm text-stone-400">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 flex-shrink-0" />
                        <a href={`mailto:${contact.email}`} className="hover:text-stone-200 truncate">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 flex-shrink-0" />
                        <a href={`tel:${contact.phone}`} className="hover:text-stone-200">
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        <span>{formatDate(contact.created_at)}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <button
                        onClick={() => setExpandedId(expandedId === contact.id ? null : contact.id)}
                        className="text-sm text-[#8A3E36] hover:text-[#a54a41] flex items-center gap-1"
                      >
                        {expandedId === contact.id ? (
                          <>
                            <X className="h-3 w-3" />
                            {language === "bg" ? "Скрий" : "Hide"}
                          </>
                        ) : (
                          <>
                            <Eye className="h-3 w-3" />
                            {language === "bg" ? "Виж съобщение" : "View message"}
                          </>
                        )}
                      </button>
                      {expandedId === contact.id && (
                        <p className="mt-2 p-3 bg-stone-900/50 rounded text-stone-300 text-sm whitespace-pre-wrap">
                          {contact.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex sm:flex-col gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleRead(contact.id, contact.is_read)}
                      className="border-stone-600 text-stone-300 hover:bg-stone-700 flex-1 sm:flex-none"
                    >
                      {contact.is_read ? (
                        <Circle className="h-4 w-4" />
                      ) : (
                        <CheckCircle className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(contact.id)}
                      className="border-red-800 text-red-400 hover:bg-red-900/30 flex-1 sm:flex-none"
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
