import clsx from 'clsx';
import { IconType } from 'react-icons';

type Props = {
	data: {
		id: number;
		label: string;
		icon: IconType;
	};
	active: boolean;
	onPress: () => void;
};

const SidebarItem = ({ data, active, onPress }: Props) => {
	return (
		<div
			className={clsx(
				'flex size-12 flex-col items-center justify-center hover:bg-woodsmoke-950',
				'cursor-pointer select-none gap-1 rounded-md transition-all duration-500',
				{
					'bg-woodsmoke-950': active,
				},
			)}
			onClick={() => {
				onPress();
			}}
		>
			<data.icon className='size-5' />
		</div>
	);
};

export { SidebarItem };
