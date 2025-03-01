
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl font-bold text-primary"
            >
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="text-sm font-bold">H</span>
              </div>
              <span>HelpMart</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              A cost-free exchange platform empowering communities through barter and mutual support.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="text-destructive" />
              <span>for communities</span>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/browse">Browse Items</FooterLink>
              <FooterLink to="/how-it-works">How It Works</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/community-guidelines">Community Guidelines</FooterLink>
              <FooterLink to="/safety-tips">Safety Tips</FooterLink>
              <FooterLink to="/partner">Become a Partner</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@helpmart.org</li>
              <li>+92 123 456 7890</li>
              <li className="pt-4">
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">F</div>
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">T</div>
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">I</div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} HelpMart. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-2">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link 
      to={to}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
