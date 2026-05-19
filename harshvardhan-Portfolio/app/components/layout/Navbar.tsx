"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);

  const isHome = pathname === "/" && hash !== "#projects" && hash !== "#blogs";
  const isProjects = pathname.startsWith("/project") || hash === "#projects";
  const isBlogs = hash === "#blogs";

  return (
    <nav className="sticky top-2 z-50 h-12 w-full flex justify-center items-center bg1 border-y">
      <div className="h-full max-w-3xl w-[95%] md:full flex justify-end items-center px-8 border-x">
        <div className="flex gap-8">
          <Link href="/" onClick={() => setHash("")} className="hidden sm:block">
            <h5 className={`${isHome ? "text1" : "text2 hover:text1"}`}>Home</h5>
          </Link>
          <Link href="/#projects" onClick={() => setHash("#projects")} className="hidden sm:block">
            <h5 className={`${isProjects ? "text1" : "text2 hover:text1"}`}>Projects</h5>
          </Link>
          <Link href="/#blogs" onClick={() => setHash("#blogs")} className="hidden md:block">
            <h5 className={`${isBlogs ? "text1" : "text2 hover:text1"}`}>Blog</h5>
          </Link>
        </div>
      </div>
    </nav>
  );
}