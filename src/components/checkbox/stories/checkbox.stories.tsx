import type { Meta, StoryObj } from '@storybook/react';
import { default as Checkbox } from '../checkbox';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'changed' },
		theme: {
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
		checked: false,
	},
};

export const Checked: Story = {
	args: {
		label: 'Checked Checkbox',
		checked: true,
	},
};

export const Indeterminate: Story = {
	args: {
		label: 'Indeterminate Checkbox',
		indeterminate: true,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Checkbox',
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		label: 'Disabled Checked',
		disabled: true,
		checked: true,
	},
};

export const DisabledIndeterminate: Story = {
	args: {
		label: 'Disabled Indeterminate',
		disabled: true,
		indeterminate: true,
	},
};

export const ThemeSecondary: Story = {
	args: {
		label: 'Secondary Theme',
		checked: true,
		theme: 'secondary',
	},
};

export const ThemeError: Story = {
	args: {
		label: 'Error Theme',
		checked: true,
		theme: 'error',
	},
};

export const IndeterminateSecondary: Story = {
	args: {
		label: 'Indeterminate Secondary',
		indeterminate: true,
		theme: 'secondary',
	},
};

export const IndeterminateError: Story = {
	args: {
		label: 'Indeterminate Error',
		indeterminate: true,
		theme: 'error',
	},
};