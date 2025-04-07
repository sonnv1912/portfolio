export const queryKey = {
	release: {
		list: (repo: string) => ['list', 'releases', repo],
		latest: (repo: string) => ['latest', 'release', repo],
	},
};
