"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name:"Home",
        path:"/",
    },

    {
        name:"Resume",
        path:"/resume",
    },

    {
        name:"Projects",
        path:"/project",
    },

    {
        name:"Services",
        path:"/service",
    },

    {
        name:"Contact",
        path:"/contact",
    },
]


const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);

    return( 
    <nav className="flex gap-8">
        {links.map((link, index)=> {
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent "} hover:text-accent`}>
            {link.name}
            </Link>
        })}
    </nav>
    );
};




export default Nav