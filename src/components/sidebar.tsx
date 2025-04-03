import i18n from '@/configs/locales/i18n';
import MeImage from '@assets/images/img-me-1.png';
import clsx from 'clsx';
import { useQueryState } from 'nuqs';
import { useState } from 'react';
import { FaAddressCard } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { HiBookOpen } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';
import { MdFolder } from 'react-icons/md';
import { LanguageSwitcher } from './language-switcher';
import { SidebarItem } from './sidebar-item';

const Sidebar = () => {
	const [showMenuBtnClicked, setShowMenuBtnClicked] = useState(true);
	const [, setTab] = useQueryState('tab');

	const tabs = [
		{
			label: 'SON',
			icon: () => {
				return (
					<img
						src={MeImage}
						alt=''
						className='size-8'
					/>
				);
			},
			tab: 'me',
		},
		{
			label: i18n.t('common:skills'),
			icon: GiSkills,
			tab: 'skills',
		},
		{
			label: i18n.t('common:degrees'),
			icon: HiBookOpen,
			tab: 'degrees',
		},
		{
			label: i18n.t('common:projects'),
			icon: MdFolder,
			tab: 'projects',
		},
		{
			label: i18n.t('common:contact'),
			icon: FaAddressCard,
			tab: 'contact',
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
					{tabs.map((tab, index) => (
						<SidebarItem
							key={tab.label}
							data={tab}
							index={index}
							onPress={() => {
								setShowMenuBtnClicked(true);
								setTab(tab.tab);
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
