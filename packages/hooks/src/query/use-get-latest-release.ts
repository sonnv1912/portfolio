import { queryKey } from 'configs/query-key';
import { useQuery } from '@tanstack/react-query';
import { octokitRequest } from 'utils/octokit';
import type { Release } from 'types/data';

export const useGetLatestRelease = (repo: string) => {
   return useQuery({
      queryKey: queryKey.release.latest(repo),
      queryFn: () => {
         const response = octokitRequest<Release>({
            endpoint: '/releases/latest',
            repo: repo,
         });

         return response;
      },
   });
};
