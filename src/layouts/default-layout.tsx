import { DefaultLayoutSidebar } from '@components/layouts/default-layout/sidebar';
import { useEffect, type PropsWithChildren } from 'react';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
	useEffect(() => {
		document.title = 'Portfolio - Ngo Van Son';
	}, []);

	return (
		<div className='relative flex'>
			<DefaultLayoutSidebar />

			<div
				className='h-screen flex-1 overflow-auto scroll-smooth bg-black text-white'
				style={{
					scrollbarGutter: 'stable',
				}}
			>
				{children}
			</div>
		</div>
	);
};
