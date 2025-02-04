import { DefaultLayout } from '@components/layout/default';
import { Navigate, Route, Routes } from 'react-router';
import { Contact } from './pages/contact';
import { Degrees } from './pages/degrees';
import { Me } from './pages/me';
import { Projects } from './pages/projects';
import { Skills } from './pages/skills';

export const App = () => {
	return (
		<Routes>
			<Route
				path='/portfolio'
				element={<DefaultLayout />}
			>
				<Route
					path=''
					element={<Navigate to='me' />}
				/>

				<Route
					path='me'
					element={<Me />}
				/>

				<Route
					path='skills'
					element={<Skills />}
				/>

				<Route
					path='projects'
					element={<Projects />}
				/>

				<Route
					path='degrees'
					element={<Degrees />}
				/>

				<Route
					path='contact'
					element={<Contact />}
				/>
			</Route>
		</Routes>
	);
};
