import { ParentComponent } from "solid-js";

const Button: ParentComponent = (props) => {
  return (
    <button class="area51-bg-emerald-700 area51-text-white area51-p-2 area51-px-4 area51-rounded active:area51-bg-emerald-900">
      {props.children}
    </button>
  );
};

export default Button;
