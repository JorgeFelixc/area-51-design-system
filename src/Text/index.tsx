import { ParentComponent } from "solid-js";

const Text: ParentComponent = (props) => (
  <p class="text-base text-gray-700">{props.children}</p>
);

export default Text;
