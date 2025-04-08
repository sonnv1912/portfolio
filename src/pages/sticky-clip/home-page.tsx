import { RepoDownloadInfo } from '@components/ui/repo-download-info';
import { env } from '@configs/env';
import { useGetLatestRelease } from '@hooks/query/use-get-latest-release';
import { useLatestRelease } from '@stores/use-latest-release';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

declare const VANTA: {
	NET: (options: {
		el: string | HTMLElement;
		mouseControls?: boolean;
		touchControls?: boolean;
		gyroControls?: boolean;
		minHeight?: number;
		minWidth?: number;
		scale?: number;
		scaleMobile?: number;
		color?: string;
		backgroundColor?: string;
	}) => void;
};

export const StickyClipHomePage = () => {
	const { t } = useTranslation();
	const latestReleaseQuery = useGetLatestRelease(env.repo.stickyClip);
	const { setRelease } = useLatestRelease();

	useEffect(() => {
		VANTA.NET({
			el: '#background',
			mouseControls: false,
			touchControls: false,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1,
			scaleMobile: 1,
			color: '#27b5e9',
			backgroundColor: '#0b0c0d',
		});
	}, []);

	useEffect(() => {
		setRelease('stickyClip', latestReleaseQuery.data?.data);
	}, [latestReleaseQuery.data?.data, setRelease]);

	return (
		<>
			<div
				className={clsx(
					'relative flex h-full flex-col items-center justify-center',
					'z-50 lg:justify-between',
				)}
			>
				<div className={clsx('hidden', 'lg:flex')} />

				<div className='flex flex-col items-center justify-center gap-5'>
					<p className='text-center font-semibold text-5xl'>
						{t('page:sticky_clip.home.product_short_description')}
					</p>

					<p className='text-center text-sm'>
						{t('page:sticky_clip.home.product_description')}
					</p>
				</div>

				{!latestReleaseQuery.isLoading && <RepoDownloadInfo repo='stickyClip' />}
			</div>

			<div
				id='background'
				className='fixed bottom-0 left-0 right-0 top-0'
			/>
		</>
	);
};
