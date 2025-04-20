import { LanguageSwitcher } from '@packages/components/ui';
import { useNavigator } from '@hooks/use-navigator';
import clsx from 'clsx';
import { useState } from 'react';
import { AiFillProduct } from 'react-icons/ai';
import { FaAddressCard } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { HiBookOpen } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';
import { MdFolder } from 'react-icons/md';
import { DefaultLayoutSidebarItem } from './sidebar-item';
import { useTranslation } from 'react-i18next';
import { useMyProfile } from '@packages/hooks/shared';

const DefaultLayoutSidebar = () => {
   const [showMenuBtn, setShowMenuBtn] = useState(true);
   const { setQuery } = useNavigator();
   const me = useMyProfile();
   const { t } = useTranslation();

   const tabs = [
      {
         label: 'SON',
         icon: () => {
            return (
               <img src={me.image} alt='' className='size-8' rel='preload' />
            );
         },
         tab: 'me',
      },
      {
         label: t('page:portfolio.skills.title'),
         icon: GiSkills,
         tab: 'skills',
      },
      {
         label: t('page:portfolio.degrees.title'),
         icon: HiBookOpen,
         tab: 'degrees',
      },
      {
         label: t('page:portfolio.projects.title'),
         icon: MdFolder,
         tab: 'projects',
      },
      {
         label: t('page:portfolio.products.title'),
         icon: AiFillProduct,
         tab: 'products',
      },
      {
         label: t('page:portfolio.contact.title'),
         icon: FaAddressCard,
         tab: 'contact',
      },
   ];

   return (
      <>
         <div
            className={clsx(
               'sticky bottom-0 left-0 top-0 z-30 flex transition-all duration-300',
               'lg:translate-x-0 h-screen',
               {
                  '-translate-x-full': showMenuBtn,
                  'translate-x-0': !showMenuBtn,
               },
            )}
         >
            <div
               className={clsx(
                  'flex h-screen flex-col gap-2 overflow-y-auto',
                  'bg-woodsmoke-900 p-2 text-woodsmoke-200',
               )}
            >
               {tabs.map((tab, index) => (
                  <DefaultLayoutSidebarItem
                     key={tab.label}
                     data={tab}
                     index={index}
                     onPress={() => {
                        setShowMenuBtn(true);

                        setQuery({
                           tab: tab.tab,
                        });
                     }}
                  />
               ))}

               <LanguageSwitcher
                  className={clsx(
                     'size-12 hover:bg-woodsmoke-950',
                     'rounded-md transition-all duration-500',
                  )}
                  imgClassName='w-6'
               />
            </div>

            <div
               className={clsx(
                  'flex size-10 items-center justify-center rounded-r-lg bg-slate-600',
                  'absolute left-full top-0 cursor-pointer hover:bg-slate-500',
                  'lg:hidden',
                  {
                     absolute: showMenuBtn,
                  },
               )}
               onClick={() => setShowMenuBtn((prev) => !prev)}
            >
               <IoMenu className='size-6 text-white' />
            </div>
         </div>

         <div
            className={clsx(
               'absolute bottom-0 left-0 right-0 top-0 transition-all duration-300',
               'lg:hidden',
               {
                  '-z-20 bg-transparent opacity-0': showMenuBtn,
                  'z-20 bg-black/50 opacity-100': !showMenuBtn,
               },
            )}
            onClick={() => {
               setShowMenuBtn(true);
            }}
         />
      </>
   );
};

export { DefaultLayoutSidebar };
