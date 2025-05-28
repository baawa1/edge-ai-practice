import { servicesData } from "../../utils/services-data";
import Service from "../cards/Service";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:sapce-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>
            Our Services
            <span className="text-primary">.</span>
          </Title>
          <Paragraph className="text-lg">
            We offer a range of services to help you build and grow your online
            presence. From web design and development to digital marketing and
            SEO, our team is here to support your business needs.
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Services;
