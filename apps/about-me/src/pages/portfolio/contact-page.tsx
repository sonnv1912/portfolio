import { Page } from '@components/layouts/page';
import clsx from 'clsx';
import { useMyProfile } from '@packages/hooks/shared';
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
   const me = useMyProfile();
   const { t } = useTranslation();

   return (
      <Page>
         <p className='text-center font-bold text-4xl'>
            {t('page:portfolio.contact.title').toUpperCase()}
         </p>

         <div
            className={clsx('grid gap-12', 'md:grid-cols-1', 'lg:grid-cols-2')}
         >
            {me.contact.map((item) => (
               <a
                  target='_blank'
                  rel='noreferrer'
                  href={item.href}
                  key={item.label}
                  className='flex items-center gap-3'
               >
                  <img
                     alt=''
                     src={item.icon}
                     className='size-12 rounded-full'
                  />

                  <div className='flex flex-1 flex-col gap-1'>
                     <p className='text-slate-500'>{item.label}</p>
                     <p className='break-all font-bold hover:underline'>
                        {item.content}
                     </p>
                  </div>
               </a>
            ))}
         </div>
      </Page>
   );
};
