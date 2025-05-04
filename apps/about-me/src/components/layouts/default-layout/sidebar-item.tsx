import clsx from 'clsx';
import type { IconType } from 'react-icons';

type Props = {
   data: {
      label: string;
      icon: IconType;
      tab: string;
   };
   index: number;
   onPress: () => void;
};

export const DefaultLayoutSidebarItem = ({ data, onPress }: Props) => {
   return (
      <div
         className={clsx(
            'flex size-12 flex-col items-center justify-center hover:bg-woodsmoke-950 z-10',
            'sidebar-item cursor-pointer select-none gap-1 rounded-md transition-all duration-500',
         )}
         data-tooltip-id='tooltip'
         data-tooltip-content={data.label}
         data-tooltip-place='right'
         onClick={() => {
            onPress();
         }}
      >
         <data.icon className='size-5' />
      </div>
   );
};
