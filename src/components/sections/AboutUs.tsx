import Info from "../cards/Info";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const AboutUs = () => {
  return (
    <section id="about-us">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About Image"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Title>About NocodeDev</Title>
          <Paragraph className="text-lg">
            NocodeDev is a leading web design and development agency that
            specializes in creating beautiful, user-friendly websites without
            the need for coding. Our team of experts is dedicated to delivering
            high quality web solutions that meet the unique needs of our
            clients.
          </Paragraph>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:gap-10 mt-8 max-3xl">
            <Info
              title="Our Mission"
              description="To empower businesses with innovative web solutions that enhance their online presence and drive growth."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
            <Info
              title="Our Vision"
              description="To be the go-to agency for businesses looking to establish a strong online presence and achieve their digital goals."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v9m0 0l-3-3m3 3l3-3m-6 9h6m-6 0a9 9 0 100-18 9 9 0 000 18z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutUs;
