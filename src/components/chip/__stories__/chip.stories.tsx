import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../icon/index';
import Chip from '../Chip';
import type { Properties } from '../types';

const meta: Meta<typeof Chip> = {
	title: 'Components/Chip',
	component: Chip,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['assist', 'filter', 'input', 'suggestion'],
		},
		mode: {
			control: 'select',
			options: ['flat', 'outlined'],
		},
		selected: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
		elevated: {
			control: 'boolean',
		},
		onClick: { action: 'clicked' },
		onToggle: { action: 'toggled' },
		onRemove: { action: 'removed' },
	},
};

export default meta;
type Story = StoryObj<typeof Chip>;

// Assist Chip - Default
export const Assist: Story = {
	args: {
		children: 'Assist Chip',
		variant: 'assist',
		mode: 'flat',
	},
};

// Assist Chip with Icon
export const AssistWithIcon: Story = {
	args: {
		children: 'Assist with Icon',
		variant: 'assist',
		mode: 'flat',
		icon: <Icon name="search" size="small" variant="outlined" />,
	},
	parameters: {
		docs: {
			source: {
				code: `<Chip variant="assist" mode="flat" icon={<Icon name="search" size="small" variant="outlined" />}>Assist with Icon</Chip>`,
			},
		},
	},
};

// Filter Chip - Default
export const Filter: Story = {
	args: {
		children: 'Filter Chip',
		variant: 'filter',
		mode: 'flat',
		selected: false,
	},
	parameters: {
		docs: {
			source: {
				code: `<Chip variant="filter" mode="flat" selected={false}>Filter Chip</Chip>`,
			},
		},
	},
};

// Filter Chip - Selected
export const FilterSelected: Story = {
	args: {
		children: 'Filter Selected',
		variant: 'filter',
		mode: 'flat',
		selected: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<Chip variant="filter" mode="flat" selected={true}>Filter Selected</Chip>`,
			},
		},
	},
};

// Input Chip - Default
export const Input: Story = {
	args: {
		children: 'Input Chip',
		variant: 'input',
		mode: 'flat',
	},
	parameters: {
		docs: {
			source: {
				code: `<Chip variant="input" mode="flat">Input Chip</Chip>`,
			},
		},
	},
};

// Input Chip with Avatar
export const InputWithAvatar: Story = {
	args: {
		children: 'John Doe',
		variant: 'input',
		mode: 'flat',
		avatar: <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px' }}>JD</div>,
	},
	parameters: {
		docs: {
			source: {
				code: `<Chip variant="input" mode="flat" avatar={<Avatar>JD</Avatar>}>John Doe</Chip>`,
			},
		},
	},
};

// Suggestion Chip - Default
export const Suggestion: Story = {
	args: {
		children: 'Suggestion Chip',
		variant: 'suggestion',
		mode: 'flat',
	},
	parameters: {
		docs: {
			source: {
				code: `<Chip variant="suggestion" mode="flat">Suggestion Chip</Chip>`,
			},
		},
	},
};

// Outlined Mode
export const Outlined: Story = {
	args: {
		children: 'Outlined Chip',
		variant: 'assist',
		mode: 'outlined',
	},
	parameters: {
		docs: {
			source: {
				code: `<Chip variant="assist" mode="outlined">Outlined Chip</Chip>`,
			},
		},
	},
};

// Elevated Chip
export const Elevated: Story = {
	args: {
		children: 'Elevated Chip',
		variant: 'assist',
		mode: 'flat',
		elevated: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<Chip variant="assist" mode="flat" elevated>Elevated Chip</Chip>`,
			},
		},
	},
};

// Disabled Chip
export const Disabled: Story = {
	args: {
		children: 'Disabled Chip',
		variant: 'assist',
		mode: 'flat',
		disabled: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<Chip variant="assist" mode="flat" disabled>Disabled Chip</Chip>`,
			},
		},
	},
};

// All Variants
export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
			<Chip variant="assist" mode="flat">Assist</Chip>
			<Chip variant="filter" mode="flat" selected={false}>Filter</Chip>
			<Chip variant="filter" mode="flat" selected={true}>Filter Selected</Chip>
			<Chip variant="input" mode="flat">Input</Chip>
			<Chip variant="suggestion" mode="flat">Suggestion</Chip>
		</div>
	),
	parameters: {
		docs: {
			source: {
				code: `
<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
  <Chip variant="assist" mode="flat">Assist</Chip>
  <Chip variant="filter" mode="flat" selected={false}>Filter</Chip>
  <Chip variant="filter" mode="flat" selected={true}>Filter Selected</Chip>
  <Chip variant="input" mode="flat">Input</Chip>
  <Chip variant="suggestion" mode="flat">Suggestion</Chip>
</div>`,
			},
		},
	},
};

// Interactive Examples
export const Interactive: Story = {
	render: () => {
		const handleClick = (event: React.SyntheticEvent, properties: Properties) => {
			console.log('Chip clicked:', properties);
		};

		const handleToggle = (event: React.SyntheticEvent, selected: boolean, properties: Properties) => {
			console.log('Chip toggled:', selected, properties);
		};

		const handleRemove = (event: React.SyntheticEvent, properties: Properties) => {
			console.log('Chip removed:', properties);
		};

		return (
			<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
				<Chip variant="assist" mode="flat" onClick={handleClick}>Clickable Assist</Chip>
				<Chip variant="filter" mode="flat" onToggle={handleToggle}>Toggleable Filter</Chip>
				<Chip variant="input" mode="flat" onRemove={handleRemove}>Removable Input</Chip>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
const handleClick = (event, properties) => console.log('Chip clicked:', properties);
const handleToggle = (event, selected, properties) => console.log('Chip toggled:', selected, properties);
const handleRemove = (event, properties) => console.log('Chip removed:', properties);

<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
  <Chip variant="assist" mode="flat" onClick={handleClick}>Clickable Assist</Chip>
  <Chip variant="filter" mode="flat" onToggle={handleToggle}>Toggleable Filter</Chip>
  <Chip variant="input" mode="flat" onRemove={handleRemove}>Removable Input</Chip>
</div>`,
			},
		},
	},
}; 