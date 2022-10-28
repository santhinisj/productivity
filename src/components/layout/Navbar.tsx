import Link from "next/link";
import { useContext } from "react";
import { SITE_TITLE } from "../../constants/constants";
import { UserContext } from "../../contexts/UserContext";

const Navbar = () => {
  const { username, setUsername } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setUsername("");
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 bg-orange-50 border-b-2 border-slate-700">
      <h2 className="text-lg font-extrabold">
        <Link href="/">
          <a>{SITE_TITLE}</a>
        </Link>
      </h2>
      <nav>
        <ul className="flex items-center">
          {username ? (
            <>
              <NavLink href="/">Timer</NavLink>
              <NavLink href="/stats">Stats</NavLink>
              <button
                onClick={handleLogout}
                className="border-black border-2 py-1 px-3 ml-8 rounded hover:border-lime-500 hover:text-lime-500"
                type="button"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink href="/login">Login</NavLink>
              <NavLink href="/signup">Signup</NavLink>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <li className="ml-8 hover:border-b-2 hover:border-slate-800">
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default Navbar;
