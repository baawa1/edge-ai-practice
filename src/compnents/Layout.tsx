import { useEffect } from "react";
import Footer from "./elements/Footer";
import Navbar from "./elements/Navbar";

// Define the type for the props that the Layout component will receive
interface LayoutPropos {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutPropos) => {
  // Set the document title when the component mounts or when the title prop changes
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
