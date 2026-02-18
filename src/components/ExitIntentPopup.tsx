import { useEffect } from "react";
import { usePopup } from "@/contexts/PopupContext";
import PopupShell from "./PopupShell";

const ExitIntentPopup = () => {
  const { showPopup, hasSubscribed } = usePopup();

  useEffect(() => {
    if (hasSubscribed) return;
    let hasTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        hasTriggered = true;
        showPopup("exit");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasSubscribed, showPopup]);

  return (
    <PopupShell
      popupType="exit"
      emoji="✋"
      title="Before You Go..."
      subtitle="Get our free Namibia travel guide delivered to your inbox."
      location="exit_intent"
      buttonText="Get Free Guide"
    />
  );
};

export default ExitIntentPopup;
