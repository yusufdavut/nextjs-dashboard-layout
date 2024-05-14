"use client";

import Image from "next/image";
import Logo from "../../public/logo.svg";
import { menuLinks } from "@/lib/menulist";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();
  return (
    <div className="w-52 h-screen p-5 flex flex-col bg-slate-300">
      <div className="mb-5">
        <Image src={Logo} alt="Logo" width={180} height={30} />
      </div>
      <div className="menu">
        {menuLinks.map((menu) => (
          <Link
            key={menu.id}
            href={menu.path}
            className={`flex items-center text-lg py-3 px-1 ${
              path == menu.path && "bg-slate-700 text-white"
            }`}
          >
            <menu.icon className="mr-2" />
            <li className="list-none">{menu.name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
}
