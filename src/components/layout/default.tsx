import { Sidebar } from '@components/sidebar';
import { Outlet } from 'react-router';

export const DefaultLayout = () => {
	return (
		<div className='relative flex'>
			<Sidebar />

			<div className='h-screen flex-1 overflow-auto scroll-smooth'>
				<Outlet />
			</div>
		</div>
	);
};
