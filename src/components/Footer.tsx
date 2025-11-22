import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-primary mb-4">
              Rehoboth for Families
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building a community where families flourish through love, support, and inclusion.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com/rehobothfamilies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/rehobothfamilies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/rehobothfamilies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/prayer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Prayer Ministry
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Our Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/community/men" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Men's Community
                </Link>
              </li>
              <li>
                <Link to="/community/women" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Women's Community
                </Link>
              </li>
              <li>
                <Link to="/community/youth" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Youth Community
                </Link>
              </li>
              <li>
                <Link to="/missions/nigeria" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Missions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@rehobothforfamilies.org"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@rehobothforfamilies.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +44 (0) 123 456 7890
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Manchester, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rehoboth for Families. Registered Charity No. 1234567. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
