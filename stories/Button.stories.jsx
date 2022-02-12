import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Apps/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
        labels: {
          default: 'Default',
          primary: 'Primary',
          secondary: 'Secondary',
        },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
        labels: {
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
        },
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['normal', 'outline', 'text'],
        labels: {
          normal: 'Normal',
          outline: 'Outline',
          text: 'Text',
        },
      },
    },
    disabled: {
      control: 'boolean',
    },
    disabledShadow: {
      control: 'boolean',
    },
    startIcon: {
      control: 'text',
    },
    endIcon: {
      control: 'text',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...props }) => <Button {...props}>
  {label}
</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Default',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
