import { queryKey } from 'configs/query-key';
import { useQueries, useQuery } from '@tanstack/react-query';
import { octokitRequest } from 'utils/octokit';
import type { Release } from 'types/data/release.js';
import { useMyProfile } from '../shared/use-my-profile';

const getRelease = (repo: string) => {
   return octokitRequest<Release[]>({
      endpoint: '/releases',
      repo: repo,
   });
};

export const useGetRelease = (repo: string) => {
   return useQuery({
      queryKey: queryKey.release.list(repo),
      queryFn: () => {
         const response = getRelease(repo);

         return response;
      },
   });
};

export const useGetAllRepoRelease = () => {
   const me = useMyProfile();

   return useQueries({
      queries: me.products.map((product) => ({
         queryKey: queryKey.release.latest(product.repo),
         queryFn: () => {
            const response = octokitRequest<Release>({
               endpoint: '/releases/latest',
               repo: product.repo,
            });

            return response;
         },
      })),
      combine(result) {
         return result.map((t) => t.data?.data).filter((t) => !!t);
      },
   });
};
