import Container from "../shared/Container";
import Title from "../shared/Title";

const logos = [
  "discord",
  "openai",
  "paypal",
  "slack",
  "spotify",
  "uber",
  "youtube",
];

const Brands = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center text-center ">
          <Title>Trusted by the best</Title>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {logos.map((logo, index) => (
            <div
              className="p-4 sm:p-3 rounded-xl bg-body border border-box-border group"
              key={index}
            >
              <img
                key={index}
                src={`src/assets/logos/${logo}.png`}
                alt={`${logo} logo`}
                width={100}
                height={60}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 group-hover:!grayscale-0 grayscale"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Brands;
