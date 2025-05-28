interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={` text-heading-3 md:text-lg text-gray-700 dark:text-gray-300 text-base ${className}`}
    >
      {children}
    </p>
  );
};
export default Paragraph;
