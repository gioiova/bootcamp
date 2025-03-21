import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ProductStore
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-300 transition-colors">
                Products
              </Link>
            </li>
    
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;