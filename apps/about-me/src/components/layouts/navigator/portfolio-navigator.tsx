import { ContactPage } from '@/pages/portfolio/contact-page';
import { DegreesPage } from '@/pages/portfolio/degrees-page';
import { MePage } from '@/pages/portfolio/me-page';
import { ProductsPage } from '@/pages/portfolio/products-page';
import { ProjectsPage } from '@/pages/portfolio/projects-page';
import { SkillsPage } from '@/pages/portfolio/skills-page';
import { useNavigator } from '@hooks/use-navigator';
import { DefaultLayout } from '@layouts/default-layout';
import { type ReactElement, useMemo } from 'react';

export const PortfolioNavigator = () => {
   const {
      query: { tab },
   } = useNavigator();

   const tabs = useMemo<Record<string, ReactElement>>(
      () => ({
         me: <MePage />,
         skills: <SkillsPage />,
         degrees: <DegreesPage />,
         projects: <ProjectsPage />,
         contact: <ContactPage />,
         products: <ProductsPage />,
      }),
      [],
   );

   const shouldShow = useMemo(() => {
      return Object.keys(tabs).includes(tab);
   }, [tab, tabs]);

   if (!shouldShow) {
      return null;
   }

   return <DefaultLayout>{tabs[tab]}</DefaultLayout>;
};
