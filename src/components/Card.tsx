import React from "react";

type CardProps = {
  children?: React.ReactNode;
  style?: String;
};

function Card({ children, style }: CardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={handleCardClick}
      className={`h-96 w-72  bg-black mb-4 p-4 rounded-md ${style}`}
    >
      {children}
    </div>
  );
}

export default Card;
