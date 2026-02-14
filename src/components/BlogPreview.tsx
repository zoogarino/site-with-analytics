import { Truck, Tent, HeartPulse, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Vehicle & Roads",
    description: "4x4 driving tips, road types, and vehicle preparation",
    icon: Truck,
    href: "/travel-advice/vehicle-and-roads",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    hoverBg: "group-hover:bg-primary",
  },
  {
    title: "Camping Tips",
    description: "Safe camping practices, equipment, and campsite selection",
    icon: Tent,
    href: "/travel-advice/camping-tips",
    iconBg: "bg-success/10",
    iconColor: "text-success",
    hoverBg: "group-hover:bg-success",
  },
  {
    title: "First Aid Tips",
    description: "Medical preparation, snake bites, and emergency contacts",
    icon: HeartPulse,
    href: "/travel-advice/first-aid",
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    hoverBg: "group-hover:bg-destructive",
  },
  {
    title: "My Phone",
    description: "Connectivity, SIM cards, offline apps, and communication",
    icon: Smartphone,
    href: "/travel-advice/my-phone",
    iconBg: "bg-accent",
    iconColor: "text-muted-foreground",
    hoverBg: "group-hover:bg-muted-foreground",
  },
];

const BlogPreview = () => (
  <section id="travel-advice" className="section-padding bg-muted/30">
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
          Travel Smart, Travel Safe
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Essential guides and resources for a safe, successful Namibian adventure
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <Link
              to={cat.href}
              className="block bg-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div
                className={`w-16 h-16 ${cat.iconBg} ${cat.hoverBg} rounded-full flex items-center justify-center mb-4 mx-auto transition-colors`}
              >
                <cat.icon className={`w-8 h-8 ${cat.iconColor} group-hover:text-primary-foreground transition-colors`} />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-dark mb-2 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cat.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
