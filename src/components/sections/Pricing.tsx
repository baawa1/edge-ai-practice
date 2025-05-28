import { pricingPlans } from "../../utils/pricing-plans";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const Pricing = () => {
  return (
    <section id="pricing" className="py-5">
      <Container className="text-center">
        <Title>Pricing Plans</Title>
        <Paragraph className="max-w-1/2 text-center mx-auto">
          Our pricing is designed to be transparent and flexible, catering to
          businesses of all sizes. We offer a range of packages that can be
          tailored to meet your specific needs.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-18">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative group h-full">
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                  {plan.bestvalue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-heading-1">
                    {plan.title}
                  </h3>
                  <p className="mt-4 text-4xl font-semibold text-heading-1">
                    {plan.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-baseline gap-2">
                        {" "}
                        <span className="text-primary">✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="mt-4 text-white w-full transform transition-transform duration-30 ease-linear hover:scale-105">
                    Choose Plan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Pricing;
