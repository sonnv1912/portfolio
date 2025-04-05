import { DefaultLayoutSidebar } from '@components/layouts/default-layout/sidebar';
import type { PropsWithChildren } from 'react';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
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
