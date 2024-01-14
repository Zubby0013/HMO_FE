import { FC } from "react";

interface iTempCard {
  img: string;
  name: string;
  role: string;
  title: string;
  desc: string;
}

export const TemplateCard: FC<iTempCard> = ({
  img,
  desc,
  name,
  role,
  title,
}) => {
  return (
    <div>
      <div className="border rounded-md bg-white p-5">
        <div className="flex gap-5 items-center">
          <div
            className="rounded-full w-[50px] h-[50px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />

          <div>
            <div className="text-[16px]">
              <strong>{name}</strong>
            </div>

            <div className="text-sm text-gray-400">{role}</div>
          </div>
        </div>

        <div className="text-[18px] my-6 font-semibold">{title}</div>

        <div className="text-[15px] w-[90%]">{desc}</div>
      </div>
    </div>
  );
};
