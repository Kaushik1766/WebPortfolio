import React from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";
import { FloatingNav } from "@/app/components/ui/floatingNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Products",
            link: "/products",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "About",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <>
            <FloatingNav navItems={navItems} />
        </>
    )
}

export default Navbar