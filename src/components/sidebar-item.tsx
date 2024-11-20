import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
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
	const { t } = useTranslation();

	return (
		<div
			className={clsx(
				'flex flex-col items-center justify-center py-3 hover:bg-woodsmoke-700',
				'cursor-pointer select-none gap-1 rounded-2xl px-2 transition-all duration-500',
				{
					'bg-woodsmoke-700': active,
				},
			)}
			onClick={() => {
				onPress();
			}}
		>
			<data.icon className='size-5' />

			<p className='text-xs'>{t(`common:${data.label}`)}</p>
		</div>
	);
};

export { SidebarItem };
