import { Page } from '@components/layouts/page';
import { useTranslation } from 'react-i18next';
import { ProjectItem } from '../project-page/item';
import { useMyProfile } from 'hooks/shared';

export const ProjectsPage = () => {
   const me = useMyProfile();
   const { t } = useTranslation();

   return (
      <Page>
         <p className='text-center font-eb-raleway text-4xl'>
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
