interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`container mx-auto max-w-[80rem] px-5 sm:px-8 md:px-14 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};
export default Container;
