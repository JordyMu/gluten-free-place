import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SiteFooter = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="h-7 w-7 text-orange-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Helping celiac and gluten-free travelers find safe places to eat around the world.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/all-countries" className="hover:text-orange-500 transition-colors">All Countries</Link></li>
            <li><Link to="/#destinations" className="hover:text-orange-500 transition-colors">Destinations</Link></li>
            <li><Link to="/#reviews" className="hover:text-orange-500 transition-colors">Reviews</Link></li>
            <li><Link to="/#about" className="hover:text-orange-500 transition-colors">About</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Popular Regions</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/italy" className="hover:text-orange-500 transition-colors">Italy</Link></li>
            <li><Link to="/spain" className="hover:text-orange-500 transition-colors">Spain</Link></li>
            <li><Link to="/new-zealand" className="hover:text-orange-500 transition-colors">New Zealand</Link></li>
            <li><Link to="/australia" className="hover:text-orange-500 transition-colors">Australia</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Get Started</h3>
          <p className="text-sm text-gray-400 mb-4">
            Join our community and start discovering safe gluten-free dining today.
          </p>
          <Link to="/all-countries">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Explore Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <li><Link to="/about" className="hover:text-orange-500 transition-colors">About us</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            <li><Link to="/all-countries" className="hover:text-orange-500 transition-colors">Site map</Link></li>
          <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy</Link></li>
          <li><Link to="/terms" className="hover:text-orange-500 transition-colors">Terms &amp; conditions</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-white uppercase tracking-wide">Follow us</span>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-orange-500 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-orange-500 transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-orange-500 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-orange-500 transition-colors"><Youtube className="h-5 w-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gluten-Free Places. All rights reserved.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
