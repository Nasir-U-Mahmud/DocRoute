"use client";

import Script from "next/script";

// Your Google Analytics ID
const GA_MEASUREMENT_ID = "G-EDBN8Q8T21";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function Analytics() {
  return (
    <>
      {/* Load the Google Analytics script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      
      {/* Initialize Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

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