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
				element={<Navigate to='/portfolio/me' />}
			/>

			<Route
				path='/portfolio/me'
				element={<Me />}
			/>

			<Route
				path='/portfolio/skills'
				element={<Skills />}
			/>

			<Route
				path='/portfolio/projects'
				element={<Projects />}
			/>

			<Route
				path='/portfolio/degrees'
				element={<Degrees />}
			/>

			<Route
				path='/portfolio/contact'
				element={<Contact />}
			/>
		</Routes>
	);
};
