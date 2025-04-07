import StickyClipIcon from '@assets/icons/ic-clipboard.png';
import { LanguageSwitcher } from '@components/ui/language-switcher';
import { useNavigator } from '@hooks/use-navigator';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CgMenuGridO } from 'react-icons/cg';
import { FaApple, FaWindows } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';

export const StickyClipLayoutHeader = () => {
	const isMac = window.navigator.userAgentData?.platform.includes('mac');
	const isWin = window.navigator.userAgentData?.platform.includes('win');
	const { t } = useTranslation();
	const { setQuery } = useNavigator();
	const [showMenu, setShowMenu] = useState(false);

	const tabs = [
		{
			label: t('page:sticky_clip.home.teams'),
			query: {
				tabPage: 'teams',
			},
		},
		{
			label: t('page:sticky_clip.home.changelog'),
			query: {
				tabPage: 'changelog',
			},
		},
	];

	return (
		<div className={clsx('fixed left-0 right-0 top-5 z-10', 'flex justify-center')}>
			<motion.div
				className={clsx(
					'bg-white-950/50 rounded-lg border border-woodsmoke-600 backdrop-blur-sm',
					'overflow-hidden transition-all',
					'mx-5 w-full',
					'lg:mx-0 lg:w-[80vw]',
				)}
			>
				<div className={clsx('flex w-full items-center justify-between gap-5 px-5 py-4')}>
					<div
						className='flex cursor-pointer items-center gap-2 text-white'
						onClick={() => {
							setQuery({
								tabPage: 'home',
							});
						}}
					>
						<FaArrowLeftLong
							className='cursor-pointer text-woodsmoke-300 hover:text-white'
							data-tooltip-id='tooltip'
							data-tooltip-content={t('common:back')}
							onClick={() => {
								setQuery({
									name: '',
									tab: 'products',
									tabPage: '',
								});
							}}
						/>

						<div className='mx-2 h-5 w-[1px] bg-woodsmoke-300' />

						<img
							src={StickyClipIcon}
							alt=''
							className='size-6'
						/>

						<p className='text-sm'>Sticky Clip</p>
					</div>

					<div className={clsx('hidden items-center gap-7', 'lg:flex')}>
						{tabs.map((item) => (
							<p
								key={item.label}
								className='cursor-pointer text-sm text-woodsmoke-300 hover:text-white'
								onClick={() => {
									setQuery(item.query);
								}}
							>
								{item.label}
							</p>
						))}
					</div>

					<div className={clsx('flex items-center gap-3', 'lg:gap-5')}>
						<CgMenuGridO
							className={clsx('size-8 text-woodsmoke-300 active:text-white', 'lg:hidden')}
							onClick={() => {
								setShowMenu((prev) => !prev);
							}}
						/>

						<LanguageSwitcher
							className='grayscale-[30%] hover:grayscale-0'
							imgClassName='w-8'
						/>

						{isMac && (
							<div
								className={clsx(
									'cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm',
									'hidden bg-woodsmoke-100 hover:bg-white',
									'lg:flex',
								)}
							>
								<FaApple size={18} />

								<p>{t('common:action.download')}</p>
							</div>
						)}

						{isWin && (
							<div
								className={clsx(
									'cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm',
									'hidden bg-woodsmoke-100 hover:bg-white',
									'lg:flex',
								)}
							>
								<FaWindows size={18} />

								<p>{t('common:coming_soon')}</p>
							</div>
						)}
					</div>
				</div>

				<AnimatePresence initial={true}>
					{showMenu && (
						<motion.div
							className={clsx('md:hidden')}
							initial={{
								height: 0,
								paddingBottom: 0,
							}}
							exit={{
								height: 0,
								paddingTop: 0,
								paddingBottom: 0,
							}}
							animate={{
								height: 'auto',
							}}
						>
							<div className='flex flex-col gap-4 p-4'>
								{tabs.map((item) => (
									<p
										key={item.label}
										className='cursor-pointer text-sm text-woodsmoke-300 hover:text-white'
									>
										{item.label}
									</p>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
