import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import About from "../components/About";
import Features from "../components/Features";

const LandingPage = () => {
  return (
    <>
    <div className="min-h-screen">
      <Navbar />
      <HeroPage />
      <About />

      {/* <Features /> */}
      </div>
    </>
  );
};

export default LandingPage;
