import { Sidebar } from '@components/sidebar';
import type { PropsWithChildren } from 'react';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='relative flex'>
			<Sidebar />

			<div className='h-screen flex-1 overflow-auto scroll-smooth bg-black text-white'>
				{children}
			</div>
		</div>
	);
};
