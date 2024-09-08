import React, { ReactNode } from "react";

interface StatCardProps {
  title: string;
  content?: string[];
  stat?: string;
  icon?: ReactNode;
  buttonText?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  content,
  stat,
  icon,
  buttonText,
}) => {
  return (
    <div className="p-4 w-64 bg-[#956F00] rounded-xl shadow-lg text-white">
      <div className="mx-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="my-11">
          {content &&
            content.map((text, index) =>
              index === 2 ? (
                <div className="flex mr-0.3 mt-0.3">
                  <p key={index} className="text-lg my-6">
                    {text}
                  </p>
                  <div>{icon}</div>
                </div>
              ) : (
                <p key={index} className="text-lg my-6">
                  {text}
                </p>
              )
            )}
        </div>
        {stat && (
          <div className="text-5xl font-bold flex items-center justify-center mt-4">
            <span>{stat}</span>
          </div>
        )}

        {buttonText && (
          <button className="mt-9  px-4 py-2 bg-white text-custom-search-gray font-bold rounded">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default StatCard;
