import Container from "../shared/Container";
import logo from "../../assets/icon.svg";
import { navItems } from "./Navbar";

const Footer = () => {
  return (
    <footer className="relative bg-box-bg border-t border-t-gray-300 dark:border-t-gray-700">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} alt="Nocode Dev" className="size-7" />
            <span className="text-lg font-semibold text-heading-1">
              Nocode Dev
            </span>
          </div>
          <ul className="flex flex-wrap gap-3 text-gray-500 dark:text-gray-300">
            {navItems.map(({ name, path }, index) => (
              <li key={index} className="">
                <a href={path} className="">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
