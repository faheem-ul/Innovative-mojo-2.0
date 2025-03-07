"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import Text from "../ui/Text";

import logo from "@/public/logo.svg";
import instagram from "@/public/images/footer/instagram.svg";
import facebook from "@/public/images/footer/facebook.svg";
import linkedin from "@/public/images/footer/linkedin.svg";
import footerBg from "@/public/images/footer/footerbg.png";

const Footer = () => {
  const currentpathname = usePathname();
  return (
    <footer
      className="relative text-white min-h-[700px] flex justify-center items-center"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      {/* Background Image using <Image> */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={footerBg}
          alt="Footer Background"
          layout="fill"
          quality={100}
          className={cn(
            "",
            currentpathname === "/packages" ? "mojoeffect-gradient" : ""
          )}
        />
      </div>

      {/* Footer Content */}
      <div className="relative px-5 w-full max-w-[1313px] mob:mt-[250px] mob:mb-[100px] flex mob:flex-col xl:flex-column xl:justify-center xl:items-center xl:gap-10 justify-between items-center z-10">
        {/* Left Section */}
        <div className="max-w-[600px] text-center md:text-left">
          <Image
            src={logo}
            alt="Innovative Mojo"
            width={150}
            height={40}
            className="mb-5 mx-auto md:mx-0"
          />

          <Text as="h3" className="text-[26px] leading-[37px]">
            Innovative MOJO{" "}
            <span className="text-gold">20+ years of experience</span>, powered
            by real conversations and real solutions.
          </Text>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row md:gap-20 mt-10 md:mt-0 text-center mob:flex-col md:text-left mob:items-start mob:w-full mob:gap-[18px]">
          {/* Links */}
          <ul className="space-y-[18px] mob:text-left">
            <li>
              <a href="/" className="text-[16px] font-poppins">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="text-[16px] font-poppins">
                Projects
              </a>
            </li>
            <li>
              <a href="/news" className="text-[16px] font-poppins">
                News
              </a>
            </li>
            <li>
              <a href="/help-center" className="text-[16px] font-poppins">
                Help center
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-[16px] font-poppins">
                Privacy policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="text-[16px] font-poppins"
              >
                Terms and conditions
              </a>
            </li>
          </ul>
          <div>
            {/* Contact Info */}
            <ul className="space-y-[18px] mob:text-left">
              <li>
                <Link
                  href="mailto:sales@innovativemojo.com"
                  className="text-[16px] font-poppins"
                >
                  sales@innovativemojo.com
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[16px] font-poppins">
                  Schedule a meeting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[16px] font-poppins">
                  Work with us
                </Link>
              </li>
              <li>
                <a href="/" className="text-[16px] font-poppins">
                  Innovativemojo.com
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex gap-6 mt-[20px]">
              <Link href="#">
                <Image src={facebook} alt="Facebook" width={30} height={30} />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="Instagram" width={30} height={30} />
              </Link>
              <Link href="#">
                <Image src={linkedin} alt="LinkedIn" width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
