export * from './Actions';
export * from './Activity';
export * from './Apps';
export * from './Billing';
export * from './Checks';
export * from './CodeScanning';
export * from './CodesOfConduct';
export * from './Emojis'; // done
export * from './Enterprise';
export * from './Gists';
export * from './GitDatabase';
export * from './GitIgnore'; // Done
export * from './Interactions';
export * from './Issues';
export * from './Licenses'; // Done
export * from './Markdown'; // Done
export * from './Meta';
export * from './Migrations';
export * from './Organizations';
export * from './Packages';
export * from './Projects';
export * from './Pulls';
export * from './Reactions';
export * from './Repositories';
export * from './SCIM';
export * from './Search';
export * from './SecretScanning'; // Done
export * from './Teams';
export * from './Users';

export const GithubBaseURL = 'https://api.github.com';

export enum OAuth2Scope {
	/**
	 * Grants read-only access to public information (includes public user profile info, public
	 * repository info, and gists.
	 */
	None = '',

	/**
	 * Grants full access to private and public repositories. That includes read/write access to
	 * code, commit statuses, repository and organization projects, invitations, collaborators,
	 * adding team memberships, deployment statuses, and repository webhooks for public and private
	 * repositories and organizations. Also grants ability to manage user projects.
	 */
	Repo = 'repo',

	/**
	 * Grants read/write access to public and private repository commit statuses. This scope is only
	 * necessary to grant other users or services access to private repository commit statuses
	 * without granting access to the code.
	 */
	RepoStatus = 'repo:status',

	/**
	 * Grants access to deployment statuses for public and private repositories. This scope is
	 * only necessary to grant other users or services access to deployment statuses, without
	 * granting access to the code.
	 */
	RepoDeployment = 'repo_deployment',

	/**
	 * Limits access to public repositories. That includes read/write access to code, commit
	 * statuses, repository projects, collaborators, and deployment statuses for public repositories
	 * and organizations. Also required for starring public repositories.
	 */
	PublicRepo = 'public_repo',

	/**
	 * Grants accept/decline abilities for invitations to collaborate on a repository. This scope is
	 * only necessary to grant other users or services access to invites without granting access to
	 * the code.
	 */
	RepoInvite = 'repo:invite',

	/**
	 * Grants read and write access to security events in the code scanning and secret
	 * scanning APIs. This scope is only necessary to grant other users or services access to
	 * security events without granting access to the code.
	 */
	SecurityEvents = 'security_events',

	/**
	 * Grants read, write, ping, and delete access to repository hooks in public and private
	 * repositories. The `repo` and `public_repo` scopes grants full access to repositories,
	 * including repository hooks. Use the `admin:repo_hook` scope to limit access to only
	 * repository hooks.
	 */
	AdminRepoHook = 'admin:repo_hook',

	/**
	 * Grants read, write, and ping access to hooks in public or private repositories.
	 */
	WriteRepoHook = 'write:repo_hook',

	/**
	 * Grants read and ping access to hooks in public or private repositories.
	 */
	ReadRepoHook = 'read:repo_hook',

	/**
	 * Fully manage the organization and its teams, projects, and memberships.
	 */
	AdminOrg = 'admin:org',

	/**
	 * Read and write access to organization membership, organization projects, and team membership.
	 */
	WriteOrg = 'write:org',

	/**
	 * Read-only access to organization membership, organization projects, and team membership.
	 */
	ReadOrg = 'read:org',

	/**
	 * Fully manage public keys.
	 */
	AdminPublicKey = 'admin:public_key',

	/**
	 * Create, list, and view details for public keys.
	 */
	WritePublicKey = 'write:public_key',

	/**
	 * List and view details for public keys.
	 */
	ReadPublicKey = 'read:public_key',

	/**
	 * Grants read, write, ping, and delete access to organization hooks.
	 *
	 * @remarks
	 * OAuth tokens will only be able to perform these actions on organization hooks which were
	 * created by the OAuth App. Personal access tokens will only be able to perform these actions
	 * on organization hooks created by a user.
	 */
	AdminOrgHook = 'admin:org_hook',

	/**
	 * Grants write access to gists.
	 */
	Gist = 'gist',

	/**
	 * Grants read access to a user's notifications, mark as read access to threads, watch and
	 * unwatch access to a repository, and read, write, and delete access to thread subscriptions.
	 */
	Notifications = 'notifcations',

	/**
	 * Grants read/write access to profile info only. This scope includes `user:email` and
	 * `user:follow`.
	 */
	User = 'user',

	/**
	 * Grants access to read a user's profile data.
	 */
	ReadUser = 'read:user',

	/**
	 * Grants read access to a user's email addresses.
	 */
	UserEmail = 'user:email',

	/**
	 * Grants access to follow or unfollow other users.
	 */
	UserFollow = 'user:follow',

	/**
	 * Grants access to delete adminable repositories.
	 */
	DeleteRepo = 'delete_repo',

	/**
	 * Allows read and write access for team discussions.
	 */
	WriteDiscussion = 'write:discussion',

	/**
	 * Allows read access for team discussions.
	 */
	ReadDiscussion = 'read:discussion',

	/**
	 * Grants access to upload or publish a package in GitHub Packages.
	 */
	WritePackages = 'write:packages',

	/**
	 * Grants access to download or install packages from GitHub Packages.
	 */
	ReadPackages = 'read:packages',

	/**
	 * Grants access to delete packages from GitHub Packages.
	 */
	DeletePackages = 'delete:packages',

	/**
	 * Fully manage GPG keys.
	 */
	AdminGPGKey = 'admin:gpg_key',

	/**
	 * Create, list, and view details for GPG keys.
	 */
	WriteGPGKey = 'write:gpg_key',

	/**
	 * List and view details for GPG keys.
	 */
	ReadGPGKey = 'read:gpg_key',

	/**
	 * Grants the ability to add and update GitHub Actions workflow files. Workflow files can be
	 * committed without this scope if the same file (with both the same path and contents) exists
	 * on another branch in the same repository. Workflow files can expose `GITHUB_TOKEN` which may
	 * have a different set of scopes.
	 */
	Workflow = 'workflow'
}
