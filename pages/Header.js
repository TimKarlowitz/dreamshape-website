import Link from 'next/link';
import Home from './index.js'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 px-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul>
            <li>
                <Link href="/">
                     Back Home
                </Link>
            </li>
            {/* Add more navigation links here if needed */}
          </ul>
        </nav>
        <h1 className="text-lg font-bold self-center justify-self-center">Contact Page</h1>
        <h1 className="text-lg font-bold self-center justify-self-center"></h1>
      </div>
    </header>
  );
};

export default Header;