import clsx from 'clsx';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaApple, FaWindows } from 'react-icons/fa';

declare const VANTA: {
	NET: (options: {
		el: string | HTMLElement;
		mouseControls?: boolean;
		touchControls?: boolean;
		gyroControls?: boolean;
		minHeight?: number;
		minWidth?: number;
		scale?: number;
		scaleMobile?: number;
		color?: string;
		backgroundColor?: string;
	}) => void;
};

export const StickyClipHomePage = () => {
	const isMac = window.navigator.userAgentData?.platform.includes('mac');
	const isWin = window.navigator.userAgentData?.platform.includes('win');
	const { t } = useTranslation();

	useEffect(() => {
		VANTA.NET({
			el: '#animated_layout',
			mouseControls: false,
			touchControls: false,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color: '#27b5e9',
			backgroundColor: '#171717',
		});
	}, []);

	return (
		<div
			className={clsx(
				'flex flex-1 flex-col items-center justify-center px-10 pb-10',
				'lg:justify-between',
			)}
		>
			<div className={clsx('hidden', 'lg:flex')} />

			<div className='flex flex-col items-center justify-center gap-5'>
				<p className='text-center font-semibold text-5xl'>
					{t('page:sticky_clip.home.product_short_description')}
				</p>

				<p className='text-center text-sm'>{t('page:sticky_clip.home.product_description')}</p>
			</div>

			<div className={clsx('hidden items-center gap-4 text-black', 'lg:flex')}>
				<div
					className={clsx(
						'flex cursor-pointer items-center gap-2 rounded-md p-2 px-3 text-sm transition-all duration-500',
						{
							'border border-woodsmoke-300 text-woodsmoke-300 hover:border-white hover:text-white':
								!isMac,
							'bg-woodsmoke-100 hover:bg-white': isMac,
						},
					)}
				>
					<FaApple size={18} />

					<p>{t('common:action.download_for_mac')}</p>
				</div>

				<div
					className={clsx(
						'flex cursor-pointer items-center gap-2 rounded-md p-2 px-3 text-sm transition-all duration-500',
						{
							'border border-woodsmoke-300 text-woodsmoke-300 hover:border-white hover:text-white':
								!isWin,
							'bg-woodsmoke-100 hover:bg-white': isWin,
						},
					)}
				>
					<FaWindows size={18} />

					<p>{t('common:coming_soon')}</p>
				</div>
			</div>
		</div>
	);
};
