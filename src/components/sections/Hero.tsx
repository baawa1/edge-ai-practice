import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Numbers from "./Numbers";

const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-42">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 size-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className=" absolute right-4 bottom 12 size-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>
        <div className="relative flex flex-col items-center text-center justify-center w-full lg:flex-1 lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:w-1/2">
          <h1 className=" text-heading-1 text-4xl md:text-5xl lg:text-6xl font-bold">
            Build Your Ideas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">
              Without Code
            </span>
          </h1>
          <Paragraph className="mt-8">
            {" "}
            Create stunning websites and applications effortlessly with our
            no-code platform. Empower your creativity and bring your ideas to
            life without writing a single line of code. Join the no-code
            revolution today!
          </Paragraph>

          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col w-full gap-5">
              <form
                action=""
                method="post"
                className="py-1 pl-6 pr-1 flex gap-3 w-full items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary border-gray-400 dark:border-gray-700"
              >
                <span className="min-w-max pr-2 border-r border-box-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </span>
                <label htmlFor="email" className="hidden">
                  Enter your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full py-2 rounded-md outline-none bg-transparent"
                  required
                />

                <button
                  type="submit"
                  className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors duration-300 curepor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-3xl">
          <img
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
          />
        </div>
      </Container>
      <Numbers />
    </section>
  );
};
export default Hero;
