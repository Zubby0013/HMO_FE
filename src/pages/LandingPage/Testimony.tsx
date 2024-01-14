import { TemplateCard } from "./TemplateCard";
import { arr } from "./templateArr";

export const Testimony = () => {
  return (
    <div>
      <div className="pb-20">
        <center className="text-[40px] font-bold my-10 capitalize">
          Hear What Our <br /> client say
        </center>

        <div className="w-full flex justify-center">
          <div className="w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 ">
              {arr.map((el) => (
                <TemplateCard
                  desc={el.desc}
                  img={el.img}
                  name={el.name}
                  title={el.title}
                  role={el.role}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
