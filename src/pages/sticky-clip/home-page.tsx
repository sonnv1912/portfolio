import i18n from '@/configs/locales/i18n';
import clsx from 'clsx';
import { useEffect } from 'react';
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

	useEffect(() => {
		VANTA.NET({
			el: '#home-page',
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color: '#3fddff',
			backgroundColor: '#171717',
		});
	}, []);

	return (
		<div
			id='home-page'
			className='-mt-24 flex h-full flex-1 flex-col items-center justify-between p-10'
		>
			<div />

			<div className='flex flex-col items-center justify-center gap-4'>
				<p className='font-semibold text-5xl'>Your clipboard manager.</p>

				<p className='text-sm'>A tool for manage your clipboard history. Fast, friendly.</p>
			</div>

			<div className='flex items-center gap-4 text-black'>
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

					<p>{i18n.t('common:download_for_mac')}</p>
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

					<p>{i18n.t('common:coming_soon')}</p>
				</div>
			</div>
		</div>
	);
};
