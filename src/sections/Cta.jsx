import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Cta() {
  const wrapper = useRef();
  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: wrapper.current,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    {
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  return (
    <section ref={wrapper} className=" py-8">
      <div
        ref={container}
        className=" container-wrapper py-12 px-6 bg-[#1a1a1a] border border-[#757575] rounded-2xl will-change-transform"
      >
        <div className=" flex flex-col justify-center gap-2 items-center">
          <h1 className=" text-2xl sm:text-5xl font-manbold font-bold text-center py-1">
            <span className=" txt-grad ">Tell us your marketing challenge</span>
            , and we'll
          </h1>

          <h1 className="text-2xl sm:text-5xl font-manbold font-bold text-center">
            prepare a customized solution for you.
          </h1>

          <p className=" py-6 text-center max-w-3xl">
            Select Mark8.io as your WEB3 digital marketing partner to chart a
            path for your company's growth in the blockchain, cryptocurrency,
            and NFT sectors. Click the "Contact Us" button to get started.
          </p>

          <a
          target="_blank"
            href="https://t.me/Mark8_Io"
            className="btn-main  px-4 py-1  rounded-2xl text-xl font-manbold mt-4"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
