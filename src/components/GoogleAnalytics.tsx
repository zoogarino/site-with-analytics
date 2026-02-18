import { useEffect } from "react";
import { GA_ID } from "@/utils/analytics";

const GoogleAnalytics = () => {
  useEffect(() => {
    if (GA_ID === "G-XXXXXXXXXX") return;
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);
  }, []);
  return null;
};

export default GoogleAnalytics;
