import Container from "../shared/Container";

const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center items-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-4 sm:py-4 max-w-5xl rounded-3xl bg-box-bg
                        border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4"
        >
          <div className="text-center p-5">
            <h3 className="font-semibold text-xl sm:text-2x1 md:text-4x1 text-heading-1">
              1000+
            </h3>
            <p className="mt-2 text-heading-3">Projects Completed</p>
          </div>
          <div className="text-center p-5">
            <h3 className="font-semibold text-xl sm:text-2x1 md:text-4x1 text-heading-1">
              500+
            </h3>
            <p className="mt-2 text-heading-3">Happy Clients</p>
          </div>
          <div className="text-center p-5">
            <h3 className="font-semibold text-xl sm:text-2x1 md:text-4x1 text-heading-1">
              300+
            </h3>
            <p className="mt-2 text-heading-3">Active Users</p>
          </div>
          <div className="text-center p-5">
            <h3 className="font-semibold text-xl sm:text-2x1 md:text-4x1 text-heading-1">
              24/7
            </h3>
            <p className="mt-2 text-heading-3">Support Available</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Numbers;
