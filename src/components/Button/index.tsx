import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  return (
    <button>{props.children}</button>
  )
}

export default Button;