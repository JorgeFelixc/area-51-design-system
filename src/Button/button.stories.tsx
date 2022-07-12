import { Meta } from "@storybook/html";
import Button, { A51ButtonProps } from ".";

export default {
  title: "Button",
} as Meta;

const Template = (args: A51ButtonProps) => (
  <div class="area51-space-y-4">
    <Button {...args} />
    <div class="area51-space-x-4">
      <Button size="lg">Large Primary</Button>
      <Button size="md">Medium Primary</Button>
      <Button size="xs">Small Primary</Button>
    </div>
  </div>
);

export const PrimaryButton = Template.bind({});

PrimaryButton.args = { children: "primary", size: "md", variant: "primary" };
