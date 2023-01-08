import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

import styled from "styled-components";
import { ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Hover = styled.button<ButtonProps>`
  // label: ${(props) => props.label};
  border: 0;
  line-height: 1;
  font-size: ${(props) =>
    props.size === "xs" ? "14px" : props.size === "lg" ? "16px" : "16px"};
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  width: ${(props) =>
    props.size === "xs"
      ? "111px"
      : props.size === "sm"
      ? "134px"
      : props.size === "base"
      ? "142px"
      : props.size === "md"
      ? "142px"
      : props.size === "lg"
      ? "156px"
      : "142px"};
  height: ${(props) =>
    props.size === "xs"
      ? "32px"
      : props.size === "sm"
      ? "36px"
      : props.size === "base"
      ? "40px"
      : props.size === "md"
      ? "42px"
      : props.size === "lg"
      ? "46px"
      : "40px"};
  border-radius: ${(props) =>
    props.size === "xs"
      ? "6px"
      : props.size === "sm"
      ? "6px"
      : props.size === "base"
      ? "8px"
      : props.size === "md"
      ? "8px"
      : props.size === "lg"
      ? "10px"
      : "10px"};
  display: inline-block;
  size: ${(props) => props.size};
  padding: ${(props) =>
    props.size === "xs"
      ? "8px 16px"
      : props.size === "sm"
      ? "8px 20px"
      : props.size === "base"
      ? "8px 20px"
      : props.size === "md"
      ? "8px 20px"
      : props.size === "lg"
      ? "12px 24px"
      : "8px 20px"};
  color: ${(props) => (props.primary ? "#E74243" : "#ffffff")};
  background-color: ${(props) =>
    props.primary ? "#ffffff" : "rgba(39, 39, 39, 0.2)"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? "#FFF6F6" : "#FFF6F6")};
  }
`;

export const Focused = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: ${(props) =>
    props.size === "xs" ? "14px" : props.size === "lg" ? "16px" : "16px"};
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  width: ${(props) =>
    props.size === "xs"
      ? "111px"
      : props.size === "sm"
      ? "134px"
      : props.size === "base"
      ? "142px"
      : props.size === "md"
      ? "142px"
      : props.size === "lg"
      ? "156px"
      : "142px"};
  height: ${(props) =>
    props.size === "xs"
      ? "32px"
      : props.size === "sm"
      ? "36px"
      : props.size === "base"
      ? "40px"
      : props.size === "md"
      ? "42px"
      : props.size === "lg"
      ? "46px"
      : "40px"};
  border-radius: ${(props) =>
    props.size === "xs"
      ? "6px"
      : props.size === "sm"
      ? "6px"
      : props.size === "base"
      ? "8px"
      : props.size === "md"
      ? "8px"
      : props.size === "lg"
      ? "10px"
      : "10px"};
  display: inline-block;
  size: ${(props) => props.size};
  padding: ${(props) =>
    props.size === "xs"
      ? "8px 16px"
      : props.size === "sm"
      ? "8px 20px"
      : props.size === "base"
      ? "8px 20px"
      : props.size === "md"
      ? "8px 20px"
      : props.size === "lg"
      ? "12px 24px"
      : "8px 20px"};
  color: ${(props) => (props.primary ? "#E74243" : "#ffffff")};
  background-color: ${(props) =>
    props.primary ? "#ffffff" : "rgba(39, 39, 39, 0.2)"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? "#FFF6F6" : "#FFF6F6")};
  }
  &:active {
    border: solid 4px #ee7879;
    padding: ${(props) =>
      props.size === "sm"
        ? "5px 23px 6px"
        : props.size === "md"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

