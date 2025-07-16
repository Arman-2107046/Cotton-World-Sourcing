import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Business = () => {
  return (
    <>
      <Navbar />

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
          <h1 className="text-[5rem] text-gray-600 leading-tight">
            <span className="">EMPOWERING</span>
            <br />
            <span className="">FUTURE-READY</span>
            <br />
            <span className="">BUSINESS</span>
          </h1>

          <p className="hero-subtitle text-[3rem] text-gray-700 ">
            Cotton World Sourcing
          </p>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Business;
