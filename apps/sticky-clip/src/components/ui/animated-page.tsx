import { motion } from 'motion/react';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
   tab?: string;
   className?: string;
}>;

export const AnimatedPage = ({ children, tab, className }: Props) => {
   return (
      <motion.div
         key={tab}
         transition={{
            duration: 0.5,
         }}
         exit={{ opacity: 0, y: '10%' }}
         initial={{ opacity: 0, y: '10%' }}
         animate={{ opacity: 1, y: 0 }}
         className={className}
      >
         {children}
      </motion.div>
   );
};
