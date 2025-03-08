import { Navigate, Route, Routes } from 'react-router';
import { Contact } from './pages/contact';
import { Degrees } from './pages/degrees';
import { Me } from './pages/me';
import { Projects } from './pages/projects';
import { Skills } from './pages/skills';

export const App = () => {
	const routes = [
		{
			path: '/portfolio/me',
			component: <Me />,
		},
		{
			path: '/portfolio/skills',
			component: <Skills />,
		},
		{
			path: '/portfolio/projects',
			component: <Projects />,
		},
		{
			path: '/portfolio/degrees',
			component: <Degrees />,
		},
		{
			path: '/portfolio/contact',
			component: <Contact />,
		},
	];

	return (
		<Routes>
			{routes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.component}
				/>
			))}

			<Route
				path='/portfolio'
				element={<Navigate to='/portfolio/me' />}
			/>
		</Routes>
	);
};
