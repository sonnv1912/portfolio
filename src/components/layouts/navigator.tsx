import { Contact } from '@/pages/contact';
import { Degrees } from '@/pages/degrees';
import { Me } from '@/pages/me';
import { Products } from '@/pages/products';
import { Projects } from '@/pages/projects';
import { Skills } from '@/pages/skills';
import { AnimatePresence, motion } from 'motion/react';
import { parseAsString, useQueryState } from 'nuqs';

export const Navigator = () => {
	const [tab] = useQueryState('tab', parseAsString.withDefault('me'));

	return (
		<AnimatePresence
			mode='wait'
			initial={false}
		>
			<motion.div
				key={tab}
				transition={{
					duration: 0.5,
				}}
				exit={{ opacity: 0, y: '10%' }}
				initial={{ opacity: 0, y: '10%' }}
				animate={{ opacity: 1, y: 0 }}
			>
				{
					{
						me: <Me />,
						skills: <Skills />,
						degrees: <Degrees />,
						projects: <Projects />,
						contact: <Contact />,
						products: <Products />,
					}[tab ?? 'me']
				}
			</motion.div>
		</AnimatePresence>
	);
};
