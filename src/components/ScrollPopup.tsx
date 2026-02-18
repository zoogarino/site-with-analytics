import { useEffect } from "react";
import { usePopup } from "@/contexts/PopupContext";
import PopupShell from "./PopupShell";

interface ScrollPopupProps {
  triggerPercentage?: number;
}

const ScrollPopup = ({ triggerPercentage = 50 }: ScrollPopupProps) => {
  const { showPopup, hasSubscribed } = usePopup();

  useEffect(() => {
    if (hasSubscribed) return;
    let hasTriggered = false;

    const handleScroll = () => {
      if (hasTriggered) return;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (window.scrollY / documentHeight) * 100;
      if (percentage >= triggerPercentage) {
        hasTriggered = true;
        showPopup("scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasSubscribed, showPopup, triggerPercentage]);

  return (
    <PopupShell
      popupType="scroll"
      emoji="🎁"
      title="Enjoying This Guide?"
      subtitle="Get more expert tips delivered weekly."
      location="scroll_popup"
    />
  );
};

export default ScrollPopup;
