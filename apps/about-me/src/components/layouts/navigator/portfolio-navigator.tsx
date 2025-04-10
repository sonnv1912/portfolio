import { ContactPage } from '@/pages/portfolio/contact-page';
import { DegreesPage } from '@/pages/portfolio/degrees-page';
import { MePage } from '@/pages/portfolio/me-page';
import { ProductsPage } from '@/pages/portfolio/products-page';
import { ProjectsPage } from '@/pages/portfolio/projects-page';
import { SkillsPage } from '@/pages/portfolio/skills-page';
import { useMyProfile } from '@hooks/use-my-profile';
import { useNavigator } from '@hooks/use-navigator';
import { DefaultLayout } from '@layouts/default-layout';
import { useMemo, type ReactElement } from 'react';

export const PortfolioNavigator = () => {
   const me = useMyProfile();

   const {
      query: { name, tab },
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
      if (
         tab === 'products' &&
         me.products.find((t) => t.params.name === name)
      ) {
         return false;
      }

      return Object.keys(tabs).includes(tab || 'me');
   }, [me.products, name, tab, tabs]);

   if (!shouldShow) {
      return null;
   }

   return <DefaultLayout>{tabs[tab || 'me']}</DefaultLayout>;
};
