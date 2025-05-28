import Paragraph from "../shared/Paragraph";

interface InfoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Info = ({ title, description, children }: InfoProps) => {
  return (
    <div className="p-4 sm:p-5 lg:p-6 rounded-3xl border border-box-border bg-box-bg relative overflow-hidden shadow-lg shadow-box-shadow hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="rounded-xl bg-gray-200 dark:bg-gray-950 p-3 text-heading-1 w-max relative mb-4">
        {children}
      </div>
      <h2 className="text-heading-2 w-max relative font-semibold md:text-xl mb-2">
        {title}
      </h2>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
export default Info;
