import { LanguageSwitcher } from '@components/ui/language-switcher';
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
import { useMyProfile } from 'hooks/shared';

const DefaultLayoutSidebar = () => {
   const [showMenuBtnClicked, setShowMenuBtnClicked] = useState(true);
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
      <div>
         <div
            className={clsx(
               'absolute bottom-0 left-0 top-0 z-20 flex transition-all duration-300',
               'lg:relative lg:translate-x-0',
               {
                  '-translate-x-full': showMenuBtnClicked,
                  'translate-x-0': !showMenuBtnClicked,
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
                        setShowMenuBtnClicked(true);

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
               />
            </div>

            <div
               className={clsx(
                  'flex size-10 items-center justify-center rounded-r-lg bg-slate-600',
                  'absolute left-full top-0 cursor-pointer hover:bg-slate-500',
                  'lg:hidden',
                  {
                     absolute: showMenuBtnClicked,
                  },
               )}
               onClick={() => setShowMenuBtnClicked((prev) => !prev)}
            >
               <IoMenu className='size-6 text-white' />
            </div>
         </div>

         <div
            className={clsx(
               'absolute bottom-0 left-0 right-0 top-0 transition-all duration-300',
               'lg:hidden',
               {
                  '-z-10 bg-transparent opacity-0': showMenuBtnClicked,
                  'z-10 bg-black/50 opacity-100': !showMenuBtnClicked,
               },
            )}
            onClick={() => {
               setShowMenuBtnClicked(true);
            }}
         />
      </div>
   );
};

export { DefaultLayoutSidebar };
