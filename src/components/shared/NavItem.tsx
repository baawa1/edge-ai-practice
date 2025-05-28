interface NavItemProps {
  name: string;
  path: string;
}

const NavItem = ({ name, path }: NavItemProps) => {
  return (
    <>
      <li
        key={name}
        className="flex items-center justify-center w-full md:w-auto px-3 py-1.5 border-1 border-gray-300 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600 rounded-md transition-colors duration-300 ease-in-out text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 text-base cursor-pointer"
      >
        <a href={path} className="">
          {name}
        </a>
      </li>
    </>
  );
};
export default NavItem;
