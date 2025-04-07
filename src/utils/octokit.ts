import { env } from '@configs/env';
import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: env.githubToken });

export const octokitRequest = async <T>({ endpoint, repo }: OctokitRequestProps) => {
	const response = await octokit.request(`GET /repos/{owner}/{repo}${endpoint}`, {
		owner: env.owner,
		repo: repo,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	});

	return response as OctokitRequestResponse<T>;
};
