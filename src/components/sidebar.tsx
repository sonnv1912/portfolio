import i18n from '@/configs/locales/i18n';
import clsx from 'clsx';
import { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { FaAddressCard } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { HiBookOpen } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';
import { MdFolder } from 'react-icons/md';
import { SidebarItem } from './sidebar-item';
import { LanguageSwitcher } from './language-switcher';

const Sidebar = () => {
	const [showMenuBtnClicked, setShowMenuBtnClicked] = useState(true);

	const tabs = [
		{
			id: 1,
			label: 'SON',
			icon: BiSolidUser,
			to: '/portfolio/me',
		},
		{
			id: 2,
			label: i18n.t('common:skills'),
			icon: GiSkills,
			to: '/portfolio/skills',
		},
		{
			id: 6,
			label: i18n.t('common:degrees'),
			icon: HiBookOpen,
			to: '/portfolio/degrees',
		},
		{
			id: 3,
			label: i18n.t('common:projects'),
			icon: MdFolder,
			to: '/portfolio/projects',
		},
		// {
		// 	id: 5,
		// 	label: i18n.t('common:experiences'),
		// 	icon: MdWorkspacePremium,
		// 	to: '/portfolio/experiences',
		// },
		{
			id: 7,
			label: i18n.t('common:contact'),
			icon: FaAddressCard,
			to: '/portfolio/contact',
		},
	];

	return (
		<div>
			<div
				className={clsx(
					'absolute bottom-0 left-0 top-0 z-20 flex transition-all duration-300',
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
						'bg-woodsmoke-700 p-2 text-woodsmoke-200',
					)}
				>
					{tabs.map((tab) => (
						<SidebarItem
							key={tab.id}
							data={tab}
							onPress={() => {
								setShowMenuBtnClicked(true);
							}}
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
					onKeyUp={() => {
						//
					}}
				>
					<IoMenu className='size-6 text-white' />
				</div>
			</div>

			<div
				className={clsx(
					'absolute bottom-0 left-0 right-0 top-0 transition-all duration-300',
					'lg:hidden',
					{
						'-z-10 bg-transparent opacity-0': showMenuBtnClicked,
						'z-10 bg-black/50 opacity-100': !showMenuBtnClicked,
					},
				)}
				onClick={() => {
					setShowMenuBtnClicked(true);
				}}
				onKeyUp={() => {
					//
				}}
			/>
		</div>
	);
};

export { Sidebar };
