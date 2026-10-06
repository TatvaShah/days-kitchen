"use client";

import { useEffect, useState } from "react";
import { dmMessage, links } from "@/lib/content";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function DmButton({ className, children }: Props) {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(id);
  }, [toast]);

  async function onClick() {
    let copied = false;
    try {
      await navigator.clipboard.writeText(dmMessage);
      copied = true;
    } catch {
      copied = false;
    }
    setToast(
      copied
        ? "Message copied, just paste it in the DM"
        : "Instagram is opening. Copy was blocked by the browser.",
    );
    window.open(links.instagramDm, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
      {toast ? (
        <p className="toast" role="status">
          {toast}
        </p>
      ) : null}
    </>
  );
}
