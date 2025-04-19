import { Page } from '@components/layouts/page';
import { BlinkBrand } from '@components/pages/me-page/blink-brand';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import { useMyProfile } from '@packages/hooks/shared';

export const MePage = () => {
   const me = useMyProfile();
   const { t, i18n } = useTranslation();

   return (
      <Page>
         <div
            className={clsx(
               'flex flex-col items-start gap-12',
               'md:flex-1 md:flex-row',
               'lg:items-center',
            )}
         >
            <div className='flex flex-1 flex-col gap-10'>
               <div className='flex flex-1 flex-wrap items-center gap-6'>
                  <p className='flex font-bold text-5xl'>{me.name}</p>

                  <div className='flex items-center gap-4'>
                     <a
                        href={me.cv[i18n.language]}
                        rel='noreferrer'
                        target='_blank'
                        className={clsx(
                           'w-fit rounded-lg border border-green-400 bg-green-500 px-3 py-2 shadow-lg',
                           'flex items-center gap-4 shadow-green-400 transition-all duration-500 hover:bg-green-400',
                        )}
                     >
                        <p>{t('page:portfolio.me.my_cv')}</p>

                        <FiExternalLink className='size-5' />
                     </a>
                  </div>
               </div>

               <p
                  className='text-justify leading-8'
                  dangerouslySetInnerHTML={{ __html: me.shortDesc }}
               />
            </div>

            <img
               src={me.image}
               alt=''
               rel='preload'
               className={clsx(
                  'order-first mx-auto size-60 rounded-full object-cover shadow-xl shadow-woodsmoke-500',
                  'md:order-last',
                  'lg:size-80',
               )}
            />
         </div>

         <div>
            <p className='mb-5'>{t('page:portfolio.me.worked_with')}:</p>

            <BlinkBrand />
         </div>
      </Page>
   );
};
