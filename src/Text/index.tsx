import { Component, JSXElement } from "solid-js";

const Text: Component<{ children: JSXElement }> = (props) => {
  return <p class="text-base text-gray-700">{props.children}</p>;
};

export default Text;
