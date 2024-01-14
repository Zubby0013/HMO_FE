import { FaCircleCheck } from "react-icons/fa6";
import Button from "../../components/reUse/Button";
import { RiRegisteredFill } from "react-icons/ri";
import dashboard from "../../assets/63902f1c48764912786ac181_illustr-free-p-800.png";
import bg from "../../assets/63902f1c48764924db6ac172_shape-02.svg";

export const Price = () => {
  return (
    <div>
      <div className="my-20">
        <div className="w-full rounded-[30px] overflow-hidden py-10 pb-0 flex items-center border min-h-[400px] bg-sky-50 border-sky-300 flex-wrap">
          <div className="lg:w-1/2 w-full pl-10 flex flex-col justify-center">
            <div className="text-[30px] font-bold">
              Use HMO For <br /> Just ₦2k
            </div>

            <div className="flex flex-col gap-2 my-3">
              <div className="flex items-center gap-3 text-sky-500">
                <FaCircleCheck />
                <div>Unlimited free Plan</div>
              </div>
              <div className="flex items-center gap-3 text-sky-500">
                <FaCircleCheck />
                <div>Unlimited free Plan</div>
              </div>
              <div className="flex items-center gap-3 text-sky-500">
                <FaCircleCheck />
                <div>Unlimited free Plan</div>
              </div>
            </div>

            <div className="flex items-center">
              <Button
                name="Register"
                icon={<RiRegisteredFill />}
                className="bg-[#3b82f6] m-0 mt-3 "
              />
              <Button
                name="Schedule A Demo"
                className="border-none text-sky-600 font-medium text-[18px] m-0 mt-3 "
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-[400px] relative">
            <div
              className="absolute w-full bottom-0 h-full bg-contain bg-no-repeat bg-left"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <img
                src={dashboard}
                className="rounded-br-[30px] w-[90%] max-h-[100%] absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
