import { useState } from "react";
import { X, RotateCcw, Bookmark, Heart, Zap, Bed, Landmark, LifeBuoy, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/components/ui/switch";

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
}

const categories = [
  { label: "Support Namibia", icon: Heart, color: "bg-purple-100 text-purple-600" },
  { label: "Activities", icon: Zap, color: "bg-yellow-100 text-yellow-600" },
  { label: "Accommodation", icon: Bed, color: "bg-primary/10 text-primary" },
  { label: "Sites", icon: Landmark, color: "bg-ochre/10 text-ochre" },
  { label: "Support", icon: LifeBuoy, color: "bg-orange-100 text-orange-600" },
  { label: "Emergencies", icon: AlertTriangle, color: "bg-destructive/10 text-destructive" },
];

const FilterModal = ({ open, onClose }: FilterModalProps) => {
  const [favorites, setFavorites] = useState(false);
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map((c) => [c.label, true]))
  );

  const reset = () => {
    setFavorites(false);
    setToggles(Object.fromEntries(categories.map((c) => [c.label, true])));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-card rounded-2xl shadow-2xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-navy-dark">Personalize search</h2>
              <button
                onClick={reset}
                className="text-primary font-semibold flex items-center gap-1 hover:underline text-sm"
              >
                <RotateCcw className="w-4 h-4" /> Reset
              </button>
            </div>

            {/* Close */}
            <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="p-6">
              {/* Favorites */}
              <div className="mb-6 p-4 border-2 border-border rounded-xl flex items-center justify-between hover:border-primary transition-colors">
                <div className="flex items-center gap-3">
                  <Bookmark className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-navy-dark">My favorite pins</span>
                </div>
                <Switch checked={favorites} onCheckedChange={setFavorites} />
              </div>

              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Category of pins
              </h3>

              <div className="space-y-3">
                {categories.map((cat) => (
                  <div
                    key={cat.label}
                    className="p-3 border border-border rounded-lg hover:border-primary transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${cat.color}`}>
                        <cat.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-navy-dark text-sm">{cat.label}</span>
                    </div>
                    <Switch
                      checked={toggles[cat.label]}
                      onCheckedChange={(v) => setToggles((prev) => ({ ...prev, [cat.label]: v }))}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={onClose}
                className="w-full mt-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterModal;
