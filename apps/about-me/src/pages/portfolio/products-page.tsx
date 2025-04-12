import { Page } from '@components/layouts/page';
import { Loading } from '@packages/components/ui';
import { useGetAllRepoRelease } from '@packages/hooks/query';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useMyProfile } from '@packages/hooks/shared';

export const ProductsPage = () => {
   const me = useMyProfile();
   const { t } = useTranslation();
   const allRepoRelease = useGetAllRepoRelease();

   return (
      <Page>
         <p className='text-center font-bold text-4xl'>
            {t('page:portfolio.products.title').toUpperCase()}
         </p>

         <Loading loading={!allRepoRelease.some((t) => t.tag_name)} />

         <div
            className={clsx(
               'grid grid-cols-1 gap-5',
               'md:grid-cols-2',
               'lg:grid-cols-3',
            )}
         >
            {allRepoRelease.some((t) => t.tag_name) &&
               me.products.map((product, index) => (
                  <a
                     key={product.label}
                     href={product.url}
                     target='_blank'
                     className={clsx(
                        'flex gap-4 rounded-xl border border-woodsmoke-600 p-4',
                        'cursor-pointer transition-all duration-500',
                        'hover:shadow-lg hover:shadow-stickyclip-900',
                     )}
                     rel='noreferrer'
                  >
                     <div className='flex size-14 items-center justify-center rounded-xl bg-white'>
                        <img alt='' src={product.image} className='size-10' />
                     </div>

                     <div className='flex flex-1 flex-col gap-2'>
                        <p>{product.label}</p>
                        <p className='text-woodsmoke-400'>{product.desc}</p>
                        <p className='text-right text-sm text-blue-400'>
                           {allRepoRelease?.[index].tag_name}
                        </p>
                     </div>
                  </a>
               ))}
         </div>
      </Page>
   );
};
