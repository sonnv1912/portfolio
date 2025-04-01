import clsx from 'clsx';
import type { IconType } from 'react-icons';
import { NavLink } from 'react-router';

type Props = {
	data: {
		id: number;
		label: string;
		icon: IconType;
		to: string;
	};
	onPress: () => void;
};

const SidebarItem = ({ data, onPress }: Props) => {
	return (
		<NavLink
			to={data.to}
			className={clsx(
				'flex size-12 flex-col items-center justify-center hover:bg-woodsmoke-950',
				'sidebar-item cursor-pointer select-none gap-1 rounded-md transition-all duration-500',
			)}
			onClick={() => {
				onPress();
			}}
			data-tooltip-id='tooltip'
			data-tooltip-content={data.label}
			data-tooltip-place='right'
		>
			<data.icon className='size-5' />
		</NavLink>
	);
};

export { SidebarItem };
