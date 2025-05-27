import Container from "../shared/Container";
import logo from "../../assets/logos/icon.svg";
import NavItem from "../shared/NavItem";
import ButtonLink from "../shared/ButtonLink";
import { useThemeStore } from "../../store/ThemeStore";

const navItems = [
  { name: "Home", path: "# " },
  { name: "Services", path: "#services" },
  { name: "About Us", path: "#about-us" },
  { name: "Features", path: "#features" },
  { name: "Blog", path: "#blog" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  return (
    <header className="absolute inset-x-0 top-0 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-50">
      <Container>
        <nav className="flex items-center justify-between w-full">
          <a href="/" className=" flex items-center justify-center gap-2">
            <img src={logo} alt="NocodeDev" className="size-8" />
            <span className="sr-only">NocodeDev</span>
            <div className="text-xl font-bold text-gray-800 text-heading-1">
              Nocode Dev
            </div>
          </a>
          <ul className="flex gap-2 md:gap-3 flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0">
            {navItems.map(({ name, path }) => (
              <NavItem name={name} path={path} />
            ))}
          </ul>
          <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
            <ButtonLink href="#get-started" text="Get Started" className="" />
            <div className="min-w-max">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:scale-110 transition-all duration-300 ease-in-out border border-gray-500 hover:border-gray-600 cursor-pointer  text-gray-500 hover:text-gray-400 dark:text-gray-500 dark:hover:text-gray-700"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
export default Navbar;
