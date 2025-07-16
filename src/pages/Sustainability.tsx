import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const Sustainability = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section for sustainability  */}

      <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-slate-200">
        <div
          className="absolute top-0 left-0 w-full h-full z-[-1]"
          // style={{
          //   backgroundImage: `url(${bgImages[currentSlide]})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
        />

        {/* HERO CONTENT HERE LET'S DO IT */}

        <div className="hero-content">
          <h1 className="text-[5rem] text-gray-600">
            <span className="">ENGAGING WITH </span>
            <br />
            <span className="">SUSTAILABLE </span>
            <br />
            <span className="">WORLD</span>
          </h1>

          <p className="hero-subtitle text-[3rem] text-gray-700 ">
            Cotton World Sourcing
          </p>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Sustainability;
