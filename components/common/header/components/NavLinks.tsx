"use client"

import { usePathname } from "next/navigation"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

// Nav links in header to control navigation
export default function NavLinks() {
    const pathname = usePathname()

    const items = [
        { href: "/", label: "HOME" },
        { href: "/nfl", label: "NFL" },
        { href: "/pga", label: "PGA" },
    ]

    return (
        <NavigationMenu className="hidden md:flex gap- terminal-xl">
            <NavigationMenuList>
                {items.map((it) => {
                    const isActive =
                        pathname === it.href || (it.href !== "/" && pathname?.startsWith(it.href))

                    return (
                        <NavigationMenuItem key={it.href}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={it.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={(() => {
                                        const base = "underline decoration-transparent hover:decoration-primary hover:text-primary decoration-2 underline-offset-22"
                                        const active = " decoration-primary text-primary underline decoration-2 underline-offset-22"
                                        return `${base}${isActive ? active : ""}`
                                    })()}
                                >
                                    {it.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}