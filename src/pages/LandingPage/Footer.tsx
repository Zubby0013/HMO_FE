import {
  FaLinkedin,
  FaRegistered,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Button from "../../components/reUse/Button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full bg-gray-50 min-h-[40vh] flex justify-center">
      <div className="w-[80%] py-20">
        <div className="flex lg:justify-between w-full gap-10 justify-center h-full flex-wrap ">
          <div className="flex flex-col  gap-10">
            <div className="text-[24px] font-bold text-center lg:text-start">
              Logo
            </div>
            <div className="text-[14px] ">
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>

          <div className="flex flex-col  text-[14px] items-center gap-10">
            <div className="flex items-center gap-4 ">
              <nav>Features</nav>
              <nav>Pricing</nav>
              <nav>Blog</nav>
              <nav>Privacy policy</nav>
              <nav>Terms of Use</nav>
            </div>

            <div className="flex text-[26px] items-center gap-5">
              <div className="rounded-full border cursor-pointer hover:text-sky-500 transition-all duration-500 p-7">
                <FaYoutube />
              </div>
              <div className="rounded-full border cursor-pointer hover:text-sky-500 transition-all duration-500 p-7">
                <FaLinkedin />
              </div>
              <div className="rounded-full border cursor-pointer hover:text-sky-500 transition-all duration-500 p-7">
                <FaTwitter />
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start flex-col gap-10">
            <div className="flex items-center">
              <Link to="/login">
                <Button name="Login" className="border-none text-black" />
              </Link>
              <Link to="/register">
                <Button
                  name="Register"
                  icon={<FaRegistered />}
                  className="bg-[#3b82f6]"
                />
              </Link>
            </div>

            <div className="lg:text-end text-center text-sm">
              © 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
