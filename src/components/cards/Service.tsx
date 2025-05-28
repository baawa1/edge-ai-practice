import Paragraph from "../shared/Paragraph";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <>
      <div className="p-5 sm:p-6 lg:p-9 rounded-3xl border border-box-border bg-box-bg relative overflow-hidden shadow-lg shadow-box-shadow hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative">
          {icon}
        </div>
        <div className="mt-4 sm:mt-6 lg:mt-8 space-y-4 relative">
          <h3 className="text-lg md:text-2xl font-semibold text-heading-2">
            {title}
          </h3>
          <Paragraph className="text-gray-600">{description}</Paragraph>
        </div>
      </div>
    </>
  );
};
export default Service;
