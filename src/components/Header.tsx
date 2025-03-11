const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full">
      <nav className="w-full">
        <ul className="flex flex-col md:flex-row justify-around gap-4 items-center mt-4 md:mt-0">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
