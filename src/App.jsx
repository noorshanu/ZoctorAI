import CoinMarquee from "./components/CoinMarquee";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import BelowSec from "./sections/BelowSec";
import ContactUs from "./sections/ContactUs";
import Cta from "./sections/Cta";
import Hero from "./sections/Hero";
import Hero2 from "./sections/Hero2";
import MobilePhone from "./sections/MobilePhone";
import OurPartners from "./sections/OurPartners";
import Partners from "./sections/Partners";
import Services from "./sections/Services";
import Teams from "./sections/Teams";
import WhatotherSay from "./sections/WhatotherSays";

function App() {
  return (
    <>
      <div className=" overflow-visible sm:overflow-x-clip ">
        <div className="css-1vx3a4p"></div>
        <Navbar />

        {/* <Hero /> */}
        <Hero2 />

        <div className=" mb-4">
          <BelowSec />
        </div>
        <div className=" mb-4">
          <Partners />
        </div>
        {/* <MobilePhone/> */}

        <About />

        <div className=" h-[30px]"></div>

        <Services />
        <div className=" h-[30px]"></div>

        <div>
          <Cta />
        </div>
        <div className=" py-8">
          <WhatotherSay />
        </div>

        <div className=" py-8">
          <ContactUs />
        </div>

        <div className=" py-8">
          <OurPartners />
        </div>

        <CoinMarquee />
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
