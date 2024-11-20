import clsx from 'clsx';
import { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { FaAddressCard } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { HiBookOpen } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { LanguageSwitcher } from './language-switcher';
import { SidebarItem } from './sidebar-item';

type Props = {
	value: 1 | 2 | 3 | 4 | 5;
	onChange: (value: 1 | 2 | 3 | 4 | 5) => void;
};

const tabs = [
	{
		id: 1,
		label: 'SON',
		icon: BiSolidUser,
	},
	{
		id: 2,
		label: 'skill',
		icon: GiSkills,
	},
	{
		id: 3,
		label: 'project',
		icon: MdWork,
	},
	{
		id: 4,
		label: 'degree',
		icon: HiBookOpen,
	},
	{
		id: 5,
		label: 'contact',
		icon: FaAddressCard,
	},
];

const Sidebar = ({ value, onChange }: Props) => {
	const [showMenuBtnClicked, setShowMenuBtnClicked] = useState(true);

	return (
		<div
			className={clsx(
				'absolute bottom-0 left-0 top-0 z-10 flex transition-all duration-300',
				'lg:relative lg:translate-x-0',
				{
					'-translate-x-full': showMenuBtnClicked,
					'translate-x-0': !showMenuBtnClicked,
				},
			)}
		>
			<div
				className={clsx(
					'flex h-screen flex-col gap-2 overflow-y-auto',
					'bg-woodsmoke-950 p-2 text-woodsmoke-200',
				)}
			>
				{tabs.map((tab) => (
					<SidebarItem
						key={tab.id}
						active={value === tab.id}
						data={tab}
						onPress={() => onChange(tab.id as 1 | 2 | 3 | 4 | 5)}
					/>
				))}

				<LanguageSwitcher />
			</div>

			<div
				className={clsx(
					'flex size-10 items-center justify-center rounded-r-lg bg-slate-600',
					'absolute left-full top-0 cursor-pointer hover:bg-slate-500',
					'lg:hidden',
					{
						absolute: showMenuBtnClicked,
					},
				)}
				onClick={() => setShowMenuBtnClicked((prev) => !prev)}
			>
				<IoMenu className='size-6 text-white' />
			</div>
		</div>
	);
};

export { Sidebar };
