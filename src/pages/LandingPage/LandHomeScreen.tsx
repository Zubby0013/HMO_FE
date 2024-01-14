import { Testimony } from "./Testimony";
import { Price } from "./Price";
import { Footer } from "./Footer";

const LandHomeScreen = () => {
  return (
    <div className="w-full items-center flex flex-col ">
      <div className="w-full bg-[#f3fbfc] flex justify-center">
        <div className="w-[90%]">
          <Testimony />
        </div>
      </div>
      <div className="w-[60%]">
        <Price />
      </div>
      <Footer />
    </div>
  );
};

export default LandHomeScreen;
