import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Business', path: '/business' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              COTTON WORLD<span className="text-green-600"> SOURCING</span>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              className="text-lg text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              MENU
            </button>
          </div>
          <div className="hidden space-x-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium ${location.pathname === item.path ? 'text-green-600' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="text-xl font-bold text-gray-900" onClick={() => setIsOpen(false)}>
              COTTON WORLD<span className="text-green-600"> SOURCING</span>
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-600" aria-label="Close Menu">
              &times;
            </button>
          </div>

          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-lg text-gray-800 transition-colors hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="flex mb-4 space-x-4 text-xl text-gray-600">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
            <div className="text-sm text-gray-600">
              <p>info@CWS.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
