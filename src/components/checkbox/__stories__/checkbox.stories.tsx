import type { Meta, StoryObj } from '@storybook/react';
import { default as Checkbox } from '../checkbox';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'changed' },
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'error'],
		}
	}
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		label: 'Default Checkbox',
		value: false,
		onChange: (event, properties) => {
			console.log('onChange', event, properties);
		},
	},
};

export const Checked: Story = {
	args: {
		label: 'Checked Checkbox',
		value: true,
	},
};

export const Indeterminate: Story = {
	args: {
		label: 'Indeterminate Checkbox',
		value: null,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Checkbox',
		disabled: true,
	},
};

export const VariantSecondary: Story = {
	args: {
		label: 'Secondary Variant',
		value: true,
		variant: 'secondary',
	},
};

export const ThemeError: Story = {
	args: {
		label: 'Error Variant',
		value: true,
		variant: 'error',
	},
};