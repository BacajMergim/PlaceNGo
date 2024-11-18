import cs from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
// import { Spinner } from "../Spinner/Spinner";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, children, loading, ...rest } = props;
  return (
    <button
      className={cs(
        "w-max flex items-center justify-center py-2.5 px-14 font-medium border-blue-darker border hover:bg-gray-700 hover:bg-opacity-25  ",
        className
      )}
      {...rest}
    >
      {/* {loading ? <Spinner /> : children} */}

      {children}
    </button>
  );
};

export default Button;
