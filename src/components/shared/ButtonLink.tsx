interface buttonLinkProps {
  href: string;
  text: string;
  className?: string;
}

const ButtonLink = ({ href, text, className }: buttonLinkProps) => {
  return (
    <>
      <button className="relative">
        <a
          href={href}
          className={`size-full px-5 py-3 dark:bg-violet-800 dark:hover:bg-violet-500 text-white rounded-full transition-all duration-300 ease-in-out overflow-hidden font-medium text-base hover:bg-violet-600 bg-violet-700 dark:hover:shadow-none hover:shadow-lg shadow-violet-500/50 hover:shadow-violet-500/50 ${className}`}
        >
          <span className="relative">{text}</span>
        </a>
      </button>
    </>
  );
};
export default ButtonLink;
