"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Home, Briefcase, Users, Mail } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  submenu?: { title: string; href: string }[]
}

const navItems: NavItem[] = [
  {
    title: "ホーム",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "サービス",
    href: "#",
    icon: <Briefcase className="h-5 w-5" />,
    submenu: [
      { title: "戦略策定アドバイザリー", href: "/service_advisory" },
      { title: "新規事業・DXのPMO代行", href: "/service_pmo" },
      { title: "新規事業・DXに関する人材育成", href: "/service_training" },
    ],
  },
  {
    title: "ニュースレター",
    href: "/newsletter/generativeAI_toC",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    title: "会社概要",
    href: "/about",
    icon: <Users className="h-5 w-5" />,
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  const closeSidebar = () => {
    setIsMenuOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate_logo-LzqMeIIJHV2UT2bHdO8lOShFXffsNR.png"
            alt="GrowthCommit"
            className="h-10"
          />
        </Link>

        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                お問い合わせ
              </a>
            </Button>
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                お問い合わせ
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 transition-all duration-200"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex h-full flex-col">
                <div className="flex h-16 items-center justify-between border-b px-6 bg-gradient-to-r from-blue-50 to-cyan-50">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate_logo-LzqMeIIJHV2UT2bHdO8lOShFXffsNR.png"
                    alt="GrowthCommit"
                    className="h-8"
                  />
                </div>
                <ScrollArea className="flex-1">
                  <nav className="flex flex-col gap-2 p-6">
                    {navItems.map((item) => (
                      <div key={item.title}>
                        {item.submenu ? (
                          <>
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-left hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 transition-all duration-200"
                              onClick={() => toggleSubmenu(item.title)}
                            >
                              {item.icon}
                              <span className="ml-3">{item.title}</span>
                            </Button>
                            {openSubmenu === item.title && (
                              <div className="ml-8 mt-2 flex flex-col gap-1">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className="text-sm py-2 px-3 rounded-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200"
                                    onClick={closeSidebar}
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link href={item.href} onClick={closeSidebar}>
                            <Button
                              variant="ghost"
                              className="w-full justify-start hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 transition-all duration-200"
                            >
                              {item.icon}
                              <span className="ml-3">{item.title}</span>
                            </Button>
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </ScrollArea>
                <div className="border-t p-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd1-azWWsxWFq2rA_EWJ67oNpBntaajtu7kiVmsG5hrG-uF9A/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeSidebar}
                    >
                      お問い合わせ
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
