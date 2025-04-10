import i18n from '@utils/locales/i18n';

export const env = {
   isDev: import.meta.env.DEV,
   githubToken: i18n.t('me:github_token_1') + i18n.t('me:github_token_2'),
   owner: 'sonnv1912',
   repo: {
      stickyClip: 'sticky-clip',
   },
};
