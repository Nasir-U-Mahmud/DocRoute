"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Initialize Google Analytics
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      page_path: pathname + searchParams.toString(),
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    if (typeof window.gtag === "undefined") return;

    const url = pathname + searchParams.toString();
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submission", {
    event_category: "engagement",
    event_label: formName,
  });
};

// Track downloads
export const trackDownload = (fileName: string) => {
  trackEvent("file_download", {
    event_category: "engagement",
    event_label: fileName,
  });
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  trackEvent("outbound_link", {
    event_category: "engagement",
    event_label: url,
  });
};