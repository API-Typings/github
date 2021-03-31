import type { Nullable } from 'extended-utility-types';
import type {
	ActorLocation,
	AuditEntryActor,
	CommentAuthorAssociation,
	CommentCannotUpdateReason,
	GitSignatureState,
	LabelConnection,
	LabelOrder,
	LabelOrderField,
	License,
	LockReason,
	OperationType,
	OrderBy,
	Organization,
	PackageConnection,
	PackageOrder,
	PackageOrderField,
	PackageType,
	Paging,
	PagingArgs,
	PinnableItemConnection,
	PinnableItemType,
	ProfileItemShowcase,
	Project,
	ProjectConnection,
	ProjectOrder,
	ProjectOrderField,
	ProjectState,
	ReactionConnection,
	ReactionContent,
	ReactionGroup,
	ReactionOrder,
	ReactionOrderField,
	Repository,
	RepositoryAffiliation,
	RepositoryConnection,
	RepositoryLockReason,
	RepositoryOrder,
	RepositoryOrderField,
	RepositoryPrivacy,
	Sponsorship,
	SponsorshipConnection,
	SponsorshipOrder,
	SponsorshipOrderField,
	SponsorsListing,
	StargazerConnection,
	StarOrder,
	StarOrderField,
	SubscriptionState,
	Team,
	Topic,
	User,
	UserConnection,
	UserContentEditConnection,
	UserStatusConnection,
	UserStatusOrder,
	UserStatusOrderField
} from './';

/**
 * Represents an object which can take actions on GitHub. Typically a User or Bot.
 */
export interface Actor {
	/**
	 * A URL pointing to the actor's public avatar.
	 */
	avatarUrl: string &
		((
			/**
			 * The size of the resulting square image.
			 */
			size: number
		) => string);

	/**
	 * The username of the actor.
	 */
	login: string;

	/**
	 * The HTTP path for this actor.
	 */
	resourcePath: string;

	/**
	 * The HTTP URL for this acotr.
	 */
	url: string;
}

/**
 * An object that can have users assigned to it.
 */
export interface Assignable {
	/**
	 * A list of Users assigned to this object.
	 */
	assignees: UserConnection & Paging<UserConnection>;
}

/**
 * An entry in the audit log.
 */
export interface AuditEntry {
	/**
	 * The action name.
	 */
	action: string;

	/**
	 * The user who initiated the action.
	 */
	actor?: Nullable<AuditEntryActor>;

	/**
	 * The IP address of the actor.
	 */
	actorIp?: Nullable<string>;

	/**
	 * A readable representation of the actor's location.
	 */
	actorLocation?: Nullable<ActorLocation>;

	/**
	 * The username of the user who initiated the action.
	 */
	actorLogin?: Nullable<string>;

	/**
	 * The HTTP path for the actor.
	 */
	actorResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for the actor.
	 */
	actorUrl?: Nullable<string>;

	/**
	 * The time the action was initiated.
	 */
	createdAt: string;

	/**
	 * The corresponding operation type for the action.
	 */
	operationType?: Nullable<OperationType>;

	/**
	 * The user affected by the action.
	 */
	user?: Nullable<User>;

	/**
	 * For actions involving two users, the actor is the initiator and the user is the affected.
	 * user.
	 */
	userLogin?: Nullable<string>;

	/**
	 * The HTTP path for the user.
	 */
	userResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for the user.
	 */
	userUrl?: Nullable<string>;
}

/**
 * An object that can be closed.
 */
export interface Closable {
	/**
	 * `true` if the object is closed (definition of closed may depend on interface).
	 */
	closed: boolean;

	/**
	 * Identifies the date and time when the object was closed.
	 */
	closedAt?: Nullable<string>;
}

/**
 * Represents a comment.
 */
export interface Comment {
	/**
	 * The actor who authored the comment.
	 */
	author?: Nullable<Actor>;

	/**
	 * Author's association with the subject of the comment.
	 */
	authorAssociation: CommentAuthorAssociation;

	/**
	 * The body as Markdown.
	 */
	body: string;

	/**
	 * The body rendered to HTML.
	 */
	bodyHTML: string;

	/**
	 * The body rendered to text.
	 */
	bodyText: string;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * Check if this comment was created via an email reply.
	 */
	createdViaEmail: boolean;

	/**
	 * The actor who edited the comment.
	 */
	editor?: Nullable<Actor>;

	/**
	 * Check if this comment was edited and includes an edit with the creation data.
	 */
	includesCreatedEdit: boolean;

	/**
	 * The moment the editor made the last edit.
	 */
	lastEditedAt?: Nullable<string>;

	/**
	 * Identifies when the comment was published at.
	 */
	publishedAt?: Nullable<string>;

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * A list of edits to this content.
	 */
	userContentEdits?: Nullable<UserContentEditConnection> & Paging<Nullable<UserContentEditConnection>>;

	/**
	 * Did the viewer author this comment.
	 */
	viewerDidAuthor: boolean;
}

/**
 * Represents a contribution a user made on GitHub, such as opening an issue.
 */
export interface Contribution {
	/**
	 * Whether this contribution is associated with a record you do not have access to. For.
	 * example, your own 'first issue' contribution may have been made on a repository you can no.
	 * longer access.
	 */
	isRestricted: boolean;

	/**
	 * When this contribution was made.
	 */
	occurredAt: string;

	/**
	 * The HTTP path for this contribution.
	 */
	resourcePath: string;

	/**
	 * The HTTP URL for this contribution.
	 */
	url: string;

	/**
	 * The user who made this contribution.
	 */
	user: User;
}

/**
 * Entities that can be deleted.
 */
export interface Deletable {
	/**
	 * Check if the current viewer can delete this object.
	 */
	viewerCanDelete: boolean;
}

/**
 * Metadata for an audit entry containing enterprise account information.
 */
export interface EnterpriseAuditEntryData {
	/**
	 * The HTTP path for this enterprise.
	 */
	enterpriseResourcePath?: Nullable<string>;

	/**
	 * The slug of the enterprise.
	 */
	enterpriseSlug?: Nullable<string>;

	/**
	 * The HTTP URL for this enterprise.
	 */
	enterpriseUrl?: Nullable<string>;
}

/**
 * Represents a Git object.
 */
export interface GitObject extends Node {
	/**
	 * An abbreviated version of the Git object ID.
	 */
	abbreviatedOid: string;

	/**
	 * The HTTP path for this Git object.
	 */
	commitResourcePath: string;

	/**
	 * The HTTP URL for this Git object.
	 */
	commitUrl: string;

	/**
	 * The Git object ID.
	 */
	oid: string;

	/**
	 * The Repository the Git object belongs to.
	 */
	repository: Repository;
}

/**
 * Information about a signature (GPG or S/MIME) on a Commit or Tag.
 */
export interface GitSignature {
	/**
	 * Email used to sign this object.
	 */
	email: string;

	/**
	 * True if the signature is valid and verified by GitHub.
	 */
	isValid: boolean;

	/**
	 * Payload for GPG signing object. Raw ODB object without the signature header.
	 */
	payload: string;

	/**
	 * ASCII-armored signature header from object.
	 */
	signature: string;

	/**
	 * GitHub user corresponding to the email signing this commit.
	 */
	signer?: Nullable<User>;

	/**
	 * The state of this signature. `VALID` if signature is valid and verified by.
	 * GitHub, otherwise represents reason why signature is considered invalid.
	 */
	state: GitSignatureState;

	/**
	 * True if the signature was made with GitHub's signing key.
	 */
	wasSignedByGitHub: boolean;
}

/**
 * An individual line of a hovercard.
 */
export interface HovercardContext {
	/**
	 * A string describing this context.
	 */
	message: string;

	/**
	 * An octicon to accompany this context.
	 */
	octicon: string;
}

/**
 * An object that can have labels assigned to it.
 */
export interface Labelable {
	/**
	 * A list of labels associated with the object.
	 */
	labels?: Nullable<LabelConnection> &
		((args: PagingArgs & OrderBy<LabelOrderField, LabelOrder>) => Nullable<LabelConnection>);
}

/**
 * An object that can be locked
 */
export interface Lockable {
	/**
	 * Reason that the conversation was locked.
	 */
	activeLockReason?: Nullable<LockReason>;

	/**
	 * `true` if the object is locked
	 */
	locked: boolean;
}

/**
 * Entities that have members who can set status messages.
 */
export interface MemberStatusable {
	/**
	 * Get the status messages members of this entity have set that are either public or visible
	 * only to the organization.
	 */
	memberStatuses: UserStatusConnection &
		((args: PagingArgs & OrderBy<UserStatusOrderField, UserStatusOrder>) => UserConnection);
}

/**
 * Entities that can be minimized.
 */
export interface Minimizable {
	/**
	 * Returns whether or not a comment has been minimized.
	 */
	isMinimized: boolean;

	/**
	 * Returns why the comment was minimized.
	 */
	minimizedReason?: Nullable<string>;

	/**
	 * Check if the current viewer can minimize this object.
	 */
	viewerCanMinimize: boolean;
}

// ANCHOR Node

/**
 * An object with an ID.
 */
export type Node<T extends string = 'id'> = {
	/**
	 * ID of the object.
	 */
	[K in T]: string;
};

/**
 * Metadata for an audit entry with action oauth_application.
 */
export interface OauthApplicationAuditEntryData {
	/**
	 * The name of the OAuth Application.
	 */
	oauthApplicationName?: Nullable<string>;

	/**
	 * The HTTP path for the OAuth Application.
	 */
	oauthApplicationResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for the OAuth Application.
	 */
	oauthApplicationUrl?: Nullable<string>;
}

/**
 * Metadata for an audit entry with action org.
 */
export interface OrganizationAuditEntryData {
	/**
	 * The Organization associated with the Audit Entry.
	 */
	organization?: Nullable<Organization>;

	/**
	 * The name of the Organization.
	 */
	organizationName?: Nullable<string>;

	/**
	 * The HTTP path for the organization.
	 */
	organizationResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for the organization.
	 */
	organizationUrl?: Nullable<string>;
}

/**
 * Represents an owner of a package.
 */
export interface PackageOwner extends Node {
	/**
	 * A list of packages under the owner.
	 */
	packages: PackageConnection &
		((
			args: PagingArgs &
				OrderBy<PackageOrderField, PackageOrder> & {
					/**
					 * Find packages by their name.
					 */
					names?: Nullable<Nullable<string>[]>;

					/**
					 * Filter registry package by type.
					 */
					packageType?: Nullable<PackageType>;

					/**
					 * Find packages in a repository by ID.
					 */
					repositoryId?: Nullable<string>;
				}
		) => PackageConnection);
}

/**
 * Represents any entity on GitHub that has a profile page.
 */
export interface ProfileOwner extends Node {
	/**
	 * Determine if this repository owner has any items that can be pinned to their profile.
	 */
	anyPinnableItems: boolean & ((type?: Nullable<PinnableItemType>) => boolean);

	/**
	 * The public profile email.
	 */
	email?: Nullable<string>;

	/**
	 * Showcases a selection of repositories and gists that the profile owner has.
	 * either curated or that have been selected automatically based on popularity.
	 */
	itemShowcase: ProfileItemShowcase;

	/**
	 * The public profile location.
	 */
	location?: Nullable<string>;

	/**
	 * The username used to login.
	 */
	login: string;

	/**
	 * The public profile name.
	 */
	name?: Nullable<string>;

	/**
	 * A list of repositories and gists this profile owner can pin to their profile.
	 */
	pinnableItems: PinnableItemConnection &
		((
			args: PagingArgs & {
				/**
				 * Filter the types of pinned items that are returned.
				 */
				types: Nullable<PinnableItemType[]>;
			}
		) => PinnableItemConnection);

	/**
	 * A list of repositories and gists this profile owner has pinned to their profile.
	 */
	pinnedItems: PinnableItemConnection &
		((
			args: PagingArgs & {
				/**
				 * Filter the types of pinned items that are returned.
				 */
				types: Nullable<PinnableItemType[]>;
			}
		) => PinnableItemConnection);

	/**
	 * Returns how many more items this profile owner can pin to their profile.
	 */
	pinnedItemsRemaining: number;

	/**
	 * Can the viewer pin repositories and gists to the profile?
	 */
	viewerCanChangePinnedItems: boolean;

	/**
	 * The public profile website URL.
	 */
	websiteUrl?: Nullable<string>;
}

/**
 * Represents an owner of a Project.
 */
export interface ProjectOwner extends Node {
	/**
	 * Find project by number.
	 */
	project?: Nullable<Project> &
		((
			/**
			 * The project number to find.
			 */
			number: number
		) => Nullable<Project>);

	/**
	 * A list of projects under the owner.
	 */
	projects: ProjectConnection &
		((
			args: PagingArgs &
				OrderBy<ProjectOrderField, ProjectOrder> & {
					/**
					 * Query to search projects by, currently only searching by name.
					 */
					search?: Nullable<string>;

					/**
					 * A list of states to filter the projects by.
					 */
					states?: Nullable<ProjectState[]>;
				}
		) => ProjectConnection);

	/**
	 * The HTTP path listing owners projects.
	 */
	projectsResourcePath: string;

	/**
	 * The HTTP URL listing owners projects.
	 */
	projectsUrl: string;

	/**
	 * Can the current viewer create new projects on this owner.
	 */
	viewerCanCreateProjects: boolean;
}

/**
 * Represents a subject that can be reacted on.
 */
export interface Reactable extends Node {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * A list of reactions grouped by content left on the subject.
	 */
	reactionGroups?: Nullable<ReactionGroup[]>;

	/**
	 * A list of Reactions left on the Issue.
	 */
	reactions: ReactionConnection &
		((
			args: PagingArgs &
				OrderBy<ReactionOrderField, ReactionOrder> & {
					/**
					 * Allows filtering Reactions by emoji.
					 */
					content?: Nullable<ReactionContent>;
				}
		) => ReactionConnection);

	/**
	 * Can user react to this subject.
	 */
	viewerCanReact: boolean;
}

/**
 * Metadata for an audit entry with action repo.
 */
export interface RepositoryAuditEntryData {
	/**
	 * The repository associated with the action.
	 */
	repository?: Nullable<Repository>;

	/**
	 * The name of the repository.
	 */
	repositoryName?: Nullable<string>;

	/**
	 * The HTTP path for the repository.
	 */
	repositoryResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for the repository.
	 */
	repositoryUrl?: Nullable<string>;
}

/**
 * A subset of repository info.
 */
export interface RepositoryInfo extends UniformResourceLocatable {
	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;

	/**
	 * The description of the repository.
	 */
	description?: Nullable<string>;

	/**
	 * The description of the repository rendered to HTML.
	 */
	descriptionHTML: string;

	/**
	 * Returns how many forks there are of this repository in the whole network.
	 */
	forkCount: number;

	/**
	 * Indicates if the repository has issues feature enabled.
	 */
	hasIssuesEnabled: boolean;

	/**
	 * Indicates if the repository has the Projects feature enabled.
	 */
	hasProjectsEnabled: boolean;

	/**
	 * Indicates if the repository has wiki feature enabled.
	 */
	hasWikiEnabled: boolean;

	/**
	 * The repository's URL.
	 */
	homepageUrl?: Nullable<string>;

	/**
	 * Indicates if the repository is unmaintained.
	 */
	isArchived: boolean;

	/**
	 * Identifies if the repository is a fork.
	 */
	isFork: boolean;

	/**
	 * Indicates if a repository is either owned by an organization, or is a private fork of an
	 * organization repository.
	 */
	isInOrganization: boolean;

	/**
	 * Indicates if the repository has been locked or not.
	 */
	isLocked: boolean;

	/**
	 * Identifies if the repository is a mirror.
	 */
	isMirror: boolean;

	/**
	 * Identifies if the repository is private.
	 */
	isPrivate: boolean;

	/**
	 * Identifies if the repository is a template that can be used to generate new repositories.
	 */
	isTemplate: boolean;

	/**
	 * The license associated with the repository.
	 */
	licenseInfo?: Nullable<License>;

	/**
	 * The reason the repository has been locked.
	 */
	lockReason?: Nullable<RepositoryLockReason>;

	/**
	 * The repository's original mirror URL.
	 */
	mirrorUrl?: Nullable<string>;

	/**
	 * The name of the repository.
	 */
	name: string;

	/**
	 * The repository's name with owner.
	 */
	nameWithOwner: string;

	/**
	 * The image used to represent this repository in Open Graph data.
	 */
	openGraphImageUrl: string;

	/**
	 * The User owner of the repository.
	 */
	owner: RepositoryOwner;

	/**
	 * Identifies when the repository was last pushed to.
	 */
	pushedAt?: Nullable<string>;

	/**
	 * A description of the repository, rendered to HTML without any links in it.
	 */
	shortDescriptionHTML: string &
		((
			/**
			 * How many characters to return.
			 *
			 * @defaultValue 200
			 */
			limit?: Nullable<number>
		) => string);

	/**
	 * Identifies the date and time when the object was last updated.
	 */
	updatedAt: string;

	/**
	 * Whether this repository has a custom image to use with Open Graph as opposed to being.
	 * represented by the owner's avatar.
	 */
	usesCustomOpenGraphImage: boolean;
}

/**
 * Represents a object that belongs to a repository.
 */
export interface RepositoryNode {
	/**
	 * The repository associated with this node.
	 */
	repository: Repository;
}

/**
 * Represents an owner of a Repository.
 */
export interface RepositoryOwner extends Actor, Node {
	/**
	 * A list of repositories that the user owns.
	 */
	repositories: RepositoryConnection &
		((
			args: PagingArgs &
				OrderBy<RepositoryOrderField, RepositoryOrder> & {
					/**
					 * Array of viewer's affiliation options for repositories returned from the
					 * connection.
					 */
					affiliations?: Nullable<Nullable<RepositoryAffiliation>[]>;

					/**
					 * If non-null, filters repositories according to whether they are forks of
					 * another repository.
					 */
					isFork?: Nullable<boolean>;

					/**
					 * If non-null, filters repositories according to whether they have been locked.
					 */
					isLocked?: Nullable<boolean>;

					/**
					 * Array of owner's affiliation options for repositories returned from the
					 * connection.
					 */
					ownerAffiliations?: Nullable<Nullable<RepositoryAffiliation>[]>;

					/**
					 * If non-null, filters repositories according to privacy.
					 */
					privacy?: RepositoryPrivacy;
				}
		) => RepositoryConnection);

	/**
	 * Find Repository.
	 */
	repository?: Nullable<Repository> &
		((
			/**
			 * Name of Repository to find.
			 */
			name: string
		) => Repository);
}

/**
 * Represents a type that can be required by a pull request for merging.
 */
export interface RequirableByPullRequest {
	/**
	 * Whether this is required to pass before merging for a specific pull request.
	 */
	isRequired: boolean &
		((
			/**
			 * The ID of the pull request this is required for.
			 */
			pullRequestId: string | number,

			/**
			 * The number of the pull request this is required for.
			 */
			pullRequestNumber: number
		) => boolean);
}

/**
 * Entities that can be sponsored through GitHub Sponsors.
 */
export interface Sponsorable {
	/**
	 * True if this user/organization has a GitHub Sponsors listing.
	 */
	hasSponsorsListing: boolean;

	/**
	 * Check if the given account is sponsoring this user/organization.
	 */
	isSponsoredBy: boolean &
		((
			/**
			 * The target account's login.
			 */
			accountLogin: string
		) => boolean);

	/**
	 * True if the viewer is sponsored by this user/organization.
	 */
	isSponsoringViewer: boolean;

	/**
	 * The GitHub Sponsors listing for this user or organization.
	 */
	sponsorsListing?: Nullable<SponsorsListing>;

	/**
	 * The viewer's sponsorship of this entity.
	 */
	sponsorshipForViewerAsSponsor?: Nullable<Sponsorship>;

	/**
	 * This object's sponsorships as the maintainer.
	 */
	sponsorshipsAsMaintainer: SponsorshipConnection &
		((
			args: PagingArgs &
				OrderBy<SponsorshipOrderField, SponsorshipOrder> & {
					/**
					 * Whether or not to include private sponsorships in the result set.
					 *
					 * @defaultValue false
					 */
					includePrivate?: Nullable<boolean>;
				}
		) => SponsorshipConnection);

	/**
	 * This object's sponsorships as the sponsor.
	 */
	sponsorshipsAsSponsor: SponsorshipConnection &
		((args: PagingArgs & OrderBy<SponsorshipOrderField, SponsorshipOrder>) => SponsorshipConnection);

	/**
	 * Whether or not the viewer is able to sponsor this user/organization.
	 */
	viewerCanSponsor: boolean;

	/**
	 * True if the viewer is sponsoring this user/organization.
	 */
	viewerIsSponsoring: boolean;
}

/**
 * Things that can be starred
 */
export interface Starrable extends Node {
	/**
	 * Returns a count of how many stargazers there are on this object
	 */
	stargazerCount: number;

	/**
	 * A list of users who have starred this starrable.
	 */
	stargazers: StargazerConnection & ((args: PagingArgs & OrderBy<StarOrderField, StarOrder>) => StargazerConnection);

	/**
	 * Returns a boolean indicating whether the viewing user has starred this starrable.
	 */
	viewerHasStarred: boolean;
}

/**
 * Entities that can be subscribed to for web and email notifications.
 */
export interface Subscribable extends Node {
	/**
	 * Check if the viewer is able to change their subscription status for the repository.
	 */
	viewerCanSubscribe: boolean;

	/**
	 * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
	 */
	viewerSubscription?: Nullable<SubscriptionState>;
}

/**
 * Metadata for an audit entry with action team.
 */
export interface TeamAuditEntryData {
	/**
	 * The team associated with the action.
	 */
	team?: Nullable<Team>;

	/**
	 * The name of the team.
	 */
	teamName?: Nullable<string>;

	/**
	 * The HTTP path for this team.
	 */
	teamResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for this team.
	 */
	teamUrl?: Nullable<string>;
}

/**
 * Metadata for an audit entry with a topic.
 */
export interface TopicAuditEntryData {
	/**
	 * The name of the topic added to the repository.
	 */
	topic?: Nullable<Topic>;

	/**
	 * The name of the topic added to the repository.
	 */
	topicName?: Nullable<string>;
}

/**
 * Represents a interface that can be retrieved by a URL.
 */
export interface UniformResourceLocatable {
	/**
	 * The HTML path to this resource.
	 */
	resourcePath: string;

	/**
	 * The URL to this resource.
	 */
	url: string;
}

/**
 * Entities that can be updated.
 */
export interface Updatable {
	/**
	 * Check if the current viewer can update this object.
	 */
	viewerCanUpdate: boolean;
}

/**
 * Comments that can be updated.
 */
export interface UpdatableComment {
	/**
	 * Reasons why the current viewer can not update this comment.
	 */
	viewerCannotUpdateReasons: CommentCannotUpdateReason[];
}
