interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={` text-heading-3 text-gray-700 dark:text-gray-300 ${className}`}
    >
      {children}
    </p>
  );
};
export default Paragraph;
