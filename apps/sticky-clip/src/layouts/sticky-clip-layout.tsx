import { StickyClipLayoutHeader } from '@components/layouts/sticky-clip-layout/header';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export const StickyClipLayout = ({ children }: PropsWithChildren) => {
   return (
      <div className='relative bg-black'>
         <StickyClipLayoutHeader />

         <div
            className={clsx(
               'h-screen overflow-auto scroll-smooth px-5 pb-10 pt-24 text-white',
               'lg:px-20',
            )}
            style={{
               scrollbarGutter: 'stable',
            }}
         >
            {children}
         </div>
      </div>
   );
};
