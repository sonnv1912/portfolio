import { DefaultLayout } from '@layouts/default';
import { useQueryState } from 'nuqs';
import { Tooltip } from 'react-tooltip';
import { Me } from './pages/me';
import { Skills } from './pages/skills';
import { Degrees } from './pages/degrees';
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';
import { AnimatePresence, motion } from 'motion/react';
import { useMemo } from 'react';

export const App = () => {
	const [tab] = useQueryState('tab');

	const tabs = useMemo(() => {
		const result = [
			{
				show: !tab || tab === 'me',
				component: <Me />,
				id: 'me',
			},
			{
				show: tab === 'skills',
				component: <Skills />,
				id: 'skills',
			},
			{
				show: tab === 'degrees',
				component: <Degrees />,
				id: 'degrees',
			},
			{
				show: tab === 'projects',
				component: <Projects />,
				id: 'projects',
			},
			{
				show: tab === 'contact',
				component: <Contact />,
				id: 'contact',
			},
		];

		return result.filter((t) => t.show);
	}, [tab]);

	return (
		<DefaultLayout>
			<AnimatePresence initial={true}>
				{tabs.map((t) => (
					<motion.div
						key={t.id}
						transition={{
							duration: 0.5,
						}}
						exit={{ opacity: 0, y: '10%' }}
						initial={{ opacity: 0, y: '10%' }}
						animate={{
							opacity: 1,
							y: 0,
						}}
					>
						{t.component}
					</motion.div>
				))}
			</AnimatePresence>

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
