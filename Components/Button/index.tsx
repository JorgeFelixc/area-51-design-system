import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  return <button class="bg-sky-900 rounded py-2 px-4">{props.children}</button>;
};

export default Button;
