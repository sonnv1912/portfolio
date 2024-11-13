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
				'flex flex-col items-center justify-center py-3 hover:bg-woodsmoke-400',
				'cursor-pointer gap-1 rounded-2xl px-2 transition-all duration-500',
				{
					'bg-woodsmoke-400': active,
				},
			)}
			onClick={() => {
				onPress();
			}}
		>
			<data.icon className='size-5' />

			<p className='text-xs'>{data.label}</p>
		</div>
	);
};

export { SidebarItem };
