import React from "react";

type CardProps = {
  children?: React.ReactNode;
  style?: String;
};

function Card({ children, style }: CardProps) {
  return (
    <div
      className={`h-96 w-72 xl:h-[584px] xl:w-[388px] bg-black mb-4 p-4 rounded-md ${style}`}
    >
      {children}
    </div>
  );
}

export default Card;
