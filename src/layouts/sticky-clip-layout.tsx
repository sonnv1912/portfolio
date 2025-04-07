import { StickyClipLayoutHeader } from '@components/layouts/sticky-clip-layout/header';
import clsx from 'clsx';
import { useEffect, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

export const StickyClipLayout = ({ children }: PropsWithChildren) => {
	const { t } = useTranslation();

	useEffect(() => {
		document.title = t('page:sticky_clip.title');
	}, [t]);

	return (
		<div className='relative bg-black'>
			<StickyClipLayoutHeader />

			<div
				className={clsx(
					'h-screen overflow-auto scroll-smooth px-5 pb-10 pt-24 text-white',
					'lg:px-20',
				)}
				style={{
					scrollbarGutter: 'stable',
				}}
			>
				{children}
			</div>
		</div>
	);
};
