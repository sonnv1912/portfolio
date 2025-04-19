import { DefaultLayoutSidebar } from '@components/layouts/default-layout/sidebar';
import type { PropsWithChildren } from 'react';

export const DefaultLayout = ({ children }: PropsWithChildren) => {
   return (
      <div className='flex min-h-screen bg-black relative'>
         <DefaultLayoutSidebar />

         <div
            className='flex-1 text-white'
            style={{
               scrollbarGutter: 'stable',
            }}
         >
            {children}
         </div>

         <svg
            aria-hidden='true'
            className='pointer-events-none absolute w-full h-full fill-blue-500/80 stroke-blue-500/80 [mask-image:linear-gradient(to_top,_#ffffffad,_transparent)] opacity-[.30]'
         >
            <defs>
               <pattern
                  id=':R1oafknq6ja:'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
                  x='-1'
                  y='-1'
               >
                  <path d='M.5 20V.5H20' fill='none' strokeDasharray='0' />
               </pattern>
            </defs>
            <rect
               width='100%'
               height='100%'
               strokeWidth='0'
               fill='url(#:R1oafknq6ja:)'
            />
         </svg>
      </div>
   );
};
