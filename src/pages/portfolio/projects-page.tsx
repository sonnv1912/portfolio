import { ProjectItem } from '@components/pages/project-page/item';
import { useMyProfile } from '@hooks/use-my-profile';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export const ProjectsPage = () => {
	const me = useMyProfile();
	const { t } = useTranslation();

	return (
		<div
			className={clsx(
				'flex min-h-screen flex-col gap-16 bg-black p-8 text-white',
				'md:p-12',
				'lg:p-20',
			)}
		>
			<p className='text-center font-eb-raleway text-4xl'>
				{t('common:projects').toUpperCase()}
			</p>

			<div>
				{me.experiences.map((item) => (
					<ProjectItem
						key={item.appName}
						data={item}
					/>
				))}
			</div>
		</div>
	);
};
