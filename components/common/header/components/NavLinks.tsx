import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu" 
import Link from "next/link"

export default function NavLinks() {
    return (
        <NavigationMenu className="hidden md:flex gap- terminal-xl">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="underline decoration-transparent hover:decoration-primary decoration-2 underline-offset-22">HOME</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="underline decoration-transparent hover:decoration-primary decoration-2 underline-offset-22">NFL</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="underline decoration-transparent hover:decoration-primary decoration-2 underline-offset-22">PGA</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}