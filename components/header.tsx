"use client";

import { useState } from "react";
import { DmButton } from "@/components/dm-button";
import { links } from "@/lib/content";

const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#kitchen", label: "Kitchen" },
  { href: "#catering", label: "Catering" },
  { href: "#visit", label: "Visit" },
  { href: "#reviews", label: "Reviews" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <div className="header-bar">
          <a className="brand" href="#top">
            <img src="/media/logo.webp" alt="Day's Kitchen profile picture" width={56} height={56} />
            <span>
              <strong>Day&apos;s Kitchen</strong>
              <span>Filipino cuisine and café</span>
            </span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav id="site-nav" className={open ? "nav-panel open" : "nav-panel"}>
          {nav.map((item) => (
            <a
              key={item.href}
              className="nav-link"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="header-actions">
            <a className="btn btn-chili" href={links.uberEats} target="_blank" rel="noreferrer">
              Order on Uber Eats
            </a>
            <DmButton className="btn btn-ink">Message on Instagram</DmButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
