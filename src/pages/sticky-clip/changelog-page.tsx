import 'github-markdown-css/github-markdown.css';

import { useGetRelease } from '@hooks/query/use-get-release';
import clsx from 'clsx';
import Markdown from 'react-markdown';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { env } from '@configs/env';

export const StickyClipChangelogPage = () => {
	const releasesQuery = useGetRelease(env.repo.stickyClip);
	const { t } = useTranslation();

	return (
		<div className={clsx('mx-auto mt-10', 'lg:max-w-[80vw]')}>
			<div>
				<div className='flex gap-10'>
					<div className='w-40' />

					<p className='font-semibold text-5xl'>{t('page:sticky_clip:home.changelog')}</p>
				</div>

				<div className='mt-20 flex flex-col gap-40'>
					{releasesQuery.data?.data?.map((release) => (
						<div
							key={release.id}
							className='flex gap-10'
						>
							<div className='flex w-40 flex-col gap-4 text-sm'>
								<p className='bg-stickyclip-500/50 text-stickyclip-300 w-fit rounded-md px-4 py-1 text-center'>
									{release.tag_name}
								</p>

								<p className='text-woodsmoke-300'>
									{moment(release.created_at).format('MMM DD, yyyy')}
								</p>
							</div>

							<div
								className='markdown-body mt-10 flex-1'
								style={{ backgroundColor: 'transparent' }}
							>
								<Markdown>{release.body}</Markdown>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
