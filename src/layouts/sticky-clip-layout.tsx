import { StickyClipLayoutHeader } from '@components/layouts/sticky-clip-layout/header';
import { useEffect, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

export const StickyClipLayout = ({ children }: PropsWithChildren) => {
	const { t } = useTranslation();

	useEffect(() => {
		document.title = t('page:sticky_clip.title');
	}, [t]);

	return (
		<div
			className='relative bg-black'
			id='animated_layout'
		>
			<StickyClipLayoutHeader />

			<div
				className='flex min-h-screen w-screen flex-col overflow-auto scroll-smooth pt-24 text-white'
				style={{
					scrollbarGutter: 'stable',
				}}
			>
				{children}
			</div>
		</div>
	);
};
