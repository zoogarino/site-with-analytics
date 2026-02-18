import { useEffect } from "react";
import { usePopup } from "@/contexts/PopupContext";
import PopupShell from "./PopupShell";

interface TimeDelayPopupProps {
  delaySeconds?: number;
}

const TimeDelayPopup = ({ delaySeconds = 30 }: TimeDelayPopupProps) => {
  const { showPopup, hasSubscribed } = usePopup();

  useEffect(() => {
    if (hasSubscribed) return;
    const timeoutId = setTimeout(() => showPopup("time"), delaySeconds * 1000);
    return () => clearTimeout(timeoutId);
  }, [hasSubscribed, showPopup, delaySeconds]);

  return (
    <PopupShell
      popupType="time"
      emoji="📬"
      title="Planning a Namibia Trip?"
      subtitle="Get our free starter guide."
      location="time_delay"
      buttonText="Get Free Guide"
    />
  );
};

export default TimeDelayPopup;
