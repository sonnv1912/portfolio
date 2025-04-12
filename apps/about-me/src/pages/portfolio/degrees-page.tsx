import { Page } from '@components/layouts/page';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiXMark } from 'react-icons/hi2';
import { MdLocationPin } from 'react-icons/md';
import { useMyProfile } from '@packages/hooks/shared';

export const DegreesPage = () => {
   const me = useMyProfile();
   const { t } = useTranslation();
   const [active, setActive] = useState('');

   return (
      <Page>
         <p className='text-center font-eb-raleway text-4xl'>
            {t('page:portfolio.degrees.title').toUpperCase()}
         </p>

         <div>
            {me.education.map((item) => (
               <div
                  key={item.label}
                  className={clsx(
                     'relative ml-3 flex flex-wrap gap-8',
                     'md:gap-12',
                  )}
               >
                  <div className='absolute bottom-0 left-[-29px] top-0 w-[1px] bg-woodsmoke-900' />

                  <div className='absolute -left-8 size-2 rounded-full bg-white' />

                  <div className='flex flex-col gap-5'>
                     <div className='flex items-center gap-4'>
                        <p>{item.time}</p>

                        <div className='flex items-center gap-1'>
                           <MdLocationPin />

                           <p>{item.location}</p>
                        </div>
                     </div>

                     <div className='flex items-center gap-4'>
                        <img
                           alt=''
                           src={item.image}
                           className='size-14 rounded-xl object-cover'
                        />

                        <div className='flex flex-col gap-2'>
                           <p className='text-woodsmoke-400'>{item.label}</p>

                           <p>{item.content}</p>

                           <p>
                              {t('page:portfolio.degrees.graduation_level')}:{' '}
                              {item.level}
                           </p>
                        </div>
                     </div>

                     <div className='grid grid-cols-3 gap-8'>
                        {item.images.map((image) => (
                           <div
                              key={image}
                              className='h-fit transition-all hover:scale-105'
                           >
                              <img
                                 alt=''
                                 className='cursor-pointer rounded-lg shadow-lg shadow-woodsmoke-600'
                                 src={image}
                                 onClick={() => {
                                    setActive(image);
                                 }}
                              />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {active && (
            <div
               className={clsx(
                  'fixed bottom-0 left-0 right-0 top-0 z-50',
                  'flex cursor-pointer items-center justify-center bg-white/40 p-12',
                  'md:p-12',
                  'lg:p-20',
               )}
            >
               <img
                  alt=''
                  src={active}
                  className='h-full w-full object-contain'
                  onClick={() => {
                     setActive('');
                  }}
               />

               <div className='absolute right-4 top-4 flex items-center'>
                  <div
                     className={clsx(
                        'cursor-pointer rounded-full bg-woodsmoke-700 p-2',
                     )}
                     onClick={() => {
                        setActive('');
                     }}
                  >
                     <HiXMark size={28} className='text-white' />
                  </div>
               </div>
            </div>
         )}
      </Page>
   );
};
