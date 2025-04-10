import { DefaultLayoutSidebar } from '@components/layouts/default-layout/sidebar';
import { type PropsWithChildren, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
   const { t } = useTranslation();

   useEffect(() => {
      document.title = t('page:portfolio.title');
   }, [t]);

   return (
      <div className='relative flex'>
         <DefaultLayoutSidebar />

         <div
            className='h-screen flex-1 overflow-auto scroll-smooth bg-black text-white'
            style={{
               scrollbarGutter: 'stable',
            }}
         >
            {children}
         </div>
      </div>
   );
};
