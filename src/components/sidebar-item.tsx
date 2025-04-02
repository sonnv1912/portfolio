import clsx from 'clsx';
import { useQueryState } from 'nuqs';
import type { IconType } from 'react-icons';

type Props = {
	data: {
		label: string;
		icon: IconType;
		tab: string;
	};
	onPress: () => void;
};

const SidebarItem = ({ data, onPress }: Props) => {
	const [tab] = useQueryState('tab');

	return (
		<div
			className={clsx(
				'flex size-12 flex-col items-center justify-center hover:bg-woodsmoke-950',
				'sidebar-item cursor-pointer select-none gap-1 rounded-md transition-all duration-500',
				{
					'bg-woodsmoke-950': tab === data.tab,
				},
			)}
			data-tooltip-id='tooltip'
			data-tooltip-content={data.label}
			data-tooltip-place='right'
			onKeyUp={() => {
				//
			}}
			onClick={() => {
				onPress();
			}}
		>
			<data.icon className='size-5' />
		</div>
	);
};

export { SidebarItem };
