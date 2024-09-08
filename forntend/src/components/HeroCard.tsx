import { ReactElement, ReactNode } from "react";

interface CardValues {
  borderColor: string;
  bgColor?: string;
  title: string;
  svgIcon?: ReactElement;
  titleColor: string;
  content: ReactNode;
  button1Content: string;
  button2Content?: string;
}

export const HeroCard = ({
  borderColor,
  bgColor,
  title,
  svgIcon,
  titleColor,
  content,
  button1Content,
  button2Content,
}: CardValues) => {
  return (
    <div
      className={`h-60 w-99 rounded-2xl border-2 border-opacity-10 shadow-sm  border-custom-nav-line-gray  ${borderColor} ${bgColor}`}
    >
      <div className="mt-5 mx-5">
        <div className="h-24">
          <div className="flex ">
            {svgIcon ? <span className="mt-1 mr-2">{svgIcon}</span> : null}
            <div className={`${titleColor} text-xl font-bold`}>{title}</div>
          </div>
          <div className={`${titleColor} font-medium text-lg my-3`}>
            {content}
          </div>
        </div>
        <div className=" h-14 mt-10 flex justify-start">
          {button2Content ? (
            <button className="bg-Homepage-bg h-10 w-28 mt-2 text-md border-custom-search-gray mr-3 border-opacity-20  text-custom-button-black text-md border-2  shadow-sm rounded-lg">
              <div className="px-2">{button2Content}</div>
            </button>
          ) : null}
          <button className="bg-custom-button-black h-10 mt-2 text-md w-48 text-Homepage-bg border-2 border-opacity-20  shadow-sm rounded-lg">
            <div className="px-2">{button1Content}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
