import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export const Page = ({
   children,
   className,
}: PropsWithChildren<{ className?: string }>) => {
   return (
      <div>
         <div
            className={clsx(
               'flex min-h-screen flex-col gap-16 p-8 relative z-10',
               'md:p-12',
               'lg:p-20',
               className,
            )}
         >
            {children}
         </div>

         <svg
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 h-full w-full fill-blue-500/80 stroke-blue-500/80 [mask-image:linear-gradient(to_top,_#ffffffad,_transparent)] opacity-[.30] visible'
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
