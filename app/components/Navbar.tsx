export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">My App</h1>
          </div>
          <div className="flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
