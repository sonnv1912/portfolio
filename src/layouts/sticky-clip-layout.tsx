import { StickyClipLayoutHeader } from '@components/layouts/sticky-clip-layout/header';
import { useEffect, type PropsWithChildren } from 'react';

export const StickyClipLayout = ({ children }: PropsWithChildren) => {
	useEffect(() => {
		document.title = 'Sticky Clip - Your clipboard manager';
	}, []);

	return (
		<div className='relative bg-black'>
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
