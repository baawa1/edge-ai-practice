interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h2 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10">
      {children}
    </h2>
  );
};
export default Title;
