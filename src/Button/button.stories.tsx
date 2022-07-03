import { Meta } from "@storybook/html";
import Button from ".";

export default {
  title: "Button",
} as Meta;

const Template = (args: any) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { children: "primary" };
