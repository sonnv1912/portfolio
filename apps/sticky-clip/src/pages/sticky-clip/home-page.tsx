import { RepoDownloadInfo } from '@components/ui/repo-download-info';
import { useGetLatestRelease } from '@packages/hooks/query';
import { useLatestRelease } from '@stores/use-latest-release';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { env } from '@packages/configs/env';

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
   const latestReleaseQuery = useGetLatestRelease(env.repo.stickyClip.name);
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
            <div className={clsx('hidden', 'lg:block')} />

            <div className='flex flex-col items-center justify-center gap-5'>
               <p className='text-center font-bold text-5xl'>
                  {t('page:sticky_clip.home.product_short_description')}
               </p>

               <p className='text-center text-sm'>
                  {t('page:sticky_clip.home.product_description')}
               </p>
            </div>

            <div className={clsx('hidden', 'lg:block')}>
               {!latestReleaseQuery.isLoading && (
                  <RepoDownloadInfo repo='stickyClip' />
               )}
            </div>
         </div>

         <div id='background' className='fixed bottom-0 left-0 right-0 top-0' />
      </>
   );
};
