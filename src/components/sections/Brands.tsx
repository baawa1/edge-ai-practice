import Container from "../shared/Container";
import Title from "../shared/Title";
import discord from "../../assets/logos/discord.png";
import openai from "../../assets/logos/openai.png";
import paypal from "../../assets/logos/paypal.png";
import slack from "../../assets/logos/slack.png";
import spotify from "../../assets/logos/spotify.png";
import uber from "../../assets/logos/uber.png";
import youtube from "../../assets/logos/youtube.png";

const logos = [discord, openai, paypal, slack, spotify, uber, youtube];

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
              className="p-4 sm:p-3 rounded-xl bg-body border border-box-border group border-gray-400 dark:border-gray-700"
              key={index}
            >
              <img
                key={index}
                src={logo}
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
