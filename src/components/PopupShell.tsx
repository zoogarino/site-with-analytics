import { X } from "lucide-react";
import { usePopup } from "@/contexts/PopupContext";
import NewsletterForm from "./NewsletterForm";

interface PopupShellProps {
  popupType: string;
  emoji: string;
  title: string;
  subtitle: string;
  location: string;
  buttonText?: string;
}

const PopupShell = ({ popupType, emoji, title, subtitle, location, buttonText = "Subscribe Free" }: PopupShellProps) => {
  const { activePopup, closePopup } = usePopup();

  if (activePopup !== popupType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-slideUp">
        <button onClick={closePopup} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <p className="text-4xl mb-3">{emoji}</p>
          <h3 className="text-2xl font-heading font-bold text-navy-dark mb-2">{title}</h3>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <NewsletterForm location={location} buttonText={buttonText} tags={[popupType]} />
      </div>
    </div>
  );
};

export default PopupShell;
