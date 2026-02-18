import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
  fullBleed?: boolean;
  className?: string;
}

const Layout = ({ children, showFooter = true, fullBleed = false, className = "" }: LayoutProps) => (
  <div className={`min-h-screen ${className}`}>
    <Navbar />
    {fullBleed ? children : <div className="pt-[72px]">{children}</div>}
    {showFooter && <Footer />}
  </div>
);

export default Layout;
