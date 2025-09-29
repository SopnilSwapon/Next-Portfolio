"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Briefcase, Wrench, MessageSquareText } from "lucide-react";

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#experience", icon: Briefcase, label: "Experience" },
  { href: "#services", icon: Wrench, label: "Services" },
  { href: "#contact", icon: MessageSquareText, label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="text-red-700 h-16 items-end gap-4 bg-[#0000004d] rounded-full px-4 pb-3 backdrop-blur-lg">
      {navItems.map((item) => (
        <motion.div
          key={item.href}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href={item.href}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-primary transition-colors"
          >
            <item.icon className="h-5 w-5" />
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
