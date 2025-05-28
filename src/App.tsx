import Layout from "./compnents/Layout";
import Brands from "./compnents/sections/Brands";
import Hero from "./compnents/sections/Hero";

const App = () => {
  return (
    <Layout title="NocodeDev Web Design">
      <Hero />
      <Brands />
    </Layout>
  );
};
export default App;
