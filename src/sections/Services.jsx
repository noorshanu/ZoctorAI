import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

function Services() {
  const wrapper = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.querySelectorAll(".service-card").forEach((card) => {
            card.classList.remove("no-transition");
          });
        },
        delay: 0.1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
          onLeaveBack: () => {
            document.querySelectorAll(".service-card").forEach((card) => {
              card.classList.add("no-transition");
            });
          },
        },
      });

      tl.fromTo(
        [text1.current, text2.current, text3.current],
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.3 }
      );

      tl.fromTo(
        ".service-card",
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
        "-=0.3"
      );
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <div className="mt-20 relative py-8" id="services">
      <div className="css-wee"></div>
      <div ref={wrapper} className=" container-wrapper">
        <div>
          <p ref={text1} className=" text-center text-prime">
            Effective solutions to business challenges for Web 3.0 projects
          </p>

          <h1
            ref={text2}
            className=" text-center text-3xl sm:text-5xl font-manbold font-bold py-2"
          >
            Our Industries
          </h1>

          <p ref={text3} className=" text-center py-2">
          Our leading cryptocurrency marketing firm has helped numerous companies and organizations achieve their promotional objectives. With extensive expertise in advancing Web 3.0 initiatives, we have the insight and skills to help you realize your full potential.
          </p>
        </div>

        <div className=" mt-4 justify-center gap-6 items-center grid grid-cols-1 sm:grid-cols-3">
          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/icons/soc.png"
              alt=""
              className=" mx-auto rounded-xl"
            />
            <h2 className=" text-center text-2xl font-manbold font-bold text-prime pb-2">
              Social Media Marketing
            </h2>

            <p className=" text-start pb-1 font-light">
              In the dynamic world of web3, a strong social media presence is
              crucial. Our social media marketing services include:
            </p>

            <ul className=" list-disc ml-4  font-normal">
              <li>Strategy Development</li>

              <li>Content Creation</li>
              <li>Platform Management</li>

              <li>Analytics & Reporting</li>
            </ul>

            <div className="flex justify-center items-center py-3">
              <a
                href="https://t.me/Mark8_Io" target="_blank"
                className="  rounded-3xl  py-1 px-4 text-center font-inter font-semibold mx-auto underline flex items-center gap-2"
              >
                Know More <FaArrowTrendUp className=" underline" />
              </a>
            </div>
          </div>

          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/icons/tier1.png"
              alt=""
              className=" mx-auto rounded-xl"
            />
            <h2 className=" text-center text-2xl font-inter font-bold  text-prime pb-2">
              Tier 1 & 2 Exchange Listing
            </h2>

            <p className=" text-start pb-1 font-light">
              Getting listed on top exchanges can significantly enhance your
              project's credibility and visibility. Our services include:
            </p>

            <ul className=" list-disc ml-4 ">
              <li>Research & Analysis </li>

              <li>Liquidity Provision</li>
              <li>Application Support</li>
              <li>Post-Listing Promotion</li>
            </ul>

            <div className="flex justify-center items-center py-3">
              <a
                href="https://t.me/Mark8_Io" target="_blank"
                className="  rounded-3xl  py-1 px-4 text-center font-inter font-semibold mx-auto underline flex items-center gap-2"
              >
                Know More <FaArrowTrendUp className=" underline" />
              </a>
            </div>
          </div>

          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/icons/public.png"
              alt=""
              className=" mx-auto rounded-xl"
            />
            <h2 className=" text-center text-2xl font-manbold font-bold text-prime pb-2">
              Public Relations (PR)
            </h2>

            <p className=" text-start pb-1">
              Building a strong public image is essential for any web3 project.
              Our PR services include:
            </p>

            <ul className=" list-disc ml-4 ">
              <li>Media Relations</li>

              <li>Press Releases</li>

              <li>Media Training</li>
              <li>Crisis Management</li>
            </ul>

            <div className="flex justify-center items-center  py-6">
              <a
                href="https://t.me/Mark8_Io" target="_blank"
                className="  rounded-3xl  py-1 px-4 text-center font-inter font-semibold mx-auto underline flex items-center gap-2"
              >
                Know More <FaArrowTrendUp className=" underline" />
              </a>
            </div>
          </div>

          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/icons/com.png"
              alt=""
              className=" mx-auto rounded-xl"
            />
            <h2 className=" text-center text-2xl font-manbold font-bold text-prime pb-2">
              Community Management
            </h2>

            <p className=" text-start pb-1">
              A vibrant and engaged community is the backbone of any successful
              web3 project. Our community management services include:
            </p>

            <ul className=" list-disc ml-4 ">
              <li>Community Building</li>

              <li>Engagement Strategies</li>
              <li>Moderation</li>

              <li>Feedback Management</li>
            </ul>

            <div className="flex justify-center items-center py-3">
              <a
                href="https://t.me/Mark8_Io" target="_blank"
                className="  rounded-3xl  py-1 px-4 text-center font-inter font-semibold mx-auto underline flex items-center gap-2"
              >
                Know More <FaArrowTrendUp className=" underline" />
              </a>
            </div>
          </div>

          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/icons/cmc.png"
              alt=""
              className=" mx-auto rounded-xl"
            />
            <h2 className=" text-center text-2xl font-manbold font-bold text-prime pb-2">
              CMG & CG Listing
            </h2>

            <p className=" text-start pb-1">
              Visibility on major crypto listing platforms like CoinMarketCap
              (CMC) and CoinGecko (CG) is crucial. Our services include:
            </p>

            <ul className=" list-disc ml-4 ">
              <li>Listing Preparation</li>
              <li>Application Process</li>

              <li>Post-Listing Optimization</li>
            </ul>
            <div className="flex justify-center items-center py-9">
              <a
                href="https://t.me/Mark8_Io" target="_blank"
                className="  rounded-3xl  py-1 px-4 text-center font-inter font-semibold mx-auto underline flex items-center gap-2"
              >
                Know More <FaArrowTrendUp className=" underline" />
              </a>
            </div>
          </div>

          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/icons/influ.png"
              alt=""
              className=" mx-auto rounded-xl"
            />
            <h2 className=" text-center text-2xl font-manbold font-bold text-prime pb-2">
              KOL & Influencer Marketing
            </h2>

            <p className=" text-start pb-1">
              Leverage the power of key opinion leaders (KOLs) and influencers
              to boost your brand’s reach. Our services include:
            </p>

            <ul className=" list-disc ml-4 ">
              <li>Influencer Identification</li>

              <li>Campaign Development</li>
              <li>Partnership Management</li>

              <li>Performance Tracking</li>
            </ul>
            <div className="flex justify-center items-center py-6">
              <a
                href="https://t.me/Mark8_Io" target="_blank"
                className="  rounded-3xl  py-1 px-4 text-center font-inter font-semibold mx-auto underline flex items-center gap-2"
              >
                Know More <FaArrowTrendUp className=" underline" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
