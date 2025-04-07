import { jwtDecode } from 'jwt-decode';

const token = jwtDecode<{ github_token: string }>(
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnaXRodWJfdG9rZW4iOiJnaHBfZ1ByOFVYckdqMkJlbWxmMDBQOHhmaWFSYXd5eHlEMmtWbzB2IiwiaWF0IjoxNzQ0MDA5NDE4fQ.bFm_-0QxcrJVkWeDqExk75E0WrBrmuQDLWNQohIPYK8',
);

export const env = {
	githubToken: token.github_token,
	owner: 'sonnv1912',
	repo: {
		stickyClip: 'sticky-clip',
	},
};
