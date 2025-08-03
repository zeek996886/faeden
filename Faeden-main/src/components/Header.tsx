import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isProductsOpen, setIsProductsOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-gray-900">
                <span className="text-gray-600">◊</span> FRAMEN
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Products
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <a href="#ads-manager" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                    <div className="font-medium">Ads Manager</div>
                    <div className="text-xs text-gray-500">Launch and manage DOOH campaigns</div>
                  </a>
                  >
                    <div className="font-semibold text-gray-900 mb-1">Ads Manager</div>
                    <div className="text-xs text-gray-500">Launch and manage DOOH campaigns with precision targeting</div>
                  </a>
                  <a 
                    href="/screen-manager" 
                    className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="font-semibold text-gray-900 mb-1">Screen Manager</div>
                    <div className="text-xs text-gray-500">Control and optimize your digital signage network</div>
                  </a>
                </div>
              )}
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              href="/pricing"
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
              Login / Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-700">Products</div>
                <a
                  href="/ads-manager"
                  className="block px-6 py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Screen Manager
                </a>
              </div>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Products
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                href="/pricing"
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Resources
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Contact
              </a>
              <button className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition-colors">
                Login / Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;