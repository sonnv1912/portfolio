import { queryKey } from '@configs/query-key';
import { useQuery } from '@tanstack/react-query';
import { octokitRequest } from '@utils/octokit';

export const useGetRelease = (repo: string) => {
	return useQuery({
		queryKey: queryKey.release.list(repo),
		queryFn: () => {
			const response = octokitRequest<Release[]>({
				endpoint: '/releases',
				repo: repo,
			});

			return response;
		},
	});
};
