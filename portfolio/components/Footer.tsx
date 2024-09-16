import { GoMail } from "react-icons/go";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
         Let's build<span className="text-purple"> your</span> vision and take it to new heights
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s team up today to create something amazing
        </p>
        <div className="flex flex-row ">
            <div className="flex px-2 items-center">
            <a href="mailto:dhirendrasingh.contact@gmail.com">
                <MagicButton
                    title="Let's get in touch"
                    icon={<GoMail />}
                    position="right"
                />
            </a>
            </div>
            <div className="flex flex-row space-x-4 items-center px-4 md:mt-10">
            {socialMedia.map((info) => (
            <Link href={info.link} key={info.id}>
            <div
              
              className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-500"
            >
              
              <img src={info.img} alt="icons" width={22} height={22} />
            </div>
            </Link>
          ))}

            </div>

        </div>

      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-xs  font-light text-white-200">
          Copyright © 2024 Dhirendra Singh | Developed with NextJs & Aceternity UI | UI reference JS Mastery YT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
