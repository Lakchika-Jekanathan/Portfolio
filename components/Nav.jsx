"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-2">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname ? "text-accent" : "hover:text-accent"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
