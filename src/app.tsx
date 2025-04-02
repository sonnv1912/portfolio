import { DefaultLayout } from '@layouts/default';
import { useQueryState } from 'nuqs';
import { Tooltip } from 'react-tooltip';
import { Me } from './pages/me';
import { Skills } from './pages/skills';
import { Degrees } from './pages/degrees';
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';

export const App = () => {
	const [tab] = useQueryState('tab');

	return (
		<DefaultLayout>
			{(!tab || tab === 'me') && <Me />}

			{tab === 'skills' && <Skills />}

			{tab === 'degrees' && <Degrees />}

			{tab === 'projects' && <Projects />}

			{tab === 'contact' && <Contact />}

			<Tooltip
				id='tooltip'
				opacity={1}
				style={{
					backgroundColor: '#454545',
					color: 'white',
					zIndex: 9999,
					maxWidth: 300,
					wordBreak: 'break-all',
					boxShadow: '1px 1px 10px rgba(255,255,255,0.2)',
				}}
			/>
		</DefaultLayout>
	);
};
