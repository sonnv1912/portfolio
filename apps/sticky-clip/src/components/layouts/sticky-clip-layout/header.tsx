import { LanguageSwitcher } from '@components/ui/language-switcher';
import { useNavigator } from '@hooks/use-navigator';
import { useLatestRelease } from '@stores/use-latest-release';
import { images } from 'assets';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CgMenuGridO } from 'react-icons/cg';
import { FaApple, FaWindows } from 'react-icons/fa';

export const StickyClipLayoutHeader = () => {
   const isMac = window.navigator.userAgentData?.platform
      .toLowerCase()
      .includes('mac');

   const isWin = window.navigator.userAgentData?.platform
      .toLowerCase()
      .includes('win');

   const { t } = useTranslation();
   const { setQuery } = useNavigator();
   const [showMenu, setShowMenu] = useState(false);
   const { getWinDownload, getMacDownload } = useLatestRelease();

   const tabs = [
      {
         label: t('page:sticky_clip.home.teams'),
         query: {
            tab: 'teams',
         },
      },
      {
         label: t('page:sticky_clip.home.changelog'),
         query: {
            tab: 'changelog',
         },
      },
   ];

   return (
      <div
         className={clsx(
            'fixed left-0 right-0 top-5 z-10',
            'flex justify-center',
         )}
      >
         <div
            className={clsx(
               'bg-white-950/50 rounded-lg border border-woodsmoke-600 backdrop-blur-sm',
               'overflow-hidden transition-all',
               'mx-5 w-full',
               'lg:mx-0 lg:w-[80vw]',
            )}
         >
            <div
               className={clsx(
                  'flex w-full items-center justify-between gap-5 px-5 py-4',
               )}
            >
               <div className='flex items-center gap-4'>
                  {/* <img
                     src={me.image}
                     alt=''
                     className='size-9 cursor-pointer rounded-full'
                     data-tooltip-id='tooltip'
                     data-tooltip-content={t(
                        'page:sticky_clip.home.back_to_product',
                     )}
                     onClick={() => {
                        if(env.isDev){
                           window.location.href = ""
                        }
                     }}
                  />

                  <Divider /> */}

                  <div
                     className='flex cursor-pointer items-center gap-2 text-white'
                     onClick={() => {
                        setQuery({
                           tab: 'home',
                        });
                     }}
                  >
                     <img src={images.Clipboard} alt='' className='size-6' />

                     <p className='text-sm'>Sticky Clip</p>
                  </div>
               </div>

               <div className={clsx('hidden items-center gap-7', 'lg:flex')}>
                  {tabs.map((item) => (
                     <p
                        key={item.label}
                        className='cursor-pointer text-sm text-woodsmoke-300 hover:text-white'
                        onClick={() => {
                           setQuery(item.query);
                        }}
                     >
                        {item.label}
                     </p>
                  ))}
               </div>

               <div className={clsx('flex items-center gap-3', 'lg:gap-5')}>
                  <CgMenuGridO
                     className={clsx(
                        'size-8 text-woodsmoke-300 active:text-white',
                        'lg:hidden',
                     )}
                     onClick={() => {
                        setShowMenu((prev) => !prev);
                     }}
                  />

                  <LanguageSwitcher
                     className='grayscale-[30%] hover:grayscale-0'
                     imgClassName='w-8'
                  />

                  {isMac && (
                     <a
                        href={getMacDownload('stickyClip')}
                        target='_blank'
                        className={clsx(
                           'flex cursor-pointer items-center gap-2 rounded-md p-2 px-3 text-sm transition-all duration-500',
                           {
                              'border border-woodsmoke-300 text-woodsmoke-300 hover:border-white hover:text-white':
                                 !isMac,
                              'bg-woodsmoke-100 hover:bg-white': isMac,
                           },
                        )}
                        rel='noreferrer'
                     >
                        <FaApple size={18} />

                        <p>{t('common:action.download')}</p>
                     </a>
                  )}

                  {isWin && (
                     <a
                        href={getWinDownload('stickyClip')}
                        target='_blank'
                        className={clsx(
                           'flex cursor-pointer items-center gap-2 rounded-md p-2 px-3 text-sm transition-all duration-500',
                           {
                              'border border-woodsmoke-300 text-woodsmoke-300 hover:border-white hover:text-white':
                                 !isWin,
                              'bg-woodsmoke-100 hover:bg-white': isWin,
                           },
                        )}
                        rel='noreferrer'
                     >
                        <FaWindows size={18} />

                        <p>
                           {t(
                              getWinDownload('stickyClip')
                                 ? 'common:download_for_win'
                                 : 'common:coming_soon',
                           )}
                        </p>
                     </a>
                  )}
               </div>
            </div>

            <AnimatePresence initial={true}>
               {showMenu && (
                  <motion.div
                     className={clsx('lg:hidden')}
                     initial={{
                        height: 0,
                        paddingBottom: 0,
                     }}
                     exit={{
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                     }}
                     animate={{
                        height: 'auto',
                     }}
                  >
                     <div className='flex flex-col gap-4 p-4'>
                        {tabs.map((item) => (
                           <p
                              key={item.label}
                              className='cursor-pointer text-sm text-woodsmoke-300 hover:text-white'
                           >
                              {item.label}
                           </p>
                        ))}
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>
   );
};
