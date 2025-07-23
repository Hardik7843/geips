import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="GEIPS Logo"
                className="aspect-square w-20 rounded-full"
              />
              {/* <h3 className="text-xl font-bold text-primary">GEIPS</h3> */}
            </div>
            <p className="text-footer-muted text-sm leading-relaxed">
              <strong>Global Education Institute of Paramedical Science</strong>{" "}
              - An autonomous institution established in 2021, providing quality
              paramedical education with All India Council authorization.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-footer-foreground">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                About GEIPS
              </Link>
              <Link
                href="/courses"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                Our Courses
              </Link>
              <Link
                href="/career"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                Career
              </Link>
              <Link
                href="/gallery"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                Image Gallery
              </Link>
              <Link
                href="/enroll"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                Enroll Now
              </Link>
            </nav>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-footer-foreground">
              Popular Courses
            </h4>
            <nav className="space-y-2">
              <Link
                href="#"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                Nursing Assistant
              </Link>
              <Link
                href="#"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                OT Technicians
              </Link>
              <Link
                href="#"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                Medical Lab Technology (DMLT)
              </Link>
              <Link
                href="#"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                Dialysis Technology
              </Link>
              <Link
                href="#"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                MRI/CT Scan Technician
              </Link>
              <Link
                href="#"
                className="block text-footer-muted hover:text-primary transition-colors duration-200 text-sm"
              >
                X-ray Technician
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-footer-foreground">
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-footer-muted text-sm leading-relaxed">
                  Global Education Institute of Paramedical Science,
                  <br />
                  Malad (East), Mumbai, India
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-footer-muted text-sm">
                  <Link
                    href="tel:+911234567890"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    +91 12345 67890
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-footer-muted text-sm">
                  <Link
                    href="mailto:info@geips.edu"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    info@geips.edu
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-footer-muted text-sm leading-relaxed">
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat: 9:00 AM - 2:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-footer-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-footer-muted text-sm">
              © {currentYear} Global Education Institute of Paramedical Science.
              All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-footer-muted hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-footer-muted hover:text-primary transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/contact"
                className="text-footer-muted hover:text-primary transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
