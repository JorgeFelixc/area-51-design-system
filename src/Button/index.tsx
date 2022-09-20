import { JSX, createMemo } from "solid-js";
import "./button.css";

/* Button Variant style */
type ButtonVariantType = "primary" | "outline";
type ButtonVariants = {
  [key in ButtonVariantType]: string;
};
const ButtonVariants: ButtonVariants = {
  primary: "a51-btn-primary",
  outline: "a51-btn-outline",
};

/* Button Size use 
  This properties should stay fo general options,
  variants too, but not at all
*/
type ButtonSizeType = "xs" | "md" | "lg";
type ButtonSizes = {
  [key in ButtonSizeType]: string;
};
const ButtonSizes: ButtonSizes = {
  xs: "area51-py-1 area51-px-2",
  md: "area51-py-2 area51-px-4",
  lg: "area51-py-4 area51-px-8",
};

export interface A51ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
}

const tailwindStyles = "area51-rounded area51-cursor-pointer";
const Button = (props: A51ButtonProps) => {
  const buttonClasses = createMemo(() => {
    const size = ButtonSizes[props.size] || ButtonSizes.md;
    const variant = ButtonVariants[props.variant] || ButtonVariants.primary;
    return `${tailwindStyles} ${size} ${variant}`;
  });

  return (
    <button {...props} class={buttonClasses()}>
      {props.children}
    </button>
  );
};

export default Button;
