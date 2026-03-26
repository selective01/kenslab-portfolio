// CVDownload.tsx — the "Download CV" button
// It links to /public/KenEmmanuel-CV.pdf
// The "download" attribute tells the browser to download the file instead of opening it
// Usage: <CVDownload /> — drop it anywhere you want the button

import { Download } from "lucide-react";

export default function CVDownload() {
  return (
    <a
      href="/Kenechukwu_CV.pdf"
      download                      // 👈 Forces browser to download instead of navigate
      className="
        inline-flex items-center gap-2
        text-xs tracking-widest uppercase font-semibold
        border border-brand-border text-brand-gray-light
        px-4 py-2.5 rounded-[4px]
        hover:border-brand-green hover:text-brand-green-light
        transition-all duration-200
      "
    >
      <Download size={14} />
      Download CV
    </a>
  );
}
