import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1f2937] rounded-md">
                <span className="text-lg font-bold text-green-500">C</span>
              </div>
              <span className="text-xl font-semibold tracking-wide">Cotton World Sourcing</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Driving innovation and sustainability in global sourcing with uncompromising quality and commitment.
            </p>
            <div className="flex pt-2 space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 transition hover:text-green-500">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 transition hover:text-green-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 transition hover:text-green-500">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-400 transition hover:text-green-500">Home</Link></li>
              <li><Link to="/business" className="text-sm text-gray-400 transition hover:text-green-500">Business</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 transition hover:text-green-500">About</Link></li>
              <li><Link to="/sustainability" className="text-sm text-gray-400 transition hover:text-green-500">Sustainability</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 transition hover:text-green-500">Contact</Link></li>
            </ul>
          </div>

          {/* Optional: Expertise Section (Visible on lg+) */}
          <div className="hidden space-y-5 lg:block">
            <h3 className="text-lg font-semibold">Expertise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="transition hover:text-green-600">Textile Manufacturing</li>
              <li className="transition hover:text-green-600">Sourcing Strategy</li>
              <li className="transition hover:text-green-600">Sustainable Materials</li>
              <li className="transition hover:text-green-600">Logistics & Delivery</li>
              <li className="transition hover:text-green-600">Buyer Collaboration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>mosharraf@cottonworldsourcing.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+880 1611-419402, +880 01309-950194</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>123 Business Ave, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1f2937] mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Cotton World Sourcing. All rights reserved.
            <span className="ml-2 cursor-pointer hover:text-green-800">Privacy Policy</span> | 
            <span className="ml-2 cursor-pointer hover:text-green-800">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
