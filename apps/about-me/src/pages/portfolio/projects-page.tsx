import { Page } from '@components/layouts/page';
import { useTranslation } from 'react-i18next';
import { useMyProfile } from '@packages/hooks/shared';
import { ProjectItem } from '@components/pages/project-page/item';

export const ProjectsPage = () => {
   const me = useMyProfile();
   const { t } = useTranslation();

   return (
      <Page>
         <p className='text-center font-bold text-4xl'>
            {t('page:portfolio.projects.title').toUpperCase()}
         </p>

         <div>
            {me.experiences.map((item) => (
               <ProjectItem key={item.appName} data={item} />
            ))}
         </div>
      </Page>
   );
};
