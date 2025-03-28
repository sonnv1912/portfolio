import { ProjectItem } from '@components/pages/project/item';
import { useMyProfile } from '@hooks/use-my-profile';
import { DefaultLayout } from '@layouts/default';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const Projects = () => {
	const me = useMyProfile();
	const { t } = useTranslation();

	return (
		<DefaultLayout>
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
		</DefaultLayout>
	);
};

export { Projects };
