import Button from "../shared/Button";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const CallToAction = () => {
  return (
    <section className="pb-20 relative" id="contact">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <Title>
              Quick Start your own{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Business
              </span>{" "}
              Now!
            </Title>
            <Paragraph>
              Leverage our AI-powered platform to revolutionize your digital
              marketing efforts. Get data-driven insights and automation at your
              fingertips.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button className="text-white">Get in Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default CallToAction;
