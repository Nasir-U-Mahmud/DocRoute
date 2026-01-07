"use client";

import { useEffect } from "react";

export default function AnalyticsDebug() {
  useEffect(() => {
    // Check after 3 seconds to give GA time to load
    setTimeout(() => {
      console.log("=== Google Analytics Debug ===");
      console.log("window.gtag exists:", typeof window.gtag !== "undefined");
      console.log("dataLayer exists:", Array.isArray(window.dataLayer));
      console.log("dataLayer length:", window.dataLayer?.length);
      
      if (typeof window.gtag === "function") {
        console.log("✅ Google Analytics loaded successfully!");
      } else {
        console.error("❌ Google Analytics failed to load");
      }
    }, 3000);
  }, []);

  return null; // This component doesn't render anything
}