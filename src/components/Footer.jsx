import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <section className=" relative mt-1">
      <div className=" container-wrapper border-t border-[#005eff9d]">
        <div className=" flex justify-between flex-col sm:flex-row items-center mt-4 ">
          <div>
            <img src="images/logo.png" alt="" className=" h-[140px]" />
          </div>

          <div className=" flex items-center justify-center flex-col sm:flex-row gap-4">
            <a href="/" className=" text-sm font-thin"> Privacy & Policy</a>

            <a href="/" className=" text-sm font-thin" >Terms & Conditions</a>
          </div>

          <div>
            <div className="flex gap-7 text-[42px]">
              <a
                target="_blank"
                href="https://www.instagram.com/mark8.io/"
                className="hover:text-prime transition-all duration-200"
              >
                <FaInstagram />
              </a>

              <a
                target="_blank"
                href="https://twitter.com/Mark_8_"
                className="hover:text-prime transition-all duration-200"
              >
                <FaTwitter />
              </a>

              <a
                target="_blank"
                href="https://t.me/Mark8_Io"
                className="hover:text-prime transition-all duration-200"
              >
                <BsTelegram />
              </a>

              {/* <a
                target="_blank"
                href="#"
                className="hover:text-prime transition-all duration-200"
              >
                <FaFacebook />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className=" text-center font-thin text-[#ddd]">
          © 2024 Mark8.io. All rights reserved
        </p>
      </div>
    </section>
  );
}

export default Footer;
