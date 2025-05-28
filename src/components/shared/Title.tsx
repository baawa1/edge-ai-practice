interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h2 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xlmb-8 md:mb-12 lg:mb-16">
      {children}
    </h2>
  );
};
export default Title;
