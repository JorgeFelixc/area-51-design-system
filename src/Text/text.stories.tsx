import { Meta } from "@storybook/html";
import Text from ".";

export default {
  title: "Text",
} as Meta;

const Template = (args: any) => <Text {...args} />;

export const TextTemplate = Template.bind({});
TextTemplate.args = { children: "Primary text" };
