"use client";
import Link from "next/link";
import "./navigation.modules.css";
import { useState } from "react";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Who we are",
    route: "/who-we-are",
  },
  {
    label: "What we do",
    route: "/what-we-do",
  },
  {
    label: "See our work",
    route: "/see-our-work",
  },
  {
    label: "Get in touch",
    route: "/get-in-touch",
  },
];

export function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <Link href={links[0].route} className="nav-logo">
          Next Js
        </Link>
        <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
          {links.map(({ label, route }) => {
            return (
              <li className="nav-item" key={route}>
                <Link
                  href={route}
                  className="nav-link"
                  onClick={() => setShowMenu(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className={`hamburger ${showMenu ? "active" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
