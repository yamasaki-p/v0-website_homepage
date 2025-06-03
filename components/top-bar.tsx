"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function TopBar() {
  const pathname = usePathname()

  // パスに基づいてブレッドクラムを生成
  const generateBreadcrumbs = () => {
    if (pathname === "/") return [{ name: "ホーム", href: "/" }]

    const paths = pathname.split("/").filter(Boolean)
    const breadcrumbs = [{ name: "ホーム", href: "/" }]

    let currentPath = ""
    paths.forEach((path) => {
      currentPath += `/${path}`

      let name = path
      if (path === "service_advisory") name = "戦略策定アドバイザリー"
      if (path === "service_pmo") name = "新規事業・DXのPMO代行"
      if (path === "service_traingng") name = "新規事業・DXに関する人材育成"

      breadcrumbs.push({ name, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-cyan-50 border-b px-4 py-3">
      <div className="container mx-auto">
        <div className="flex items-center">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.href} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />}
              <Link
                href={breadcrumb.href}
                className={cn(
                  "text-sm hover:underline",
                  index === breadcrumbs.length - 1 ? "font-medium text-gray-900" : "text-muted-foreground",
                )}
              >
                {breadcrumb.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
